import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NetworkError = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-2xl mx-auto">

                {/* Animated Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
                        <WifiOff className="w-12 h-12 text-red-500" />
                    </div>
                </motion.div>

                {/* Error Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-bold text-slate-900 mb-4"
                >
                    Connection Failed
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-slate-500 mb-8 text-lg"
                >
                    We're having trouble loading this page. Please check your internet connection and try again.
                </motion.p>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Button
                        onClick={handleRetry}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[200px] h-12 rounded-full text-lg"
                    >
                        <RefreshCcw className="w-5 h-5 mr-2" />
                        Reload Page
                    </Button>
                </motion.div>

            </div>
        </div>
    );
};

export default NetworkError;
