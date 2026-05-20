<?php

use App\Mail\InquiryReceived;
use Illuminate\Support\Facades\Mail;

test('contact form can be submitted', function () {
    Mail::fake();

    $response = $this->post(route('contact.store'), [
        'full_name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '1234567890',
        'region' => 'The Sahara',
        'adults' => 2,
        'children' => 1,
        'preferred_dates' => 'June 2026',
        'message' => 'Test message',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    $this->assertDatabaseHas('inquiries', [
        'full_name' => 'John Doe',
        'email' => 'john@example.com',
    ]);

    Mail::assertSent(InquiryReceived::class, function ($mail) {
        return $mail->inquiry->email === 'john@example.com';
    });
});

test('contact form validation works', function () {
    $response = $this->post(route('contact.store'), []);

    $response->assertSessionHasErrors(['full_name', 'email', 'region', 'adults', 'children', 'preferred_dates']);
});
