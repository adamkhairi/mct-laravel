import { useForm } from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from '@/components/ui/dialog';
import { AlertTriangle } from 'lucide-react';

interface DeleteTourDialogProps {
    tourId: string;
    tourTitle: string;
    onConfirm: (tourId: string) => void;
    children?: ReactNode;
}

export default function DeleteTourDialog({
    tourId,
    tourTitle,
    onConfirm,
    children,
}: DeleteTourDialogProps) {
    const [open, setOpen] = useState(false);
    const { delete: destroy } = useForm();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        onConfirm(tourId);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {children}
            <DialogContent className="max-w-sm rounded-none border-indigo-ink/10">
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center bg-red-100/80">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <DialogTitle className="font-display text-lg text-indigo-ink">
                                Delete Journey
                            </DialogTitle>
                            <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                                Are you sure you want to delete{' '}
                                <span className="font-semibold text-indigo-ink">
                                    "{tourTitle}"
                                </span>
                                ?
                            </DialogDescription>
                            <p className="eyebrow pt-1 text-xs tracking-wide text-red-600/70 uppercase">
                                This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>

                <DialogFooter className="gap-2 border-t border-indigo-ink/5 pt-6">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            disabled={isDeleting}
                            className="rounded-none border-indigo-ink/20"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="rounded-none"
                    >
                        {isDeleting ? 'Deleting...' : 'Delete Journey'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
