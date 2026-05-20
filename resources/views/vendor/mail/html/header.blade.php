@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
<img src="{{ asset('assets/logo-mark.png') }}" alt="Moroccan Club Travel Logo" style="height: 36px; width: auto; vertical-align: middle;">
<span style="font-size: 19px; font-weight: 600; color: #1c1c28; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: middle;">{!! $slot !!}</span>
</a>
</td>
</tr>
