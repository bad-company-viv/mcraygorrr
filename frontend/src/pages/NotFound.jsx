import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-2xl mx-auto">

                {/* Animated 404 Text */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <h1 className="text-9xl font-bold text-slate-100 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold text-slate-900 bg-white px-4"
                        >
                            Page Not Found
                        </motion.div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-slate-500 mt-6 mb-10 text-lg"
                >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link to="/">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white min-w-[200px] h-12 rounded-full text-lg">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 min-w-[200px] h-12 rounded-full text-lg">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                        animate={{
                            x: [0, -50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default NotFound;
