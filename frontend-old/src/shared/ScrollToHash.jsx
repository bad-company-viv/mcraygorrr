import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
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
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
