import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footerpage';
import LenisScroll from '../components/Homepage/LenisScroll';

export default function MainLayout() {
    const { pathname, hash } = useLocation();

    // React Router doesn't scroll to a #hash on its own after a client-side
    // navigation (only the browser does that on a full page load). This
    // handles both "jump to section" links from other pages and the normal
    // "scroll to top on route change" behaviour.
    useEffect(() => {
        if (hash) {
            // Wait a tick for the target page's content to render
            const id = hash.replace('#', '');
            const timer = setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
            return () => clearTimeout(timer);
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (
        <>
            <LenisScroll />
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* Rendered once here — not inside every section component */}
            <Footer />
            {/*
              Free on Vercel, no config needed beyond deploying there.
              Does nothing (silently) when run anywhere else, e.g. local dev.
            */}
            <Analytics />
        </>
    );
}
