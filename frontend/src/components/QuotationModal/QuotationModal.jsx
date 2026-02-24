import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brochure from "@/assets/brochure.pdf";
import CRMForm from '@/components/CRMForm/CRMForm';

export default function QuotationModal({ isOpen, onClose }) {

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row min-h-[600px]"
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* Close Button (Mobile/Absolute) */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 md:hidden p-2 bg-white/20 rounded-full text-white hover:bg-white/30"
                            >
                                <X className="w-5 h-5 text-black" />
                            </button>

                            {/* Left Column - Orange */}
                            <div className="w-full md:w-2/5 bg-[#F36F21] p-8 md:p-12 flex flex-col justify-center text-white relative">
                                <div className="relative z-0">
                                    <h2 className="text-3xl md:text-3xl font-bold mb-6 leading-tight">
                                        DEDICATED CUSTOMER TEAMS & AN AGILE SERVICES
                                    </h2>
                                    <p className="text-white/90 text-sm md:text-base mb-12 leading-relaxed">
                                        Our worldwide presence ensures the timeliness, cost efficiency and compliance adherence required to ensure your production timelines are met.
                                    </p>

                                    <a href={brochure} download="McRAYGOR_Brochure.pdf">
                                        <Button
                                            className="bg-[#2D2D2D] hover:bg-black text-white border-none rounded-sm h-auto py-3 px-6 flex items-center gap-3 w-max"
                                        >
                                            <Printer className="w-4 h-4 text-[#F36F21]" />
                                            <span className="font-medium text-[#F36F21]">Download Brochure</span>
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column - White (Form) */}
                            <div className="w-full md:w-3/5 bg-white p-8 md:p-12 relative max-h-[90vh] overflow-y-auto">
                                {/* Desktop Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 hidden md:block p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="h-full min-h-[600px]">
                                    <CRMForm />
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
