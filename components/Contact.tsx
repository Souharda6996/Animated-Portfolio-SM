'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const contacts = [
    {
        label: "Phone",
        value: "+91 7318835177",
        href: "tel:+917318835177",
        icon: Phone,
        color: "from-green-500/20 to-green-500/5",
        iconColor: "text-green-400",
    },
    {
        label: "Email",
        value: "mandalsouharda01@gmail.com",
        href: "mailto:mandalsouharda01@gmail.com",
        icon: Mail,
        color: "from-red-500/20 to-red-500/5",
        iconColor: "text-red-400",
    },
    {
        label: "LinkedIn",
        value: "souharda01",
        href: "https://www.linkedin.com/in/souharda01",
        icon: Linkedin,
        color: "from-blue-500/20 to-blue-500/5",
        iconColor: "text-blue-400",
    },
    {
        label: "Instagram",
        value: "@hey_souharda",
        href: "https://www.instagram.com/hey_souharda?igsh=ZzR4Zm9mYWV6dWJ1",
        icon: Instagram,
        color: "from-pink-500/20 to-pink-500/5",
        iconColor: "text-pink-400",
    },
];

export default function Contact() {
    return (
        <section className="bg-[#121212] py-24 px-4 md:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-8 block">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">
                        Contact Me
                    </h2>
                    <p className="text-white/40 text-base mb-14 max-w-lg">
                        Feel free to reach out — I&apos;m always open to new opportunities and conversations.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {contacts.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target={item.label === "LinkedIn" || item.label === "Instagram" ? "_blank" : undefined}
                                rel={item.label === "LinkedIn" || item.label === "Instagram" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Icon */}
                                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                    <span className="text-white/40 text-xs font-medium uppercase tracking-wider block mb-0.5">
                                        {item.label}
                                    </span>
                                    <span className="text-white text-sm font-medium truncate block">
                                        {item.value}
                                    </span>
                                </div>

                                {/* Glow on hover */}
                                <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${item.color}`} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
