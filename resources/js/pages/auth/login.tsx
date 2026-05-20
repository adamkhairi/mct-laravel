import { Loader2 } from 'lucide-react';
import { Form, Head } from '@inertiajs/react';
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
                                <label className="eyebrow text-indigo-ink/60 text-[10px] tracking-wider uppercase block">Email address</label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b border-indigo-ink/20 bg-transparent px-0 shadow-none h-10 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-terracotta hover:border-indigo-ink/40 transition-colors"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <label className="eyebrow text-indigo-ink/60 text-[10px] tracking-wider uppercase block">Password</label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-xs text-terracotta hover:text-terracotta/80 transition-colors"
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
                                    className="rounded-none border-t-0 border-l-0 border-r-0 border-b border-indigo-ink/20 bg-transparent px-0 shadow-none h-10 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-terracotta hover:border-indigo-ink/40 transition-colors"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="data-[state=checked]:bg-terracotta data-[state=checked]:border-terracotta"
                                />
                                <label htmlFor="remember" className="text-sm text-indigo-ink/70">Remember me</label>
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 w-full bg-terracotta hover:bg-terracotta/90 text-ivory rounded-none h-14 eyebrow text-sm tracking-[0.2em] shadow-lg shadow-terracotta/10 active:scale-[0.99] transition-all"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
