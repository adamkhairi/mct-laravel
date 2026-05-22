import { Form, Head } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <>
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                    Email address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <label className="eyebrow block text-[10px] tracking-wider text-indigo-ink/60 uppercase">
                                        Password
                                    </label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-xs text-terracotta transition-colors hover:text-terracotta/80"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    className="h-10 rounded-none border-t-0 border-r-0 border-b border-l-0 border-indigo-ink/20 bg-transparent px-0 shadow-none transition-colors hover:border-indigo-ink/40 focus-visible:border-b-2 focus-visible:border-terracotta focus-visible:ring-0"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="data-[state=checked]:border-terracotta data-[state=checked]:bg-terracotta"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-indigo-ink/70"
                                >
                                    Remember me
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="eyebrow mt-4 h-14 w-full rounded-none bg-terracotta text-sm tracking-[0.2em] text-ivory shadow-lg shadow-terracotta/10 transition-all hover:bg-terracotta/90 active:scale-[0.99]"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Log in
                            </Button>
                        </div>
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
