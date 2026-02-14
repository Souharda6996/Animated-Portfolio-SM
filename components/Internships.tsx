'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const internships = [
    {
        title: "SDE Intern",
        company: "Bluestock Fintech",
        duration: "Dec 2025 – Jan 2026",
        type: "Remote · Part-time",
        skills: "Software Development · Fintech",
        images: ["/internships/intern-bluestock.png"],
    },
    {
        title: "Machine Learning – Hybrid Intern",
        company: "1Stop (Fox Trading)",
        duration: "May 2025 · 60 days",
        type: "Work from Home",
        skills: "Machine Learning · Data Science",
        images: ["/internships/intern-1stop-p1.png", "/internships/intern-1stop-p2.png"],
    },
];

export default function Internships() {
    const [selected, setSelected] = useState<number | null>(null);
    const [page, setPage] = useState(0);

    const openModal = (index: number) => {
        setSelected(index);
        setPage(0);
    };

    const closeModal = () => {
        setSelected(null);
        setPage(0);
    };

    return (
        <>
            <section className="bg-[#121212] py-24 px-4 md:px-12 relative z-10 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-8 block">
                            Experience
                        </span>
                        <h2 className="text-3xl md:text-5xl text-white font-bold mb-16">
                            Internships
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {internships.map((item, i) => (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    onClick={() => openModal(i)}
                                    className="group relative text-left rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-colors duration-300 cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                                        <Image
                                            src={item.images[0]}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="flex items-center gap-2 text-white text-xs font-medium bg-purple-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                                View Letter
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="text-white font-semibold text-base leading-snug mb-1">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-white/50 text-sm mb-2">
                                            <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                                            <span>{item.company}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-purple-400/70 font-mono">
                                                {item.duration}
                                            </span>
                                            <span className="text-[10px] text-white/30">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Glow */}
                                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Content */}
                        <motion.div
                            className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl shadow-purple-500/5"
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 28, stiffness: 350 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Image with page navigation */}
                            <div className="relative w-full overflow-auto max-h-[70vh]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={page}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Image
                                            src={internships[selected].images[page]}
                                            alt={`${internships[selected].title} - Page ${page + 1}`}
                                            width={900}
                                            height={1200}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Page navigation arrows */}
                                {internships[selected].images.length > 1 && (
                                    <>
                                        {page > 0 && (
                                            <button
                                                onClick={() => setPage(p => p - 1)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors cursor-pointer"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                        )}
                                        {page < internships[selected].images.length - 1 && (
                                            <button
                                                onClick={() => setPage(p => p + 1)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors cursor-pointer"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Info bar */}
                            <div className="p-4 border-t border-white/5 flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                    <h3 className="text-white font-semibold text-sm truncate">
                                        {internships[selected].title}
                                    </h3>
                                    <p className="text-white/40 text-xs">
                                        {internships[selected].company} · {internships[selected].duration}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    {internships[selected].images.length > 1 && (
                                        <span className="text-[10px] text-white/30 font-mono">
                                            {page + 1}/{internships[selected].images.length}
                                        </span>
                                    )}
                                    <span className="text-[10px] text-purple-400/60 font-mono whitespace-nowrap">
                                        {internships[selected].skills}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
