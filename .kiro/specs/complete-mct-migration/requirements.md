# Requirements Document

## Introduction

This document specifies the requirements for completing the Next.js to Laravel migration for the MCT Tours application. The migration from Next.js 16 + Prisma to Laravel 13 + Inertia.js v3 + React 19 has been partially completed, but critical issues remain that prevent production deployment. This specification addresses authorization gaps, data seeding inconsistencies, model/migration mismatches, and missing test coverage.

## Glossary

- **Tour_System**: The Laravel application managing tour data and presentation
- **Admin_User**: A user with role "ADMIN" who can create, update, and delete tours
- **Staff_User**: A user with role "STAFF" who can only view public tours
- **Guest_User**: An unauthenticated visitor who can only view published tours
- **Tour_Model**: The Eloquent model representing tour entities
- **Tour_Seeder**: The database seeder that populates tours from tours.ts data
- **Authorization_Middleware**: Middleware that enforces role-based access control
- **Route_Model_Binding**: Laravel feature that resolves route parameters to model instances

## Requirements

### Requirement 1: Fix Tour Model Primary Key Type Mismatch

**User Story:** As a developer, I want the Tour model and migration to use consistent primary key types, so that database operations work correctly without UUID/integer conflicts.

#### Acceptance Criteria

1. THE Tour_Model SHALL use auto-increment integer primary keys matching the migration schema
2. THE Tour_Model SHALL NOT use the HasUuids trait
3. WHEN a Tour is created, THE Tour_System SHALL assign a sequential integer ID
4. FOR ALL Tour instances, the id field SHALL be an integer type

### Requirement 2: Implement Admin Role-Based Authorization

**User Story:** As a system administrator, I want only ADMIN users to access admin routes, so that unauthorized users cannot modify tour data.

#### Acceptance Criteria

1. WHEN a Guest_User attempts to access admin routes, THE Tour_System SHALL redirect to the login page
2. WHEN a Staff_User attempts to access admin routes, THE Tour_System SHALL return a 403 Forbidden response
3. WHEN an Admin_User accesses admin routes, THE Tour_System SHALL grant access
4. THE Tour_System SHALL apply authorization middleware to all routes under the /admin prefix
5. THE Tour_System SHALL verify the user's role is "ADMIN" before granting admin access

### Requirement 3: Seed Tours from TypeScript Data File

**User Story:** As a developer, I want tours seeded from the actual tours.ts data file, so that the application launches with real tour content instead of fake data.

#### Acceptance Criteria

1. THE Tour_Seeder SHALL read tour data from resources/js/lib/tours.ts
2. THE Tour_Seeder SHALL transform camelCase properties to snake_case database columns
3. THE Tour_Seeder SHALL preserve the original slug values from tours.ts as unique identifiers
4. THE Tour_Seeder SHALL convert TypeScript array data to JSON for itinerary, included, and excluded fields
5. WHEN the seeder runs, THE Tour_System SHALL create exactly one database record per tour in tours.ts
6. THE Tour_Seeder SHALL NOT use Tour::factory() for generating fake data

### Requirement 4: Seed Admin User in Database

**User Story:** As a system administrator, I want an admin user automatically created during seeding, so that I can immediately access admin functionality after setup.

#### Acceptance Criteria

1. THE DatabaseSeeder SHALL create a user with email "admin@mct.com"
2. THE DatabaseSeeder SHALL set the admin user's password to "admin123"
3. THE DatabaseSeeder SHALL set the admin user's role to "ADMIN"
4. THE DatabaseSeeder SHALL call the Tour_Seeder after creating the admin user
5. WHEN php artisan db:seed runs, THE Tour_System SHALL create both the admin user and all tours

### Requirement 5: Implement Route Model Binding by Slug

**User Story:** As a user, I want tour URLs to use readable slugs instead of numeric IDs, so that URLs are SEO-friendly and memorable.

#### Acceptance Criteria

