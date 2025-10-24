'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ErrorPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-background to-primary/5 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="mx-auto bg-destructive/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="h-8 w-8 text-destructive" />
                    </div>
                    <h1 className="text-4xl font-bold  text-foreground mb-2">Oops!</h1>
                    <p className="text-lg text-muted-foreground">
                        Something went wrong. Please refresh the page.
                    </p>
                </div>

                <Button
                    onClick={handleRefresh}
                    size={"lg"}
                    className="transition-colors duration-200 "
                >
                    <RefreshCw className="h-5 w-5" />
                    Refresh Page
                </Button>

                <div className="mt-8 text-sm text-muted-foreground">
                    <p>If the problem persists, please contact support.</p>
                </div>
            </div>
        </div>
    );
}