const fs = require('fs');
let file = fs.readFileSync('resources/js/pages/Admin/Tours/Index.tsx', 'utf8');

// Add router to import from @inertiajs/react
file = file.replace(/import \{ Head, Link, useForm \} from '@inertiajs\/react';/, "import { Head, Link, useForm, router } from '@inertiajs/react';");

// Add useEffect import if not there
file = file.replace(/import \{ useState, useMemo \} from 'react';/, "import { useState, useMemo, useEffect } from 'react';");

// Replace component signature to accept filters
file = file.replace(/export default function Index\(\{ tours: toursPaginated \}: \{ tours: any \}\) \{/, "export default function Index({ tours: toursPaginated, filters = {} }: { tours: any, filters?: any }) {");

// Replace state initialization to use filters
file = file.replace(/const \[searchQuery, setSearchQuery\] = useState\(''\);/, "const [searchQuery, setSearchQuery] = useState(filters.search || '');");
file = file.replace(/const \[destination, setDestination\] = useState<string>\('all'\);/, "const [destination, setDestination] = useState<string>(filters.destination || 'all');");
file = file.replace(/const \[tripType, setTripType\] = useState<string>\('all'\);/, "const [tripType, setTripType] = useState<string>(filters.tripType || 'all');");
file = file.replace(/const \[duration, setDuration\] = useState<string>\('all'\);/, "const [duration, setDuration] = useState<string>(filters.duration || 'all');");

// Modify clearFilters
file = file.replace(/const clearFilters = \(\) => \{[\s\S]*?\};/, `const clearFilters = () => {
        setSearchQuery('');
        setDestination('all');
        setTripType('all');
        setDuration('all');
    };`);

// Add useEffect for router.get
file = file.replace(/const filteredTours = useMemo\(\(\) => \{[\s\S]*?\}\);/, `const filteredTours = tourList;
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get('/admin/tours', {
                search: searchQuery || undefined,
                destination: destination !== 'all' ? destination : undefined,
                tripType: tripType !== 'all' ? tripType : undefined,
                duration: duration !== 'all' ? duration : undefined,
            }, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            });
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchQuery, destination, tripType, duration]);`);

fs.writeFileSync('resources/js/pages/Admin/Tours/Index.tsx', file);
