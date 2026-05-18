# Design Document: Complete MCT Tours Migration

## Overview

This design addresses the completion of the Next.js to Laravel migration for the MCT Tours application. The migration has been partially completed, but critical issues prevent production deployment:

1. **Primary Key Type Mismatch**: The Tour model uses `HasUuids` trait while the migration defines a UUID primary key, but the requirements specify integer IDs
2. **Missing Authorization**: Admin routes lack role-based access control
3. **Incomplete Data Seeding**: Tours are seeded with fake factory data instead of real tour content from `tours.ts`
4. **Missing Route Model Binding**: Tours are not resolved by slug in routes
5. **Insufficient Test Coverage**: No comprehensive test suite exists

### Design Goals

- Fix Tour model/migration primary key inconsistency by switching to integer IDs
- Implement role-based authorization middleware for admin routes
- Create a TypeScript-to-PHP data transformation seeder
- Configure route model binding by slug for SEO-friendly URLs
- Establish comprehensive test coverage for all tour functionality
- Ensure public routes filter by publication status

### Technology Stack

- **Backend**: Laravel 13, PHP 8.5
- **Frontend**: Inertia.js v3, React 19
- **Authentication**: Laravel Fortify v1
- **Testing**: Pest v4
- **Database**: MySQL/PostgreSQL (via Eloquent)
- **Build Tools**: Vite, Tailwind CSS v4

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser (React 19)                      │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │ Public Tours   │  │ Admin Tours    │  │ Auth Pages    │ │
│  │ Pages          │  │ Pages          │  │               │ │
│  └────────┬───────┘  └────────┬───────┘  └───────┬───────┘ │
└───────────┼──────────────────┼──────────────────┼──────────┘
            │                  │                  │
            │ Inertia.js v3    │                  │
            │                  │                  │
┌───────────┼──────────────────┼──────────────────┼──────────┐
│           ▼                  ▼                  ▼           │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │ TourController │  │ Admin\Tour     │  │ Fortify       │ │
│  │                │  │ Controller     │  │ Controllers   │ │
│  └────────┬───────┘  └────────┬───────┘  └───────────────┘ │
│           │                   │                             │
│           │         ┌─────────┴─────────┐                   │
│           │         │ EnsureUserIsAdmin │                   │
│           │         │ Middleware        │                   │
│           │         └─────────┬─────────┘                   │
│           │                   │                             │
│           ▼                   ▼                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Tour Model (Eloquent)                    │  │
│  │  - Integer ID primary key                            │  │
│  │  - Route model binding by slug                       │  │
│  │  - JSON casting for itinerary/included/excluded      │  │
│  └──────────────────────┬───────────────────────────────┘  │
│                         │                                   │
│                         ▼                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              MySQL/PostgreSQL Database                │  │
│  │  - tours table (integer id, unique slug)             │  │
│  │  - users table (with role column)                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│                    Laravel 13 Application                   │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow

#### Public Tour Viewing
1. User navigates to `/tours` or `/tours/{slug}`
2. Route resolves Tour model by slug via route model binding
3. TourController queries only published tours
4. Inertia renders React page with tour data
5. React component displays tour information

#### Admin Tour Management
1. Admin user navigates to `/admin/tours/*`
2. `auth` middleware verifies authentication
3. `EnsureUserIsAdmin` middleware checks role === "ADMIN"
4. If authorized, Admin\TourController handles CRUD operations
5. Validation ensures data integrity
6. Inertia renders admin React pages

### Data Flow

```
tours.ts (TypeScript)
    │
    ├─ TourSeeder reads file
    │  ├─ Parses TypeScript export
    │  ├─ Transforms camelCase → snake_case
    │  ├─ Converts arrays to JSON
    │  └─ Inserts into database
    │
    ▼
tours table (Database)
    │
    ├─ Tour Model (Eloquent)
    │  ├─ Casts JSON fields to arrays
    │  ├─ Route binding by slug
    │  └─ Validation rules
    │
    ▼
Controllers
    │
    ├─ Public: Filter by is_published
    ├─ Admin: Show all tours
    │
    ▼
Inertia Pages (React)
```


## Components and Interfaces

### 1. Database Migration Fix

**File**: `database/migrations/2026_05_17_232753_create_tours_table.php`

**Current Issue**: Migration uses `$table->uuid('id')->primary()` and `$table->integer('nights')`

