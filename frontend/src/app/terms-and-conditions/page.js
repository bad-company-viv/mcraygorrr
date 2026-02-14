import React from 'react';

export const metadata = {
    title: "Terms and Conditions | McRAYGOR",
    description: "Terms and Conditions for using McRAYGOR Mechanicals website. Read our rules and regulations.",
    alternates: {
        canonical: '/terms-and-conditions',
    },
};

export default function TermsAndConditionsPage() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Terms and Conditions</h1>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-6">
                        Welcome to McRAYGOR Mechanicals Infrastructure. These terms and conditions outline the rules and regulations for the use of McRAYGOR's Website.
                    </p>
                    <p className="mb-6">
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use McRAYGOR if you do not agree to take all of the terms and conditions stated on this page.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies</h3>
                    <p className="mb-6">
                        We employ the use of cookies. By accessing McRAYGOR, you agreed to use cookies in agreement with the McRAYGOR Mechanicals Infrastructure's Privacy Policy.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">License</h3>
                    <p className="mb-6">
                        Unless otherwise stated, McRAYGOR Mechanicals Infrastructure and/or its licensors own the intellectual property rights for all material on McRAYGOR. All intellectual property rights are reserved. You may access this from McRAYGOR for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">You must not:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Republish material from McRAYGOR</li>
                        <li>Sell, rent or sub-license material from McRAYGOR</li>
                        <li>Reproduce, duplicate or copy material from McRAYGOR</li>
                        <li>Redistribute content from McRAYGOR</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h3>
                    <p className="mb-6">
                        If you have any questions about our Terms and Conditions, please contact us via email at info@mcraygor.com or phone at +91 98120 01368 / +91 85878 29000.
                    </p>
                </div>
            </div>
        </div>
    );
}
