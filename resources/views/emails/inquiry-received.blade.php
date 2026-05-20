<x-mail::message>
# New Inquiry Received

A new inquiry has been submitted through the contact form.

**Full Name:** {{ $inquiry->full_name }}
**Email:** {{ $inquiry->email }}
**Phone:** {{ $inquiry->phone ?? 'N/A' }}
**Region:** {{ $inquiry->region }}
**Adults:** {{ $inquiry->adults }}
**Children:** {{ $inquiry->children }}
**Preferred Dates:** {{ $inquiry->preferred_dates }}

**Message:**
{{ $inquiry->message ?? 'No message provided.' }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
