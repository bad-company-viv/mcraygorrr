"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import QuotationForm from '@/components/QuotationForm/QuotationForm';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const ProductsClient = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'imperial'

    const handleEnquire = (productName) => {
        setSelectedProduct(productName);
        const formElement = document.getElementById('quotation-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const convertValue = (value) => {
        if (unitSystem === 'metric') return value;

        // Basic conversion logic for demonstration
        if (value.includes('mm')) {
            const mm = parseInt(value);
            return `${(mm / 25.4).toFixed(1)} inch`;
        }
        if (value.includes('meters')) {
            const m = parseInt(value);
            return `${(m * 3.28084).toFixed(1)} feet`;
        }
        if (value.includes('cum')) {
            const cum = parseInt(value);
            return `${(cum * 1.30795).toFixed(1)} cu yd`;
        }
        return value;
    };

    return (
        <div className="pt-24 bg-gray-50 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 pb-16">
                <Breadcrumbs />
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">McRAYGOR Industrial Solutions</h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        World-class sewer cleaning and municipal waste management equipment, engineered for maximum reliability.
                    </p>

                    {/* Unit Toggle */}
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <span className={`text-sm font-medium ${unitSystem === 'metric' ? 'text-orange-500' : 'text-gray-500'}`}>Metric</span>
                        <button
                            onClick={() => setUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
                            className="relative w-12 h-6 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none"
                        >
                            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${unitSystem === 'imperial' ? 'translate-x-6' : ''}`}></div>
                        </button>
                        <span className={`text-sm font-medium ${unitSystem === 'imperial' ? 'text-orange-500' : 'text-gray-500'}`}>Imperial</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
                            <div className="h-72 overflow-hidden relative bg-slate-50">
                                <img
                                    src={product.image.src || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                                />

                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">{product.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{product.description}</p>
                                </div>

                                {/* Technical Specs */}
                                <div className="mb-8 space-y-3">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Technical Specifications</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {product.specs && Object.entries(product.specs).map(([key, value]) => (
                                            <div key={key} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                <p className="text-[10px] text-gray-500 uppercase font-semibold mb-1">{key}</p>
                                                <p className="text-xs font-bold text-gray-800">{convertValue(value)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleEnquire(product.name)}
                                        className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-orange-500 transition-all duration-300 transform active:scale-95 shadow-lg shadow-zinc-200 hover:shadow-orange-200"
                                    >
                                        Request Full Specifications
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quotation Form Section */}
            <QuotationForm selectedProduct={selectedProduct} />

            {/* Cross-linking Section */}
            <div className="bg-slate-900 pb-24">
                <div className="container mx-auto px-6 border-t border-white/5 pt-16">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">See Our Impact</h3>
                            <p className="text-slate-400">Explore how these machines are deployed in real-world scenarios across the globe.</p>
                            <Link href="/projects" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
                                View Case Studies <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Latest Technical News</h3>
                            <p className="text-slate-400">Read about the latest innovations in vacuum technology and municipal engineering.</p>
                            <Link href="/blogs" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-3 transition-all">
                                Read Our Blog <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsClient;
