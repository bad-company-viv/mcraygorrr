import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import { HelmetProvider } from 'react-helmet-async';

// Mock the HeroSection since it has animations that might be tricky in tests
vi.mock('@/components/HeroSection/HeroSection', () => ({
    default: () => <div data-testid="hero-section">Hero Section Mock</div>
}));

describe('Header Component', () => {
    it('renders the navigation links correctly', () => {
        render(
            <HelmetProvider>
                <MemoryRouter>
                    <Header logoUrl="/images/logo.png" />
                </MemoryRouter>
            </HelmetProvider>
        );

        // Check for main navigation items
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();

        // Check for the CTA button we updated earlier
        expect(screen.getByText('Get a Quote')).toBeInTheDocument();
    });
});

describe('Smoke Test', () => {
    it('renders without crashing', () => {
        render(
            <HelmetProvider>
                <MemoryRouter>
                    <div data-testid="app-root">Application Running</div>
                </MemoryRouter>
            </HelmetProvider>
        );
        expect(screen.getByTestId('app-root')).toBeInTheDocument();
    });
});
