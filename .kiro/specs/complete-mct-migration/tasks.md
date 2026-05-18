# Implementation Plan: Complete MCT Tours Migration

## Overview

This implementation plan completes the Next.js to Laravel migration for the MCT Tours application. The migration addresses critical issues preventing production deployment: Tour model UUID/integer mismatch, missing admin authorization, incomplete data seeding from tours.ts, missing route model binding by slug, and insufficient test coverage. The implementation uses Laravel 13, Inertia.js v3, React 19, and Pest v4 for testing.

## Tasks

- [x] 1. Fix Tour model and migration primary key type
  - [x] 1.1 Update tours migration to use integer primary key and string nights field
    - Modify `database/migrations/2026_05_17_232753_create_tours_table.php`
    - Change `$table->uuid('id')->primary()` to `$table->id()`
    - Change `$table->integer('nights')` to `$table->string('nights')->nullable()`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 7.1, 7.3_
  
  - [x] 1.2 Remove HasUuids trait from Tour model
    - Remove `HasUuids` from use statement in `app/Models/Tour.php`
    - Add `getRouteKeyName()` method returning 'slug' for route model binding
    - Add `scopePublished()` query scope for filtering published tours
    - _Requirements: 1.1, 1.2, 5.1, 5.2, 10.1_
  
  - [x] 1.3 Run migration refresh to apply schema changes
    - Execute `php artisan migrate:fresh` to recreate database with correct schema
    - _Requirements: 1.3, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 2. Implement admin authorization middleware
  - [x] 2.1 Create EnsureUserIsAdmin middleware
    - Create `app/Http/Middleware/EnsureUserIsAdmin.php`
    - Implement handle method checking authentication and role === "ADMIN"
    - Redirect unauthenticated users to login route
    - Return 403 for authenticated non-admin users
    - _Requirements: 2.2, 2.3, 8.2, 8.3, 8.4_
  
  - [x] 2.2 Register middleware in bootstrap/app.php
    - Add middleware alias 'admin' in withMiddleware configuration
    - _Requirements: 8.5_
  
  - [x] 2.3 Update admin routes to use admin middleware
    - Modify `routes/web.php` admin route group
    - Add 'admin' to middleware array: `->middleware(['auth', 'admin'])`
    - _Requirements: 2.1, 2.4, 8.6_

- [x] 3. Implement TourSeeder with tours.ts parsing
  - [x] 3.1 Create TourSeeder that reads and parses tours.ts
    - Modify `database/seeders/TourSeeder.php`
    - Read file from `resource_path('js/lib/tours.ts')`
    - Use regex to extract tours array from TypeScript export
    - Implement `convertTsToJson()` helper method for TypeScript to JSON conversion
    - Transform camelCase properties to snake_case database columns
    - Map 'id' field from tours.ts to 'slug' column in database
    - Set is_published to true for all seeded tours
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 4. Update DatabaseSeeder to create admin user
  - [x] 4.1 Modify DatabaseSeeder to create admin user and call TourSeeder
    - Update `database/seeders/DatabaseSeeder.php`
    - Create User with email "admin@mct.com", password "admin123", role "ADMIN"
    - Call TourSeeder after creating admin user
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [x] 4.2 Run database seeder to populate data
    - Execute `php artisan db:seed` to create admin user and seed tours
    - Verify admin user exists and tours are populated from tours.ts
    - _Requirements: 4.5_

- [x] 5. Update controllers for publication filtering and route binding
  - [x] 5.1 Update TourController to filter published tours
    - Modify `app/Http/Controllers/TourController.php`
    - Update index method to use `Tour::published()->orderBy('title')->get()`
    - Update show method to abort(404) if tour is not published
    - _Requirements: 10.1, 10.2, 10.4_
  
  - [x] 5.2 Verify Admin\TourController displays all tours
    - Check `app/Http/Controllers/Admin/TourController.php`
    - Ensure index method shows all tours regardless of publication status
    - _Requirements: 10.3_

- [x] 6. Checkpoint - Verify core functionality
  - Ensure all migrations run successfully
  - Verify admin user can log in with admin@mct.com / admin123
  - Verify tours are seeded from tours.ts with correct data
  - Verify route model binding resolves tours by slug
  - Ask the user if questions arise

