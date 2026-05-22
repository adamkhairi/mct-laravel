import type { ImgHTMLAttributes } from 'react';

import logo from '@/assets/logo-mark.png';
import { cn } from '@/lib/utils';

export default function AppLogoIcon({
    className,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={logo}
            alt="Moroccan Club Travel"
            className={cn('object-contain', className)}
            {...props}
        />
    );
}
