import json
import os
import urllib.parse
import urllib.request
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

locales = ['es', 'fr', 'de', 'it', 'pt', 'ru', 'nl', 'zh']
cache_file = './database/seeders/data/translations_cache.json'
tours_file = './database/seeders/data/tours.json'

# Load cache
cache = {}
if os.path.exists(cache_file):
    try:
        with open(cache_file, 'r', encoding='utf-8') as f:
            cache = json.load(f)
    except Exception as e:
        print(f"Error loading cache: {e}")
        cache = {}

print(f"Loaded {len(cache)} unique English strings from cache.")

# Load tours
if not os.path.exists(tours_file):
    print("Error: tours.json not found!")
    exit(1)

with open(tours_file, 'r', encoding='utf-8') as f:
    tours = json.load(f)

# Collect all unique strings needing translation
strings = set()

def collect(text):
    if not text:
        return
    text = text.strip()
    if text.isdigit():
        return
    strings.add(text)

for tour in tours:
    collect(tour.get('title', ''))
    collect(tour.get('description', ''))
    collect(tour.get('duration', ''))
    collect(tour.get('nights', ''))
    collect(tour.get('startingPoint', ''))
    collect(tour.get('arrivalCity', ''))
    collect(tour.get('accommodation', ''))
    collect(tour.get('guide', ''))
    collect(tour.get('tripType', ''))
    collect(tour.get('difficulty', ''))
    
    # Parse comma-separated languages
    if tour.get('languages'):
        langs = [l.strip() for l in tour['languages'].split(',')]
        for lang in langs:
            collect(lang)
            
    if tour.get('included'):
        for item in tour['included']:
            collect(item)
            
    if tour.get('excluded'):
        for item in tour['excluded']:
            collect(item)
            
    if tour.get('itinerary'):
        for item in tour['itinerary']:
            collect(item.get('day', ''))
            collect(item.get('title', ''))
            collect(item.get('description', ''))

unique_strings = list(strings)
print(f"Total unique English strings to translate: {len(unique_strings)}")

# Google Translate function using urllib
def translate_api(text, target, source='en'):
    if not text.strip():
        return ""
    
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + source + "&tl=" + target + "&dt=t&q=" + urllib.parse.quote(text)
    
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status != 200:
                return None
            data = json.loads(response.read().decode('utf-8'))
            if not data or not data[0]:
                return None
            translated_text = ""
            for line in data[0]:
                if line and line[0]:
                    translated_text += line[0]
            return translated_text
    except Exception as e:
        return None

# Build task list
tasks = []
for str_val in unique_strings:
    if str_val not in cache:
        cache[str_val] = {}
    for locale in locales:
        if locale not in cache[str_val]:
            tasks.append((str_val, locale))

print(f"Remaining translation operations: {len(tasks)}")

if not tasks:
    print("All translations are up to date!")
    exit(0)

# We will save cache in chunks to be thread-safe
completed_count = 0
failed_count = 0

def save_cache():
    with open(cache_file, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def worker(task):
    str_val, locale = task
    result = translate_api(str_val, locale)
    return str_val, locale, result

# Use ThreadPoolExecutor to run tasks in parallel
max_threads = 15
print(f"Starting translations using ThreadPoolExecutor with {max_threads} threads...")

with ThreadPoolExecutor(max_workers=max_threads) as executor:
    futures = {executor.submit(worker, task): task for task in tasks}
    
    for future in as_completed(futures):
        str_val, locale, result = future.result()
        if result is not None:
            cache[str_val][locale] = result
            completed_count += 1
            if completed_count % 50 == 0:
                save_cache()
                print(f"Progress: {completed_count} translations saved.")
        else:
            failed_count += 1
            # print(f"Failed: {str_val[:30]}... to {locale}")

save_cache()
print(f"\nCompleted {completed_count} translations. Failed: {failed_count}.")