- [ ] 7. Create comprehensive test suite
  - [ ]* 7.1 Create TourAuthorizationTest for admin access control
    - Create `tests/Feature/Admin/TourAuthorizationTest.php`
    - Test guest users redirected to login for admin routes
    - Test staff users receive 403 for admin routes
    - Test admin users can access admin tour index
    - Test admin users can create tours
    - Test admin users can update tours
    - Test admin users can delete tours
    - _Requirements: 2.1, 2.2, 2.3, 6.4, 6.5_
  
  - [ ]* 7.2 Create PublicTourTest for public tour viewing
    - Create `tests/Feature/PublicTourTest.php`
    - Test public tour index displays only published tours
    - Test public tour detail displays published tour
    - Test unpublished tours return 404 for public users
    - Test invalid tour slug returns 404
    - _Requirements: 6.1, 6.2, 10.1, 10.2_
  
  - [ ]* 7.3 Create RouteModelBindingTest for slug resolution
    - Create `tests/Feature/RouteModelBindingTest.php`
    - Test public tour routes resolve by slug
    - Test admin tour routes resolve by slug
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.7_
  
  - [ ]* 7.4 Create TourModelTest for model behavior
    - Create `tests/Unit/TourModelTest.php`
    - Test tour model casts itinerary to array
    - Test tour model casts included to array
    - Test tour model casts excluded to array
    - Test tour model uses slug as route key
    - Test published scope filters published tours
    - _Requirements: 6.6, 9.4_
  
  - [ ]* 7.5 Create TourValidationTest for validation rules
    - Create `tests/Feature/Admin/TourValidationTest.php`
    - Test tour creation requires title
    - Test tour creation requires unique slug
    - Test tour update allows same slug
    - Test itinerary must be array when provided
    - _Requirements: 6.3, 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [ ]* 7.6 Create TourSeederTest for seeder functionality
    - Create `tests/Feature/TourSeederTest.php`
    - Test tour seeder creates tours from tours.ts
    - Test seeder transforms camelCase to snake_case
    - Test seeder preserves JSON arrays
    - _Requirements: 3.1, 3.2, 3.4, 3.5_
  
  - [ ]* 7.7 Create DatabaseSeederTest for admin user creation
    - Create `tests/Feature/DatabaseSeederTest.php`
    - Test database seeder creates admin user with correct credentials
    - Test database seeder calls tour seeder
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

- [x] 8. Run complete test suite and verify all tests pass
  - Execute `php artisan test --compact` to run all tests
  - Verify zero test failures
  - _Requirements: 6.8_

- [x] 9. Run Laravel Pint to format code
  - Execute `vendor/bin/pint --dirty --format agent` to format modified PHP files
  - Ensure code matches project style conventions

- [-] 10. Final checkpoint - Production readiness verification
  - Ensure all tests pass with zero failures
  - Verify admin authorization works correctly (guest/staff/admin scenarios)
  - Verify public routes show only published tours
  - Verify admin routes show all tours
  - Verify route model binding resolves by slug
  - Verify tours.ts data is correctly seeded
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional test-related sub-tasks and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation of core functionality
- The design document uses PHP/Laravel, so no language selection is needed
- Route model binding works automatically via `getRouteKeyName()` method
- All tests use Pest v4 with example-based testing (no property-based tests needed)
- Migration must be refreshed before seeding to apply schema changes
- Admin user credentials: admin@mct.com / admin123
- TourSeeder parses TypeScript file and transforms data to match database schema

## Task Dependency Graph

```json
{
  "waves": [
    {
      "id": 0,
      "tasks": ["1.1"]
    },
    {
      "id": 1,
      "tasks": ["1.2", "2.1"]
    },
    {
      "id": 2,
      "tasks": ["1.3", "2.2", "3.1"]
    },
    {
      "id": 3,
      "tasks": ["2.3", "4.1"]
    },
    {
      "id": 4,
      "tasks": ["4.2", "5.1", "5.2"]
    },
    {
      "id": 5,
      "tasks": ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"]
    }
  ]
}
```
