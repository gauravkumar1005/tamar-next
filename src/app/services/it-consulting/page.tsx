"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ITConsultingPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-slate-400 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-wider text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            Strategic IT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Consulting Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                            Aligning technology with business vision. We provide expert guidance to optimize your infrastructure, accelerate digital transformation, and drive sustainable growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-sm font-semibold hover:bg-blue-700 transition-all uppercase tracking-wider text-sm">
                                Get Expert IT Advice
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract geometric background */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-800 skew-x-12 opacity-50"></div>
                <div className="absolute right-20 bottom-0 w-64 h-64 border-2 border-white/5 rounded-full"></div>
            </section>

            {/* Description / Value Prop */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Navigating Complexity with Clarity</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    In a rapidly evolving digital landscape, making the right technology choices is critical. Our consultants act as your strategic partners, cutting through the noise to deliver actionable insights that solve real business problems.
                                </p>
                                <p>
                                    We don't just recommend software; we architect ecosystems. From legacy modernization to cloud migration strategies, our holistic approach ensures every IT investment delivers maximum ROI.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="bg-slate-50 p-8 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">15+</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Years Experience</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-4 border-cyan-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">500+</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Projects Delivered</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">24/7</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Strategic Support</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-4 border-teal-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Areas */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Core Consulting Areas</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Tailored strategies for every stage of your digital journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "IT Strategy", icon: "📊", desc: "Developing comprehensive roadmaps that align IT initiatives with long-term business objectives." },
                            { title: "Cloud Consulting", icon: "☁️", desc: "Guiding your migration to AWS, Azure, or Hybrid clouds for optimized scalability and cost-efficiency." },
                            { title: "Digital Transformation", icon: "🚀", desc: "Reimagining business processes through technology to improve agility and customer experience." },
                            { title: "System Architecture", icon: "🏗️", desc: "Designing robust, scalable, and secure technical foundations for your enterprise applications." }
                        ].map((area, idx) => (
                            <div key={idx} className="bg-white p-8 shadow-sm border border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="bg-slate-900 rounded-[30px] p-10 md:p-20 text-white relative overflow-hidden">
                        <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/2" data-aos="fade-right">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    We bring a blend of technical expertise and business acumen that is rare in the industry. Our focus is not just on implementing technology, but on creating value.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Vendor-Agnostic Recommendations",
                                        "Expert Guidance from Senior Architects",
                                        "Cost-Effective & Scalable Solutions",
                                        "Proven Track Record of Success"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">✓</span>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in">
                                {/* Abstract Illustration Placeholder */}
                                <div className="grid grid-cols-2 gap-4 opacity-80">
                                    <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                                    <div className="w-32 h-32 bg-blue-500/20 rounded-2xl backdrop-blur-sm translate-y-8"></div>
                                    <div className="w-32 h-32 bg-cyan-500/20 rounded-2xl backdrop-blur-sm -translate-y-8"></div>
                                    <div className="w-32 h-32 bg-white/5 rounded-2xl backdrop-blur-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-0"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Let's Architect Your Future
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Schedule a preliminary consultation with our lead strategists to identify your biggest opportunities.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-sm font-bold hover:bg-slate-900 transition-all uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Get Expert IT Advice
                    </Link>
                </div>
            </section>
        </main>
    );
}
