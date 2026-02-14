'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Certificates from '@/components/Certificates';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

interface HomeClientProps {
    imageUrls: string[];
}

export default function HomeClient({ imageUrls }: HomeClientProps) {
    return (
        <main className="min-h-screen bg-[#121212]">
            <ScrollyCanvas imageUrls={imageUrls}>
                {(progress) => <Overlay scrollYProgress={progress} />}
            </ScrollyCanvas>

            <About />
            <Skills />
            <Achievements />
            <Certificates />
            <Internships />
            <Projects />
            <Contact />

            <footer className="py-12 text-center text-white/30 text-sm border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} Souharda Mandal. All rights reserved.</p>
            </footer>
        </main>
    );
}
