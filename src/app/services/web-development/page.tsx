"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WebDevelopmentPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF]/50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-indigo-600 font-medium mb-6 inline-flex items-center gap-2 group">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold text-black leading-tight mb-6 mt-4">
                            Modern & High-Performance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Web Development</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                            We build responsive, scalable, and secure websites that combine stunning design with lightning-fast performance to elevate your digital presence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-indigo-600 text-white px-10 py-5 rounded-md font-bold hover:bg-black transition-all uppercase tracking-widest text-sm shadow-xl shadow-indigo-200">
                                Identify Your Web Strategy
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/30 -skew-x-12 transform origin-top-right"></div>
                <div className="absolute top-1/2 right-[10%] w-64 h-64 bg-purple-200/50 rounded-full blur-[100px]"></div>
            </section>

            {/* Introduction */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">Responsive, Secure, and Built to Scale</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                A website is more than just a digital brochure; it's a powerful tool for growth. We focus on creating web experiences that are not only beautiful but also highly functional, accessible, and optimized for maximum speed and SEO.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-indigo-600 mb-2">100%</h4>
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Responsive Design</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-purple-600 mb-2">&lt;2s</h4>
                                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Load Times</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative p-2 bg-gray-100 rounded-[32px] overflow-hidden shadow-2xl">
                                <div className="bg-white rounded-[24px] p-8 min-h-[400px] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-6">🌐</div>
                                        <p className="text-gray-400 font-serif italic text-xl">Future-ready web architecture.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Web Solutions for Every Goal</h2>
                        <p className="text-gray-500">From simple landing pages to complex web applications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Business Websites", icon: "🏢", desc: "Professional, identity-focused websites that build trust and showcase your brand to the world." },
                            { title: "E-commerce Solutions", icon: "🛒", desc: "Custom online stores optimized for conversions, seamless payments, and easy inventory management." },
                            { title: "Custom Web Applications", icon: "🧩", desc: "Complex, feature-rich platforms built with React and Next.js for specific business logic." },
                            { title: "Landing Pages", icon: "🚀", desc: "High-converting single pages designed to turn visitors into leads for your marketing campaigns." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all flex items-start gap-8" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl">{service.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">Mastering Modern Web Technologies</h2>
                            <p className="text-lg text-gray-600 mb-10">We stay at the forefront of the digital world by using the most efficient and powerful tools available today.</p>
                            <div className="flex flex-wrap gap-4">
                                {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map(tech => (
                                    <span key={tech} className="px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { name: "HTML5", icon: "html" },
                                    { name: "CSS3", icon: "css" },
                                    { name: "JavaScript", icon: "js" },
                                    { name: "React", icon: "react" },
                                    { name: "Next.js", icon: "next" },
                                    { name: "Tailwind", icon: "tailwind" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-gray-50 rounded-lg mb-3 flex items-center justify-center font-bold text-xs uppercase text-gray-400">
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-black text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { title: "SEO Friendly", icon: "🔍", desc: "Semantic code and optimized meta tags to rank higher in search results." },
                            { title: "Fast Loading", icon: "⚡", desc: "Optimized assets and server-side rendering for instant page transitions." },
                            { title: "Secure", icon: "🔒", desc: "Latest security patches and SSL encryption to protect your users' data." },
                            { title: "Responsive Design", icon: "📱", desc: "Perfectly optimized for mobile, tablet, and ultra-wide desktop screens." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center md:text-left" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl mb-6">{benefit.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600 relative overflow-hidden">
                <div className="container relative z-10 text-center text-white">
                    <h2 className="text-[32px] md:text-[56px] font-bold mb-8 leading-tight" data-aos="fade-up">
                        Ready to Start Your <br /> Web Project?
                    </h2>
                    <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Let's build something extraordinary together. Schedule a free discovery call with our web experts today.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-md font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Launch Your Vision
                    </Link>
                </div>
                {/* Abstract shapes */}
                <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-white/10 rounded-full blur-[150px]"></div>
            </section>
        </main>
    );
}