**Required Changes**:
```php
// Change from:
$table->uuid('id')->primary();
$table->integer('nights')->nullable();

// Change to:
$table->id(); // Auto-increment integer primary key
$table->string('nights')->nullable(); // String to match tours.ts format
```

**Rationale**: 
- Integer IDs are simpler, more performant, and align with Laravel conventions
- The `nights` field in tours.ts contains values like "7 Nights", requiring string type
- Slug provides the unique identifier for public-facing URLs

### 2. Tour Model Refactoring

**File**: `app/Models/Tour.php`

**Current Implementation**:
```php
use HasFactory, HasUuids;
```

**Required Changes**:
```php
use HasFactory; // Remove HasUuids

// Add route key name method for slug-based binding
public function getRouteKeyName(): string
{
    return 'slug';
}

// Add scope for published tours
public function scopePublished($query)
{
    return $query->where('is_published', true);
}
```

**Interface**:
- **Properties**: All existing fillable fields remain unchanged
- **Casts**: JSON casting for `itinerary`, `included`, `excluded` arrays
- **Route Binding**: Resolves by `slug` instead of `id`
- **Scopes**: `published()` scope for filtering public tours

### 3. EnsureUserIsAdmin Middleware

**File**: `app/Http/Middleware/EnsureUserIsAdmin.php` (new)

**Interface**:
```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()) {
            return redirect()->route('login');
        }

        if ($request->user()->role !== 'ADMIN') {
            abort(403, 'Unauthorized access.');
        }

        return $next($request);
    }
}
```

**Registration**: Add to `bootstrap/app.php`:
```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        'admin' => \App\Http\Middleware\EnsureUserIsAdmin::class,
    ]);
})
```

**Behavior**:
- Checks authentication first (redirects to login if not authenticated)
- Verifies user role equals "ADMIN"
- Returns 403 Forbidden for non-admin authenticated users
- Allows request to proceed for admin users

### 4. TourSeeder Implementation

**File**: `database/seeders/TourSeeder.php`

**Current Implementation**: Uses `Tour::factory()->count(10)->create()`

**Required Implementation**:

```php
namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TourSeeder extends Seeder
{
    public function run(): void
    {
        // Read the TypeScript file
        $toursFile = resource_path('js/lib/tours.ts');
        $content = File::get($toursFile);
        
        // Extract the tours array using regex
        preg_match('/export const tours: Tour\[\] = (\[[\s\S]*?\]);/m', $content, $matches);
        
        if (empty($matches[1])) {
            throw new \Exception('Could not parse tours from tours.ts');
        }
        
        // Convert TypeScript to JSON (handle trailing commas, etc.)
        $jsonString = $this->convertTsToJson($matches[1]);
        $tours = json_decode($jsonString, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \Exception('JSON parsing error: ' . json_last_error_msg());
        }
        
        // Transform and insert each tour
        foreach ($tours as $tour) {
            Tour::create([
                'slug' => $tour['id'], // Use 'id' from TS as 'slug' in DB
                'title' => $tour['title'],
                'duration' => $tour['duration'],
                'nights' => $tour['nights'],
                'starting_point' => $tour['startingPoint'],
                'arrival_city' => $tour['arrivalCity'] ?? null,
                'description' => $tour['description'],
                'url' => $tour['url'],
                'image' => $tour['image'] ?? null,
                'accommodation' => $tour['accommodation'] ?? null,
                'guide' => $tour['guide'] ?? null,
                'trip_type' => $tour['tripType'] ?? null,
                'difficulty' => $tour['difficulty'] ?? null,
                'languages' => $tour['languages'] ?? null,
                'itinerary' => $tour['itinerary'] ?? null,
                'included' => $tour['included'] ?? null,
                'excluded' => $tour['excluded'] ?? null,
                'is_published' => true, // Default to published for initial seed
            ]);
        }
    }
    
    private function convertTsToJson(string $tsArray): string
    {
        // Remove trailing commas before closing brackets/braces
        $json = preg_replace('/,(\s*[}\]])/', '$1', $tsArray);
        
        // Convert single quotes to double quotes for JSON
        $json = str_replace("'", '"', $json);
        
        return $json;
    }
}
```

**Data Transformation Rules**:
- `id` (TS) → `slug` (DB)
- `startingPoint` (TS) → `starting_point` (DB)
- `arrivalCity` (TS) → `arrival_city` (DB)
- `tripType` (TS) → `trip_type` (DB)
- Arrays remain as arrays (Eloquent casts to JSON automatically)

