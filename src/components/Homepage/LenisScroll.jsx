import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
    useEffect(() => {
        // Respect users who've asked for reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            // `smoothTouch` was removed in Lenis v1 — `syncTouch` is the current option
            syncTouch: false,
            anchors: { offset: -100 },
        });

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            // The old version leaked a rAF loop on every unmount
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
}
