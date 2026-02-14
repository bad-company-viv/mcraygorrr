"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToHash = () => {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        const scrollToElement = () => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                return true;
            }
            return false;
        };

        if (hash) {
            // Immediate check
            if (scrollToElement()) return;

            // Retry intervals to account for routing and transitions
            const timeouts = [100, 300, 600, 1000, 2000].map(delay =>
                setTimeout(() => {
                    scrollToElement();
                }, delay)
            );

            return () => {
                timeouts.forEach(clearTimeout);
            };
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

export default ScrollToHash;

