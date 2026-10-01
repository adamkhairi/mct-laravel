<?php

use App\Models\BlogPost;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('blog index is available on localized routes', function () {
    $this->get('/en/blog')
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Index')
            ->has('posts')
        );
});

test('blog index lists only published entries in the requested language', function () {
    $publishedPost = BlogPost::factory()->published()->create([
        'locale' => 'en',
        'slug' => 'morocco-in-spring',
    ]);
    BlogPost::factory()->published()->create([
        'locale' => 'fr',
        'slug' => 'maroc-au-printemps',
    ]);
    $draftPost = BlogPost::factory()->create([
        'locale' => 'en',
        'slug' => 'draft-story',
    ]);

    $this->get('/en/blog')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Index')
            ->has('posts.data', 1)
            ->where('posts.data.0.slug', $publishedPost->slug)
        );

    $this->get('/en/blog/'.$draftPost->slug)->assertNotFound();
});

test('admins can create draft articles', function () {
    $admin = User::factory()->create(['role' => 'ADMIN']);

    $this->actingAs($admin)
        ->post('/admin/posts', [
            'title' => 'Morocco in spring',
            'slug' => 'morocco-in-spring',
            'locale' => 'en',
            'translation_key' => '',
            'excerpt' => 'A guide to spring travel.',
            'body' => '# Spring in Morocco',
            'meta_description' => 'Plan a spring trip to Morocco.',
            'image' => '',
            'status' => 'draft',
            'published_at' => '',
        ])
        ->assertRedirect(route('admin.posts.index'));

    $this->assertDatabaseHas('blog_posts', [
        'slug' => 'morocco-in-spring',
        'locale' => 'en',
        'status' => 'draft',
        'user_id' => $admin->id,
    ]);
});

test('regular users cannot manage journal content', function () {
    $user = User::factory()->create(['role' => 'USER']);

    $this->actingAs($user)
        ->get('/admin/posts')
        ->assertForbidden();
});

test('article markdown strips embedded html and unsafe links', function () {
    $post = BlogPost::factory()->published()->create([
        'slug' => 'safe-markdown',
        'body' => "## Morocco\n\n<script>alert(1)</script>\n\n[unsafe](javascript:alert(1))",
    ]);

    $response = $this->get('/en/blog/'.$post->slug)->assertSuccessful();
    $page = json_decode(json_encode($response->viewData('page')), true);
    $bodyHtml = $page['props']['post']['bodyHtml'];

    expect($bodyHtml)
        ->toContain('<h2>Morocco</h2>')
        ->not->toContain('<script')
        ->not->toContain('javascript:');
});