### 5. DatabaseSeeder Update

**File**: `database/seeders/DatabaseSeeder.php`

**Required Implementation**:
```php
public function run(): void
{
    // Create admin user
    User::create([
        'name' => 'Admin User',
        'email' => 'admin@mct.com',
        'password' => 'admin123', // Will be hashed by User model
        'role' => 'ADMIN',
    ]);
    
    // Seed tours from tours.ts
    $this->call(TourSeeder::class);
}
```

### 6. Controller Updates

#### TourController (Public)

**File**: `app/Http/Controllers/TourController.php`

**Required Changes**:
```php
public function index(): Response
{
    return Inertia::render('Tours/Index', [
        'tours' => Tour::published()
            ->orderBy('title')
            ->get(),
    ]);
}

public function show(Tour $tour): Response
{
    // Abort if tour is not published
    if (!$tour->is_published) {
        abort(404);
    }
    
    return Inertia::render('Tours/Show', [
        'tour' => $tour,
    ]);
}
```

#### Admin\TourController

**File**: `app/Http/Controllers/Admin/TourController.php`

**Current State**: Already has proper validation
**Required Changes**: None (validation already matches requirements)

### 7. Route Configuration

**File**: `routes/web.php`

**Required Changes**:
```php
// Public routes - no changes needed, route model binding works automatically
Route::get('tours', [TourController::class, 'index'])->name('tours.index');
Route::get('tours/{tour}', [TourController::class, 'show'])->name('tours.show');

// Admin routes - add 'admin' middleware
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('tours', [App\Http\Controllers\Admin\TourController::class, 'index'])->name('tours.index');
    Route::get('tours/create', [App\Http\Controllers\Admin\TourController::class, 'create'])->name('tours.create');
    Route::post('tours', [App\Http\Controllers\Admin\TourController::class, 'store'])->name('tours.store');
    Route::get('tours/{tour}/edit', [App\Http\Controllers\Admin\TourController::class, 'edit'])->name('tours.edit');
    Route::put('tours/{tour}', [App\Http\Controllers\Admin\TourController::class, 'update'])->name('tours.update');
    Route::delete('tours/{tour}', [App\Http\Controllers\Admin\TourController::class, 'destroy'])->name('tours.destroy');
});
```

**Route Model Binding**: Laravel automatically resolves `{tour}` parameter using `Tour::where('slug', $slug)->firstOrFail()` because of the `getRouteKeyName()` method.


## Data Models

### Tour Model Schema

```php
Schema::create('tours', function (Blueprint $table) {
    $table->id();                                    // Auto-increment integer
    $table->string('slug')->unique();                // URL-friendly identifier
    $table->string('title');                         // Tour name
    $table->string('duration')->nullable();          // e.g., "8 Days"
    $table->string('nights')->nullable();            // e.g., "7 Nights" (string!)
    $table->string('starting_point')->nullable();    // e.g., "Casablanca"
    $table->string('arrival_city')->nullable();      // e.g., "Marrakech"
    $table->text('description')->nullable();         // Tour description
    $table->string('url')->nullable();               // Original URL
    $table->string('image')->nullable();             // Image path
    $table->string('accommodation')->nullable();     // e.g., "4-Star Hotels"
    $table->string('guide')->nullable();             // Guide information
    $table->string('trip_type')->nullable();         // e.g., "Cultural"
    $table->string('difficulty')->nullable();        // e.g., "Easy"
    $table->string('languages')->nullable();         // e.g., "English, French"
    $table->json('itinerary')->nullable();           // Array of day objects
    $table->json('included')->nullable();            // Array of strings
    $table->json('excluded')->nullable();            // Array of strings
    $table->boolean('is_published')->default(false); // Publication status
    $table->timestamps();                            // created_at, updated_at
});
```

### User Model Schema

```php
// Existing schema - no changes needed
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->string('role')->default('STAFF'); // ADMIN, STAFF
    $table->rememberToken();
    $table->timestamps();
});
```

### Data Relationships

- **No relationships**: Tours are standalone entities
- **User roles**: Users have a `role` field determining authorization level

### JSON Field Structures

