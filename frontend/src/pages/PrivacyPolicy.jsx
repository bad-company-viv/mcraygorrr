import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-6">
                        At www.mcraygor.com, accessible from https://www.mcraygor.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.mcraygor.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us on the email address provided.
                    </p>
                    <p className="mb-6">
                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in www.mcraygor.com. This policy is not applicable to any information collected offline or via channels other than this website.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Log Files</h3>
                    <p className="mb-6">
                        www.mcraygor.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Trademark</h3>
                    <p className="mb-6">
                        "McRAYGOR Mechanicls Infrastructure", Logos, images, services and all materials incorporated on the service (including, but not limited to text, photographs & images) are protected by copyright, patent, trade secret, or other proprietary rights under the laws India. Some of the titles, characters, logos, or other images incorporated by McRAYGOR's service are protected as registered or unregistered trademarks owned McRAYGOR Mechanicls Infrastructure and its subsidiaries. All other trademarks are the property of their respective owners.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Images</h3>
                    <p className="mb-6">
                        To prevent misuse of images on website, www.mcraygor.com all images have been watermarked with our logo. Any kind of leak, misuse of our images may lead to copyright infringement as all our images are protected under copyright law as artistic work under Section 2 (c) of Copyright Act 1957 in India & may lead to fine of Rs 20,00,000 & imprisonment of 2 years or both.
                    </p>
                    <p className="mb-6">
                        Photographs are protected under copyright law as artistic work under Section 2 (c) of Copyright Act 1957 in India. Photographs are protected under the law of Copyright as it has been included as an artistic work. Although, the quality is immaterial to qualify the work as an artistic work. The essential element to protect the copyright in artistic work particularly a photograph requires that the photograph must be an original work where some degree of skill and effort must have been expended on it.
                    </p>
                    <p className="mb-6">
                        In India, as per section 25 of the Copyright Act, the Photographs are provided copyright protection for a period of 60 years from the date of publication. The term of Copyright varies in different Countries. For instance, the duration of copyright protection in US and European Union is 70 years, whereas Berne convention provides minimum duration of copyright protection i.e. 50 years.
                    </p>
                    <p className="mb-6">
                        The Indian Copyright Act is in compliance with most international treaties such as Berne Convention for protection of Literary and Artistic works 1886, the Universal Copyright Convention 1951, the Agreement on Trade Related Aspects of Intellectual Property Rights (TRIPS) Agreement of 1995. The International Copyright Order has been passed to protect the copyright in member countries of the convention and agreement. Accordingly, the foreign artistic works are given protection in India.
                    </p>
                    <p className="mb-6">
                        Ordinarily, the author is the first owner of the copyright in a work created by him. In case of a photograph, the photographer will be the first owner unless there is an agreement to the contrary. So even if you own the camera but your friend takes a photograph, which is stunning, your friend owns the copyright to the image. The rights of the Photographer are the right to reproduce, to make any adaptation of the work, publish his photographs etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
