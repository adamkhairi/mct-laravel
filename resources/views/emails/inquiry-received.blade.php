<x-mail::message>
# New Inquiry Received

A new inquiry has been submitted through the contact form.

<x-mail::table>
| Detail | Information |
| :--- | :--- |
| **Full Name** | {{ $inquiry->full_name }} |
| **Email** | {{ $inquiry->email }} |
| **Phone** | {{ $inquiry->phone ?? 'N/A' }} |
| **Region** | {{ $inquiry->region }} |
| **Adults** | {{ $inquiry->adults }} |
| **Children** | {{ $inquiry->children }} |
| **Preferred Dates** | {{ $inquiry->preferred_dates }} |
</x-mail::table>

<x-mail::panel>
**Message:**

{{ $inquiry->message ?? 'No message provided.' }}
</x-mail::panel>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