#### Itinerary
```json
[
  {
    "day": "Day 1",
    "title": "Arrival in Casablanca",
    "description": "Welcome to Morocco! Upon arrival..."
  },
  {
    "day": "Day 2",
    "title": "Casablanca to Rabat",
    "description": "After breakfast, depart for Rabat..."
  }
]
```

#### Included/Excluded
```json
[
  "Transfer from and back to Airport",
  "A Comfort A/C Van/minibus",
  "Meals (Breakfast, Dinners)"
]
```


## Correctness Properties

### Property-Based Testing Applicability Assessment

This feature involves:
- **CRUD operations** for tours (simple database operations)
- **Authorization middleware** (role checking with fixed logic)
- **Data seeding** (one-time transformation from TypeScript to database)
- **Route model binding** (Laravel framework feature)
- **Publication filtering** (simple boolean query)

**Assessment**: Property-based testing is **NOT appropriate** for this feature because:

1. **Simple CRUD operations**: Creating, reading, updating, and deleting tours are straightforward database operations with no complex transformation logic that would benefit from testing across many generated inputs.

2. **Authorization is deterministic**: Role checking has three fixed states (unauthenticated, non-admin, admin) that are better tested with example-based tests.

3. **Data seeding is one-time**: The seeder transforms a fixed TypeScript file once during setup, not a function that processes varying inputs.

4. **No universal properties**: There are no meaningful "for all inputs X, property P(X) holds" statements that would add value beyond example-based tests.

**Testing Strategy**: This feature will use **example-based unit and feature tests** with Pest to verify:
- Specific authorization scenarios (guest, staff, admin)
- CRUD operations with concrete tour data
- Publication filtering with published/unpublished examples
- Route model binding with specific slugs
- Seeder output validation


## Error Handling

### Validation Errors

**Admin Tour Creation/Update**:
- **Missing required fields**: Return 422 with validation error messages
- **Duplicate slug**: Return 422 with "The slug has already been taken"
- **Invalid array format**: Return 422 with "The itinerary must be an array"

**Example Response**:
```json
{
  "message": "The slug has already been taken.",
  "errors": {
    "slug": ["The slug has already been taken."]
  }
}
```

### Authorization Errors

**Unauthenticated Access to Admin Routes**:
- **Response**: Redirect to `/login` route
- **Status**: 302 Found

**Non-Admin Access to Admin Routes**:
- **Response**: 403 Forbidden page
- **Message**: "Unauthorized access."
- **Behavior**: Inertia renders error page with message

### Not Found Errors

**Invalid Tour Slug**:
- **Response**: 404 Not Found page
- **Behavior**: Laravel's default 404 handling via Inertia

**Unpublished Tour Access (Public)**:
- **Response**: 404 Not Found (not 403, to avoid revealing existence)
- **Behavior**: Same as invalid slug

### Seeder Errors

**TypeScript File Not Found**:
- **Exception**: `\Exception` with message "tours.ts file not found"
- **Behavior**: Seeder fails, database rollback

**Invalid TypeScript Format**:
- **Exception**: `\Exception` with message "Could not parse tours from tours.ts"
- **Behavior**: Seeder fails, database rollback

**JSON Parsing Error**:
- **Exception**: `\Exception` with message "JSON parsing error: [error details]"
- **Behavior**: Seeder fails, database rollback

### Database Errors

**Duplicate Slug on Seed**:
- **Exception**: `Illuminate\Database\QueryException`
- **Behavior**: Seeder fails with unique constraint violation
- **Prevention**: Truncate tours table before seeding in development

**Migration Rollback**:
- **Behavior**: Drop tours table if exists
- **Data Loss**: Acceptable in development; production requires backup


## Testing Strategy

### Testing Approach

This feature uses **example-based testing** with Pest v4. Tests are organized into:
- **Feature Tests**: End-to-end HTTP request/response testing
- **Unit Tests**: Isolated component testing (models, middleware)

### Test Coverage Requirements

#### 1. Authorization Tests

**File**: `tests/Feature/Admin/TourAuthorizationTest.php`

