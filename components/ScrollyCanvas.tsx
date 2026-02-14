'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

interface ScrollyCanvasProps {
    imageUrls: string[];
    children?: React.ReactNode | ((progress: MotionValue<number>) => React.ReactNode);
}

export default function ScrollyCanvas({ imageUrls, children }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, imageUrls.length - 1]);

    useEffect(() => {
        if (imageUrls.length === 0) return;

        let loadedCount = 0;
        const imgObjects: HTMLImageElement[] = [];

        // Preload all images
        imageUrls.forEach((url, i) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setIsLoaded(true);
                }
            };
            imgObjects[i] = img;
        });
        setImages(imgObjects);
    }, [imageUrls]);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || images.length === 0 || !isLoaded) return;

        const img = images[Math.round(index)];
        if (!img) return;

        const dpr = window.devicePixelRatio || 1;

        // Use logical (CSS) dimensions for drawing calculations
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // Enable high-quality image smoothing for crisp rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Clear full canvas (logical coords since context is already scaled)
        ctx.clearRect(0, 0, width, height);

        // Calculate Cover fit
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = width;
            drawHeight = width / imgRatio;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        } else {
            drawWidth = height * imgRatio;
            drawHeight = height;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        requestAnimationFrame(() => render(latest));
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;

                // Set the canvas buffer to full physical resolution
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                    // Reset transform to identity before scaling
                    // (prevents compounding scales on repeated resize)
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                }

                // Re-render current frame
                if (isLoaded) render(frameIndex.get());
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            render(frameIndex.get());
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        filter: 'contrast(1.15) saturate(1.1) brightness(1.05)'
                    }}
                />
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {typeof children === 'function' ? children(scrollYProgress) : children}
                </div>
            </div>
        </div>
    );
}
