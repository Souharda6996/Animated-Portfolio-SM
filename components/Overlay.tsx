'use client';

import { useTransform, MotionValue, motion } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Since Overlay is inside sticky container, use scrollYProgress from parent context or just assume it covers the same scroll range?
    // Actually, Overlay is rendered inside ScrollyCanvas's sticky container which is 100vh.
    // We need to track the parent's scroll (the 500vh container).
    // But ScrollyCanvas uses `useScroll` on its local ref.
    // We can just rely on `useScroll` finding the nearest scroll container (window/body usually).

    // Actually, since the sticky container is fixed, `useScroll` on window works.
    // Scroll range 0-1 for the whole page (approximately).

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

    return (
        <div className="w-full h-full relative font-sans text-white pointer-events-none">
            {/* Section 1 */}
            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Souharda Mandal</h1>
                <p className="text-xl md:text-2xl mt-4 font-light text-white/80">CSE–AIML Student | Web Developer | AI &amp; Prompt Engineer</p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ y: y2, opacity: opacity2 }}
                className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 w-full max-w-lg"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Crafting digital experiences.</h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ y: y3, opacity: opacity3 }}
                className="absolute top-1/2 right-10 md:right-20 -translate-y-1/2 w-full max-w-lg text-right"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Bangalore, India.</h2>
            </motion.div>
        </div>
    );
}