**Test Cases**:
```php
test('guest users are redirected to login when accessing admin tours', function () {
    $response = get(route('admin.tours.index'));
    $response->assertRedirect(route('login'));
});

test('staff users receive 403 when accessing admin tours', function () {
    $user = User::factory()->create(['role' => 'STAFF']);
    
    actingAs($user)
        ->get(route('admin.tours.index'))
        ->assertForbidden();
});

test('admin users can access admin tour index', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    
    actingAs($admin)
        ->get(route('admin.tours.index'))
        ->assertOk();
});

test('admin users can create tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    
    actingAs($admin)
        ->post(route('admin.tours.store'), [
            'title' => 'Test Tour',
            'slug' => 'test-tour',
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'A wonderful test tour',
            'is_published' => true,
        ])
        ->assertRedirect(route('admin.tours.index'));
    
    expect(Tour::where('slug', 'test-tour')->exists())->toBeTrue();
});

test('admin users can update tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    $tour = Tour::factory()->create(['slug' => 'original-slug']);
    
    actingAs($admin)
        ->put(route('admin.tours.update', $tour), [
            'title' => 'Updated Title',
            'slug' => 'original-slug',
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Updated description',
            'is_published' => true,
        ])
        ->assertRedirect(route('admin.tours.index'));
    
    expect($tour->fresh()->title)->toBe('Updated Title');
});

test('admin users can delete tours', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    $tour = Tour::factory()->create();
    
    actingAs($admin)
        ->delete(route('admin.tours.destroy', $tour))
        ->assertRedirect(route('admin.tours.index'));
    
    expect(Tour::find($tour->id))->toBeNull();
});
```

**Validates**: Requirements 2, 8

#### 2. Public Tour Tests

**File**: `tests/Feature/PublicTourTest.php`

**Test Cases**:
```php
test('public tour index displays only published tours', function () {
    Tour::factory()->create(['slug' => 'published-tour', 'is_published' => true]);
    Tour::factory()->create(['slug' => 'unpublished-tour', 'is_published' => false]);
    
    $response = get(route('tours.index'));
    
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Tours/Index')
        ->has('tours', 1)
        ->where('tours.0.slug', 'published-tour')
    );
});

test('public tour detail displays published tour', function () {
    $tour = Tour::factory()->create(['slug' => 'test-tour', 'is_published' => true]);
    
    $response = get(route('tours.show', $tour));
    
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('Tours/Show')
        ->where('tour.slug', 'test-tour')
    );
});

test('unpublished tours return 404 for public users', function () {
    $tour = Tour::factory()->create(['slug' => 'unpublished', 'is_published' => false]);
    
    get(route('tours.show', $tour))->assertNotFound();
});

test('invalid tour slug returns 404', function () {
    get(route('tours.show', 'non-existent-slug'))->assertNotFound();
});
```

**Validates**: Requirements 5, 10

#### 3. Route Model Binding Tests

**File**: `tests/Feature/RouteModelBindingTest.php`

**Test Cases**:
```php
test('tour routes resolve by slug', function () {
    $tour = Tour::factory()->create(['slug' => 'my-tour', 'is_published' => true]);
    
    $response = get("/tours/my-tour");
    
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->where('tour.id', $tour->id)
        ->where('tour.slug', 'my-tour')
    );
});

test('admin tour routes resolve by slug', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    $tour = Tour::factory()->create(['slug' => 'admin-tour']);
    
    actingAs($admin)
        ->get("/admin/tours/admin-tour/edit")
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->where('tour.slug', 'admin-tour')
        );
});
```

**Validates**: Requirement 5

#### 4. Tour Model Tests

**File**: `tests/Unit/TourModelTest.php`

**Test Cases**:
```php
test('tour model casts itinerary to array', function () {
    $tour = Tour::factory()->create([
        'itinerary' => [
            ['day' => 'Day 1', 'title' => 'Arrival', 'description' => 'Welcome'],
        ],
    ]);
    
    expect($tour->itinerary)->toBeArray();
    expect($tour->itinerary[0]['day'])->toBe('Day 1');
});

test('tour model casts included to array', function () {
    $tour = Tour::factory()->create([
        'included' => ['Breakfast', 'Transport'],
    ]);
    
    expect($tour->included)->toBeArray();
    expect($tour->included)->toContain('Breakfast');
});

test('tour model casts excluded to array', function () {
    $tour = Tour::factory()->create([
        'excluded' => ['Lunch', 'Drinks'],
    ]);
    
    expect($tour->excluded)->toBeArray();
    expect($tour->excluded)->toContain('Lunch');
});

test('tour model uses slug as route key', function () {
    $tour = new Tour();
    expect($tour->getRouteKeyName())->toBe('slug');
});

test('published scope filters published tours', function () {
    Tour::factory()->create(['is_published' => true]);
    Tour::factory()->create(['is_published' => false]);
    
    $publishedCount = Tour::published()->count();
    
    expect($publishedCount)->toBe(1);
});
```

