'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const certificates = [
    {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte (via Forage)",
        date: "Jun 2025",
        skills: "Data Analysis · Forensic Technology",
        image: "/certificates/cert-deloitte.png",
    },
    {
        title: "Java – Student Development Program",
        issuer: "E & ICT Academy, IIT Kanpur",
        date: "Jan 2024",
        skills: "Core Java · MeitY Initiative",
        image: "/certificates/cert-iit-kanpur.png",
    },
    {
        title: "Generative AI in Education",
        issuer: "University of Glasgow · Coursera",
        date: "Oct 2024",
        skills: "GenAI · Prompt Engineering",
        image: "/certificates/cert-glasgow.png",
    },
    {
        title: "Neural Networks & Deep Learning",
        issuer: "DeepLearning.AI · Coursera",
        date: "Oct 2025",
        skills: "Neural Nets · Backpropagation",
        image: "/certificates/cert-deeplearning.png",
    },
    {
        title: "Creating Database Tables with SQL",
        issuer: "Coursera Project Network",
        date: "Aug 2024",
        skills: "SQL · Database Design",
        image: "/certificates/cert-sql.png",
    },
    {
        title: "Python Coder Badge",
        issuer: "Kaggle",
        date: "Nov 2025",
        skills: "Python · Data Science",
        image: "/certificates/cert-kaggle.png",
    },
];

export default function Certificates() {
    const [selected, setSelected] = useState<number | null>(null);

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
                            Credentials
                        </span>
                        <h2 className="text-3xl md:text-5xl text-white font-bold mb-16">
                            Certifications
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((cert, i) => (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    onClick={() => setSelected(i)}
                                    className="group relative text-left rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-colors duration-300 cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="flex items-center gap-2 text-white text-xs font-medium bg-purple-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                                <ExternalLink className="w-3 h-3" />
                                                View
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                                            <Award className="w-3 h-3 text-purple-400 shrink-0" />
                                            <span className="truncate">{cert.issuer}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] text-purple-400/70 font-mono">
                                                {cert.date}
                                            </span>
                                            <span className="text-[10px] text-white/30 truncate max-w-[60%] text-right">
                                                {cert.skills}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Glow effect on hover */}
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
                            onClick={() => setSelected(null)}
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
                                onClick={() => setSelected(null)}
                                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Certificate image */}
                            <div className="relative w-full overflow-auto max-h-[70vh]">
                                <Image
                                    src={certificates[selected].image}
                                    alt={certificates[selected].title}
                                    width={900}
                                    height={650}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>

                            {/* Info bar */}
                            <div className="p-4 border-t border-white/5 flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                    <h3 className="text-white font-semibold text-sm truncate">
                                        {certificates[selected].title}
                                    </h3>
                                    <p className="text-white/40 text-xs">
                                        {certificates[selected].issuer} · {certificates[selected].date}
                                    </p>
                                </div>
                                <span className="shrink-0 text-[10px] text-purple-400/60 font-mono whitespace-nowrap">
                                    {certificates[selected].skills}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
