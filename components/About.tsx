'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="bg-[#121212] py-24 px-4 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">About Me</span>
                    <h2 className="text-3xl md:text-4xl text-white font-bold leading-relaxed mb-8">
                        Passionate front-end developer crafting beautiful, responsive web experiences — with deep expertise in prompt engineering and AI-powered workflows.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-white/70 leading-relaxed">
                        <div>
                            <p className="mb-6">
                                Experienced in building modern web interfaces with React, Next.js, and cutting-edge CSS.
                                Skilled in prompt engineering to leverage AI tools for rapid development and intelligent applications.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-white font-semibold mb-4 text-xl">Education</h3>
                            <div>
                                <h4 className="text-lg font-medium text-white">B.Tech in CSE (AI/ML)</h4>
                                <p className="text-purple-300">JAIN University, Bangalore</p>
                                <p className="text-sm mt-1 text-white/50">2023 – 2027</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
