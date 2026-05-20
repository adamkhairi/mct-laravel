<?php

namespace App\Http\Controllers;

use App\Mail\InquiryReceived;
use App\Models\Inquiry;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'region' => 'required|string|max:255',
            'adults' => 'required|integer|min:1',
            'children' => 'required|integer|min:0',
            'preferred_dates' => 'required|string|max:255',
            'message' => 'nullable|string|max:2000',
        ]);

        $inquiry = Inquiry::create($validated);

        try {
            Mail::to(config('mail.contact_recipient') ?? config('mail.from.address'))->send(new InquiryReceived($inquiry));
        } catch (Exception $e) {
            Log::error('Failed to send inquiry email: '.$e->getMessage());
        }

        return back()->with('success', 'Inquiry received. Our concierge will be in touch within 24 hours.');
    }
}