**Validates**: Requirements 1, 6, 9

#### 5. Validation Tests

**File**: `tests/Feature/Admin/TourValidationTest.php`

**Test Cases**:
```php
test('tour creation requires title', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    
    actingAs($admin)
        ->post(route('admin.tours.store'), [
            'slug' => 'test-tour',
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Test description',
        ])
        ->assertSessionHasErrors('title');
});

test('tour creation requires unique slug', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    Tour::factory()->create(['slug' => 'existing-slug']);
    
    actingAs($admin)
        ->post(route('admin.tours.store'), [
            'title' => 'Test Tour',
            'slug' => 'existing-slug',
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Test description',
        ])
        ->assertSessionHasErrors('slug');
});

test('tour update allows same slug', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    $tour = Tour::factory()->create(['slug' => 'my-slug']);
    
    actingAs($admin)
        ->put(route('admin.tours.update', $tour), [
            'title' => 'Updated Title',
            'slug' => 'my-slug', // Same slug should be allowed
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Test description',
        ])
        ->assertSessionDoesntHaveErrors();
});

test('itinerary must be array when provided', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);
    
    actingAs($admin)
        ->post(route('admin.tours.store'), [
            'title' => 'Test Tour',
            'slug' => 'test-tour',
            'duration' => '5 Days',
            'nights' => '4 Nights',
            'starting_point' => 'Marrakech',
            'description' => 'Test description',
            'itinerary' => 'not-an-array',
        ])
        ->assertSessionHasErrors('itinerary');
});
```

**Validates**: Requirement 9

#### 6. Seeder Tests

**File**: `tests/Feature/TourSeederTest.php`

**Test Cases**:
```php
test('tour seeder creates tours from tours.ts', function () {
    // Ensure tours table is empty
    Tour::truncate();
    
    // Run seeder
    $this->seed(TourSeeder::class);
    
    // Verify tours were created
    expect(Tour::count())->toBeGreaterThan(0);
    
    // Verify specific tour exists with correct data
    $tour = Tour::where('slug', 'imperial-cities-tour-from-casablanca')->first();
    expect($tour)->not->toBeNull();
    expect($tour->title)->toBe('Imperial Cities Tour From Casablanca');
    expect($tour->duration)->toBe('8 Days');
    expect($tour->nights)->toBe('7 Nights');
});

test('seeder transforms camelCase to snake_case', function () {
    Tour::truncate();
    $this->seed(TourSeeder::class);
    
    $tour = Tour::first();
    expect($tour->starting_point)->not->toBeNull();
    expect($tour->arrival_city)->not->toBeNull();
});

test('seeder preserves JSON arrays', function () {
    Tour::truncate();
    $this->seed(TourSeeder::class);
    
    $tour = Tour::whereNotNull('itinerary')->first();
    expect($tour->itinerary)->toBeArray();
    expect($tour->itinerary[0])->toHaveKeys(['day', 'title', 'description']);
});
```

**Validates**: Requirement 3

#### 7. Database Seeder Tests

**File**: `tests/Feature/DatabaseSeederTest.php`

**Test Cases**:
```php
test('database seeder creates admin user', function () {
    User::truncate();
    Tour::truncate();
    
    $this->seed(DatabaseSeeder::class);
    
    $admin = User::where('email', 'admin@mct.com')->first();
    expect($admin)->not->toBeNull();
    expect($admin->role)->toBe('ADMIN');
    expect(Hash::check('admin123', $admin->password))->toBeTrue();
});

test('database seeder calls tour seeder', function () {
    User::truncate();
    Tour::truncate();
    
    $this->seed(DatabaseSeeder::class);
    
    expect(Tour::count())->toBeGreaterThan(0);
});
```

**Validates**: Requirement 4

### Test Execution

**Run all tests**:
```bash
php artisan test --compact
```

**Run specific test suite**:
```bash
php artisan test --compact tests/Feature/Admin/TourAuthorizationTest.php
```

**Run with coverage** (requires Xdebug):
```bash
php artisan test --coverage
```

### Continuous Integration

Tests should run on every commit via CI/CD pipeline:
1. Run `php artisan test --compact`
2. Fail build if any test fails
3. Require all tests passing before merge


## Implementation Notes

