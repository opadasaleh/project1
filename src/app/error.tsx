'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Oops!</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Something went wrong. Please refresh the page.
                    </p>
                </div>

                <button
                    onClick={handleRefresh}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                    <RefreshCw className="h-5 w-5" />
                    Refresh Page
                </button>

                <div className="mt-8 text-sm text-gray-500">
                    <p>If the problem persists, please contact support.</p>
                </div>
            </div>
        </div>
    );
}