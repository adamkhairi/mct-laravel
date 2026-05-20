import { useFlashToast } from '@/hooks/use-flash-toast';
import { useAppearance } from '@/hooks/use-appearance';
import { Toaster as Sonner, type ToasterProps } from 'sonner';
import { CheckCircle2, Info, AlertCircle, AlertTriangle } from 'lucide-react';

function Toaster({ ...props }: ToasterProps) {
    const { resolvedAppearance } = useAppearance();

    useFlashToast();

    return (
        <Sonner
            theme={resolvedAppearance}
            className="toaster group"
            position="bottom-right"
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-xl !rounded-none",
                    description: "group-[.toast]:!text-foreground/60 group-[.toast]:text-sm",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:font-mono group-[.toast]:text-[10px] group-[.toast]:uppercase group-[.toast]:tracking-widest",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:font-mono group-[.toast]:text-[10px] group-[.toast]:uppercase group-[.toast]:tracking-widest",
                    title: "group-[.toast]:font-display group-[.toast]:text-base font-semibold group-[.toast]:!text-foreground",
                    success: "group-[.toast]:border-terracotta group-[.toast]:bg-background",
                },
            }}
            icons={{
                success: <CheckCircle2 className="h-5 w-5 text-terracotta" />,
                info: <Info className="h-5 w-5 text-indigo-ink" />,
                error: <AlertCircle className="h-5 w-5 text-destructive" />,
                warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
            }}
            style={
                {
                    '--normal-bg': 'var(--background)',
                    '--normal-text': 'var(--foreground)',
                    '--normal-border': 'var(--border)',
                    '--success-bg': 'var(--background)',
                    '--success-text': 'var(--foreground)',
                    '--success-border': 'var(--terracotta)',
                    '--radius': '0px',
                } as React.CSSProperties
            }
            {...props}
        />
    );
}

export { Toaster };