### Migration Strategy

#### Phase 1: Database Schema Fix
1. Create new migration to modify tours table:
   - Change `id` from UUID to auto-increment integer
   - Change `nights` from integer to string
2. This requires dropping and recreating the table (acceptable in development)
3. Alternative: Create fresh migration and delete old one if no production data exists

#### Phase 2: Model Updates
1. Remove `HasUuids` trait from Tour model
2. Add `getRouteKeyName()` method returning 'slug'
3. Add `published()` scope
4. Verify JSON casting works correctly

#### Phase 3: Middleware Implementation
1. Create `EnsureUserIsAdmin` middleware
2. Register middleware alias in `bootstrap/app.php`
3. Apply to admin route group

#### Phase 4: Seeder Implementation
1. Implement TypeScript parsing logic in TourSeeder
2. Test with actual tours.ts file
3. Handle edge cases (missing fields, malformed JSON)
4. Update DatabaseSeeder to create admin user and call TourSeeder

#### Phase 5: Controller Updates
1. Add publication filtering to public TourController
2. Verify admin controller validation rules
3. Test route model binding

#### Phase 6: Testing
1. Write all test cases
2. Run tests and fix failures
3. Achieve 100% pass rate

### Development Workflow

```bash
# 1. Create new migration (or modify existing)
php artisan make:migration fix_tours_table_schema

# 2. Run migration
php artisan migrate:fresh

# 3. Create middleware
php artisan make:middleware EnsureUserIsAdmin

# 4. Seed database
php artisan db:seed

# 5. Run tests
php artisan test --compact

# 6. Format code
vendor/bin/pint --dirty --format agent
```

### Rollback Plan

If issues arise:
1. **Database**: `php artisan migrate:rollback` restores previous schema
2. **Seeder**: Truncate tours table and re-run with fixes
3. **Middleware**: Remove from route group, requests pass through
4. **Tests**: Identify failing tests, fix implementation

### Performance Considerations

#### Database Queries
- **Index on slug**: Already unique, automatically indexed
- **Index on is_published**: Consider adding for faster filtering
  ```php
  $table->index('is_published');
  ```
- **Eager loading**: Not needed (no relationships)

#### Seeder Performance
- **File reading**: One-time operation, acceptable
- **Bulk insert**: Consider using `DB::table('tours')->insert()` for better performance
- **Transaction**: Wrap in transaction for atomicity

#### Route Model Binding
- **Caching**: Consider route caching in production
  ```bash
  php artisan route:cache
  ```

### Security Considerations

#### Authorization
- **Middleware order**: `auth` must run before `admin`
- **Role verification**: Check exact string match "ADMIN"
- **403 vs 404**: Use 404 for unpublished tours to avoid information disclosure

#### Input Validation
- **XSS prevention**: Laravel escapes output by default in Blade/Inertia
- **SQL injection**: Eloquent uses parameterized queries
- **Mass assignment**: Use `$fillable` to control assignable fields

#### Password Security
- **Admin password**: Change default password in production
- **Hashing**: User model automatically hashes password field
- **Environment**: Store credentials in `.env`, not in code

### Deployment Checklist

Before deploying to production:

- [ ] Change admin password from default
- [ ] Run `php artisan migrate` (not `migrate:fresh`)
- [ ] Run `php artisan db:seed` only once
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`
- [ ] Run `npm run build` for frontend assets
- [ ] Verify all tests pass
- [ ] Test authorization in staging environment
- [ ] Backup database before migration

### Monitoring and Maintenance

#### Logging
- **Authorization failures**: Log 403 responses for security monitoring
- **Seeder errors**: Log parsing failures for debugging
- **Failed validations**: Already logged by Laravel

#### Metrics
- **Tour views**: Track popular tours
- **Admin actions**: Audit log for tour modifications
- **Error rates**: Monitor 404/403 responses

### Future Enhancements

Potential improvements beyond this specification:

1. **Tour Categories**: Add taxonomy for organizing tours
2. **Image Upload**: Replace image paths with actual file uploads
3. **Multi-language**: Support multiple languages for tour content
4. **Booking Integration**: Add booking functionality
5. **SEO Optimization**: Add meta tags, structured data
6. **Tour Reviews**: Allow users to review tours
7. **Advanced Filtering**: Filter by duration, difficulty, price
8. **Admin Dashboard**: Analytics and reporting for admins

