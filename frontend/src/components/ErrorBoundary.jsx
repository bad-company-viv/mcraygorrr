import React from 'react';
import NetworkError from '@/components/NetworkError';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);

        // Specifically check for chunk load errors
        if (error.message && (
            error.message.includes('Loading chunk') ||
            error.message.includes('Failed to fetch dynamically imported module')
        )) {
            // We can treat this as a network error
            this.setState({ isNetworkError: true });
        }
    }

    render() {
        if (this.state.hasError) {
            // You can verify if it's a network error here if needed, 
            // but for now, we'll assume most boundary errors in lazy loading are network/chunk related.
            // Or you can have a generic error page and a specific network one.
            // Given the user request "some loading page if any network issues", let's use the NetworkError component.
            return <NetworkError />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
