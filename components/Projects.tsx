'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, Brain, Globe, Search } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "SIH – 1 Bit Brains",
        category: "Smart India Hackathon",
        description: "Smart India Hackathon project built collaboratively – innovative solution developed under the national hackathon challenge.",
        tags: ["Hackathon", "Team Project", "Innovation"],
        url: "https://github.com/heytanix/SIH-1-Bit-Brains",
        gradient: "from-orange-500 via-rose-500 to-pink-600",
        icon: Brain,
    },
    {
        id: 2,
        title: "Namastey India – E-Commerce",
        category: "Full-Stack Web App",
        description: "A feature-rich e-commerce website with animated backgrounds, gender-based filtering, 3D card animations, and 60+ curated products.",
        tags: ["React", "Vite", "CSS3", "Responsive"],
        url: "https://github.com/Souharda6996/E-COMMERCE",
        gradient: "from-purple-600 via-violet-500 to-indigo-500",
        icon: ShoppingBag,
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "Personal Branding",
        description: "A modern, animated personal portfolio showcasing skills, achievements, and projects with scroll-driven animations.",
        tags: ["Next.js", "Framer Motion", "TypeScript"],
        url: "https://github.com/Souharda6996/portfolio",
        gradient: "from-cyan-500 via-blue-500 to-indigo-600",
        icon: Globe,
    },
    {
        id: 4,
        title: "Research Agent",
        category: "Agentic AI System",
        description: "An AI-powered research assistant with multi-agent architecture, knowledge graph construction, literature review, and workflow orchestration.",
        tags: ["Python", "Multi-Agent", "Knowledge Graph", "AI"],
        url: "https://github.com/axls23/research_agent",
        gradient: "from-emerald-500 via-teal-500 to-cyan-600",
        icon: Search,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#121212] py-32 px-4 md:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Selected Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => {
                        const IconComponent = project.icon;
                        return (
                            <motion.a
                                key={project.id}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col h-full cursor-pointer"
                                style={{ textDecoration: 'none' }}
                            >
                                {/* Project Preview */}
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />

                                    {/* Decorative grid pattern */}
                                    <div className="absolute inset-0 opacity-[0.04]"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                            backgroundSize: '40px 40px'
                                        }}
                                    />

                                    {/* Floating icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500`}
                                        >
                                            <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Decorative floating dots */}
                                    <div className="absolute top-4 right-4 flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className="text-xs uppercase tracking-wider text-purple-400 font-medium">{project.category}</span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                                        </div>
                                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-purple-500/30 group-hover:rotate-45 transition-all duration-300 shrink-0 ml-3">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    <p className="text-white/60 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-white/5 text-white/50 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
