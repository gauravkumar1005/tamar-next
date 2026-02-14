"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    Code2,
    Smartphone,
    Globe,
    Bot,
    Lightbulb,
    ShieldCheck,
    Settings,
    CheckCircle2,
    Cpu
} from "lucide-react";

// Animation Variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardHover: Variants = {
    hover: {
        y: -8,
        scale: 1.02,
        transition: { type: "spring" as const, stiffness: 300 }
    }
};

export default function Capabilities() {
    const capabilities = [
        { title: "Software Development", desc: "Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.", icon: <Code2 className="w-8 h-8" />, slug: "software-development", color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Mobile Development", desc: "Create powerful and user friendly mobile applications for iOS and Android platforms.", icon: <Smartphone className="w-8 h-8" />, slug: "mobile-app-development", color: "text-indigo-600", bg: "bg-indigo-50" },
        { title: "Web Development", desc: "Build responsive, modern, and high-performance websites tailored to your business needs.", icon: <Globe className="w-8 h-8" />, slug: "web-development", color: "text-purple-600", bg: "bg-purple-50" },
        { title: "AI Services", desc: "Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.", icon: <Bot className="w-8 h-8" />, slug: "ai-services", color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "IT Consulting", desc: "Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.", icon: <Lightbulb className="w-8 h-8" />, slug: "it-consulting", color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Cybersecurity Services", desc: "Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.", icon: <ShieldCheck className="w-8 h-8" />, slug: "cybersecurity-services", color: "text-red-600", bg: "bg-red-50" },
        { title: "Managed IT Services", desc: "Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.", icon: <Settings className="w-8 h-8" />, slug: "managed-it-services", color: "text-slate-600", bg: "bg-slate-50" },
        { title: "Testing and QA Services", desc: "Rigorous testing and quality assurance processes to deliver reliable and high-performing software.", icon: <CheckCircle2 className="w-8 h-8" />, slug: "testing-and-qa-services", color: "text-cyan-600", bg: "bg-cyan-50" },
        { title: "RPA Development", desc: "Streamline operations and enhance productivity with our Robotic Process Automation solutions.", icon: <Cpu className="w-8 h-8" />, slug: "rpa-development", color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-50 border-b border-slate-100 overflow-hidden">
                {/* Background Patterns from Industries Page */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <motion.div
                            className="w-full md:w-1/2 text-center md:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
                                Our Expertise
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Capabilities</span>
                            </h1>
                            <h4 className="text-lg md:text-xl text-slate-600 font-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Comprehensive IT solutions <span className="font-medium text-slate-800">tailored to your business needs</span>, ensuring growth and efficiency.
                            </h4>
                        </motion.div>

                        <motion.div
                            className="w-full md:w-1/2 flex justify-center md:justify-end relative h-[400px] items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            {/* Abstract Tech Visualization */}
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Central Glowing Core */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 m-auto w-64 h-64 bg-gradient-to-tr from-[#9428BA] to-[#0E4972] rounded-3xl opacity-20 blur-3xl"
                                />

                                {/* Floating Cards / Blocks */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 left-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-20"
                                >
                                    <Code2 className="text-[#9428BA] w-10 h-10" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [15, -15, 15] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-20 right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-20"
                                >
                                    <Smartphone className="text-[#0E4972] w-8 h-8" />
                                </motion.div>

                                <motion.div
                                    animate={{ x: [-10, 10, -10] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-1/2 right-0 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100 z-10"
                                >
                                    <Globe className="text-blue-500 w-6 h-6" />
                                </motion.div>

                                {/* Connecting Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 500 500">
                                    <motion.path
                                        d="M150 150 L 400 250"
                                        stroke="#9428BA"
                                        strokeWidth="2"
                                        strokeDasharray="5 5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                        d="M400 250 L 350 400"
                                        stroke="#0E4972"
                                        strokeWidth="2"
                                        strokeDasharray="5 5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                                    />
                                </svg>

                                {/* Main Center Piece */}
                                <motion.div
                                    className="absolute inset-0 m-auto w-48 h-48 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 flex items-center justify-center z-10"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-3 h-3 rounded-full bg-[#9428BA]" />
                                        <div className="w-3 h-3 rounded-full bg-[#0E4972]" />
                                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid Section */}
            <section className="py-20 md:py-32 w-full bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                        >
                            Tailored for Success
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg"
                        >
                            We deliver specialized technology services designed to solve complex business challenges.
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {capabilities.map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className="h-full">
                                <Link
                                    href={item.slug ? `/services/${item.slug}` : "/capabilities"}
                                    className="group block h-full bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Gradient Background Effect */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.bg.replace('bg-', 'from-').replace('50', '50')} to-white rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-500`}></div>

                                    {/* Icon Box */}
                                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform duration-300`}>
                                        <div className={item.color}>
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    <span className={`inline-flex items-center gap-2 text-sm font-bold ${item.color} uppercase tracking-wider group-hover:gap-3 transition-all`}>
                                        Learn More <span>→</span>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Matching Industries Page Style */}
            <section className="py-24 bg-gradient-to-br from-[#0B0F19] to-[#1a233a] relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                            Partner with us to leverage cutting-edge technology tailored to your specific needs.
                        </p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group">
                                Start Your Journey
                                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
