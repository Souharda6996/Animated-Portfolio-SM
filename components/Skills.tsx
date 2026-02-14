'use client';

import { motion } from 'framer-motion';

const skills = [
    { category: "Programming", items: ["Java", "Python"] },
    { category: "Databases", items: ["MongoDB", "SQL"] },
    { category: "Front-End", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript", "Next.js"] },
    { category: "Tools & Platforms", items: ["GitHub", "VS Code", "Claude", "Blackbox", "Adobe"] },
];

export default function Skills() {
    return (
        <section className="bg-[#121212] py-24 px-4 md:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-8 block">Technical Arsenal</span>
                    <h2 className="text-3xl md:text-5xl text-white font-bold mb-16">Skills & Technologies</h2>

                    <div className="space-y-12">
                        {skills.map((skillGroup, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <h3 className="text-xl text-white font-medium mb-4">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {skillGroup.items.map((item, j) => (
                                        <motion.div
                                            key={j}
                                            className="relative overflow-hidden bg-white/5 px-4 py-2 rounded-full border border-white/10 group"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: 0.2 + (j * 0.05) }}
                                                className="absolute bottom-0 left-0 h-[2px] bg-purple-500/50"
                                            />
                                            <span className="text-white/80 text-sm relative z-10">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
