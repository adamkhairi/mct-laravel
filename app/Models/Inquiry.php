<?php

namespace App\Models;

use Database\Factories\InquiryFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    /** @use HasFactory<InquiryFactory> */
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'region',
        'adults',
        'children',
        'preferred_dates',
        'message',
    ];
}
