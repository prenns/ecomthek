'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ArrowRightIcon,
    ArrowLeftIcon,
    CheckIcon,
    RocketIcon,
} from 'lucide-react';

interface AuditSignupFormProps {
    className?: string;
}

export default function AuditSignupForm({ className }: AuditSignupFormProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        shopUrl: '',
        revenue: '',
        firstName: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleNext = () => {
        if (currentStep === 1) {
            // Email validation for step 1
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email) {
                setEmailError('Bitte gib deine E-Mail-Adresse ein.');
                return;
            }
            if (!emailRegex.test(formData.email)) {
                setEmailError('Bitte gib eine gültige E-Mail-Adresse ein.');
                return;
            }
            setEmailError('');
        }

        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get webhook URL from environment variable
            const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || '';
            
            // Prepare webhook payload with all form data
            const webhookPayload = {
                email: formData.email,
                shopUrl: formData.shopUrl,
                revenue: formData.revenue,
                firstName: formData.firstName,
                timestamp: new Date().toISOString(),
                source: 'audit-signup-form'
            };

            // Send data to webhook
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webhookPayload),
            });

            if (!response.ok) {
                throw new Error(`Webhook call failed: ${response.status}`);
            }

            // Success - show success state
            setLoading(false);
            setSubmitted(true);
        } catch (error) {
            console.error('Error sending webhook:', error);
            // Still show success to user even if webhook fails
            setLoading(false);
            setSubmitted(true);
        }
    };

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleNext();
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <CardHeader className="space-y-1 pb-4">
                            <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-sm">
                                    Schritt 1 von 4
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Finde die größten Umsatz-Leaks in deinem Shop – kostenlos & in 48h
                            </CardTitle>
                            <CardDescription>
                                In nur 4 kurzen Schritten (E-Mail, Shop-URL, Umsatz-Range, Name) – Ergebnis in 48h in deinem Postfach
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-Mail-Adresse</Label>
                                    <Input
                                        id="email"
                                        data-1p-ignore data-lpignore="true" autoComplete="off"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={(e) => {
                                            updateFormData('email', e.target.value);
                                            if (emailError) setEmailError('');
                                        }}
                                        onKeyPress={handleKeyPress}
                                        className={`h-12 ${emailError ? 'border-red-500' : ''}`}
                                    />
                                    {emailError && (
                                        <p className="text-sm text-red-500">{emailError}</p>
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Kostenlosen Audit starten <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </>
                );

            case 2:
                return (
                    <>
                        <CardHeader className="space-y-1 pb-4">
                            <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-sm">
                                    Schritt 2 von 4
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Welchen Shop sollen wir für dich analysieren?
                            </CardTitle>
                            <CardDescription>
                                Nur die URL, keine Zugangsdaten.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="shopUrl">Shop-URL</Label>
                                    <Input
                                        id="shopUrl"
                                        type="url"
                                        placeholder="https://dein-shop.de"
                                        value={formData.shopUrl}
                                        onChange={(e) => updateFormData('shopUrl', e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleBack}
                                        className="h-12 px-8"
                                    >
                                        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Zurück
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={!formData.shopUrl}
                                        className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Weiter <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </>
                );

            case 3:
                return (
                    <>
                        <CardHeader className="space-y-1 pb-4">
                            <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-sm">
                                    Schritt 3 von 4
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Wo liegt dein aktueller Jahresumsatz?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <RadioGroup
                                    value={formData.revenue}
                                    onValueChange={(value) => updateFormData('revenue', value)}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="under-100k" id="under-100k" />
                                        <Label htmlFor="under-100k">Unter 100.000 €</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="100k-1m" id="100k-1m" />
                                        <Label htmlFor="100k-1m">100.000 – 1 Mio. €</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="1m-10m" id="1m-10m" />
                                        <Label htmlFor="1m-10m">1 – 10 Mio. €</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="over-10m" id="over-10m" />
                                        <Label htmlFor="over-10m">Über 10 Mio. €</Label>
                                    </div>
                                </RadioGroup>
                                <div className="flex justify-between">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleBack}
                                        className="h-12 px-8"
                                    >
                                        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Zurück
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={!formData.revenue}
                                        className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Weiter <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </>
                );

            case 4:
                return (
                    <>
                        <CardHeader className="space-y-1 pb-4">
                            <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-sm">
                                    Schritt 4 von 4
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl font-bold">
                                Wie heißt du?
                            </CardTitle>
                            <CardDescription>Und dann geht es auch schon mit dem Audit los.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Name</Label>
                                    <Input
                                        data-1p-ignore data-lpignore="true" autoComplete="off"
                                        id="firstName"
                                        type="text"
                                        placeholder="Max"
                                        value={formData.firstName}
                                        onChange={(e) => updateFormData('firstName', e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="h-12"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleBack}
                                        className="h-12 px-8"
                                    >
                                        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Zurück
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Wird gesendet...
                                            </span>
                                        ) : (
                                            <>
                                                Audit jetzt starten <ArrowRightIcon className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Card className={`${className || ''}`}>
            {!submitted ? (
                <>
                    {renderStep()}

                    {/* Ständige Elemente */}
                    <div className="border-t bg-slate-50 px-6 py-4 dark:bg-slate-900/50">
                        <div className="flex flex-col gap-3 sm:flex-row mb-4">
                            <div className="inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-sm dark:bg-slate-800">
                                <div className="rounded bg-primary/10 p-1 dark:bg-primary/20">
                                    <CheckIcon className="h-3 w-3 text-primary" />
                                </div>
                                <span className="text-muted-foreground">
                                    Ergebnis in{' '}
                                    <span className="text-foreground font-medium">
                                        48h
                                    </span>
                                </span>
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-sm dark:bg-slate-800">
                                <div className="rounded bg-primary/10 p-1 dark:bg-primary/20">
                                    <CheckIcon className="h-3 w-3 text-primary" />
                                </div>
                                <span className="text-muted-foreground">
                                    100% kostenlos & unverbindlich
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-md">
                                <Image
                                    src="/images/1.png"
                                    alt="Alex Prennsberger"
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium">
                                    &ldquo;7 Mio. € Umsatz – die Learnings daraus bekommst du jetzt.&rdquo;
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    Alex Prennsberger, E-Commerce Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                                <CheckIcon className="h-12 w-12 text-primary" />
                            </div>
                            <div className="absolute -top-1 -right-1 rounded-full border-2 border-white bg-white p-1 dark:border-slate-900 dark:bg-slate-900">
                                <RocketIcon className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>

                    <h3 className="mb-2 text-2xl font-bold">
                        Dein Audit ist reserviert 🚀
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Ich senden dir dein Ergebnis in spätestens 48 Stunden. Bis dahin: zurücklehnen – ich übernehme.
                    </p>
                </div>
            )}
        </Card>
    )
}