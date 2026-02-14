'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const achievements = [
    { title: "Neural Networks & Deep Learning", issuer: "DeepLearning.AI · Coursera", year: "2025" },
    { title: "Python Coder Badge", issuer: "Kaggle", year: "2025" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", year: "2025" },
    { title: "Generative AI in Education", issuer: "University of Glasgow · Coursera", year: "2024" },
    { title: "Creating Database Tables with SQL", issuer: "Coursera Project Network", year: "2024" },
    { title: "Java – Student Development Program", issuer: "E & ICT Academy, IIT Kanpur", year: "2024" },
];

export default function Achievements() {
    return (
        <section className="bg-[#121212] py-24 px-4 md:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-8 block">Milestones</span>
                    <h2 className="text-3xl md:text-5xl text-white font-bold mb-16">Achievements</h2>

                    <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-[#121212]" />

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <span className="text-sm text-white/40 font-mono">{item.year}</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-white/60">
                                    <Award className="w-4 h-4 text-purple-400" />
                                    <span>{item.issuer}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