1. WHEN a public tour route is accessed with a slug parameter, THE Tour_System SHALL resolve the Tour_Model by slug field
2. WHEN an admin tour route is accessed with a slug parameter, THE Tour_System SHALL resolve the Tour_Model by slug field
3. THE Tour_System SHALL return a 404 response when a slug does not match any tour
4. THE TourController SHALL receive resolved Tour_Model instances, not slug strings

### Requirement 6: Comprehensive Test Coverage for Tours

**User Story:** As a developer, I want comprehensive test coverage for tour functionality, so that I can confidently deploy changes without breaking existing features.

#### Acceptance Criteria

1. THE Tour_System SHALL have feature tests verifying public tour listing displays published tours
2. THE Tour_System SHALL have feature tests verifying public tour detail pages display correct tour data
3. THE Tour_System SHALL have feature tests verifying Guest_Users cannot access admin routes
4. THE Tour_System SHALL have feature tests verifying Staff_Users cannot access admin routes
5. THE Tour_System SHALL have feature tests verifying Admin_Users can create, update, and delete tours
6. THE Tour_System SHALL have unit tests verifying Tour_Model JSON casting for itinerary, included, and excluded fields
7. THE Tour_System SHALL have feature tests verifying route model binding resolves tours by slug
8. WHEN php artisan test runs, THE Tour_System SHALL pass all tests with zero failures

### Requirement 7: Validate Migration Schema Matches Requirements

**User Story:** As a developer, I want the tours table schema to match the migration plan exactly, so that data integrity is maintained and all required fields are present.

#### Acceptance Criteria

1. THE tours table SHALL use an auto-increment integer id as the primary key
2. THE tours table SHALL have a unique slug column of type string
3. THE tours table SHALL have a nights column of type string (not integer)
4. THE tours table SHALL have json columns for itinerary, included, and excluded
5. THE tours table SHALL have a boolean is_published column with default false
6. THE tours table SHALL have created_at and updated_at timestamp columns

### Requirement 8: Admin Authorization Middleware Implementation

**User Story:** As a developer, I want reusable authorization middleware, so that admin protection can be consistently applied across all admin routes.

#### Acceptance Criteria

1. THE Tour_System SHALL provide an EnsureUserIsAdmin middleware class
2. THE EnsureUserIsAdmin middleware SHALL check if the authenticated user's role equals "ADMIN"
3. WHEN the user is not authenticated, THE EnsureUserIsAdmin middleware SHALL redirect to the login route
4. WHEN the user's role is not "ADMIN", THE EnsureUserIsAdmin middleware SHALL abort with 403 status
5. THE Tour_System SHALL register the middleware with an alias "admin" in the HTTP Kernel
6. THE admin route group SHALL apply both "auth" and "admin" middleware

### Requirement 9: Tour Model Validation and Business Rules

**User Story:** As a developer, I want tour data validated at the model level, so that invalid data cannot be persisted to the database.

#### Acceptance Criteria

1. WHEN creating or updating a tour, THE Tour_System SHALL require title, slug, duration, nights, starting_point, and description fields
2. WHEN creating a tour, THE Tour_System SHALL ensure the slug is unique
3. WHEN updating a tour, THE Tour_System SHALL ensure the slug is unique except for the current tour
4. THE Tour_System SHALL validate that itinerary, included, and excluded are arrays when provided
5. THE Tour_System SHALL validate that is_published is a boolean value

### Requirement 10: Public Tour Filtering by Publication Status

**User Story:** As a visitor, I want to see only published tours on the public site, so that I don't see draft or unpublished content.

#### Acceptance Criteria

1. WHEN a Guest_User views the tours index, THE Tour_System SHALL display only tours where is_published is true
2. WHEN a Guest_User attempts to view an unpublished tour detail page, THE Tour_System SHALL return a 404 response
3. WHEN an Admin_User views the admin tours index, THE Tour_System SHALL display all tours regardless of publication status
4. THE Tour_System SHALL order public tours by a consistent field (e.g., title or created_at)
