"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InfrastructureIndustryPage() {
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
                        <Link href="/industries" className="text-orange-500 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            Digital Solutions for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Infrastructure & Construction</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-light">
                            Smart technology for efficient project management. We build the digital foundation that helps you construct the physical world on time and under budget.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orange-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-orange-900/50 border-b-4 border-orange-800 active:border-b-0 active:translate-y-1">
                                Build Smarter with Technology
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Blueprint/Construction Background */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')] opacity-20"></div>
                <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] border-[40px] border-slate-800 rounded-full opacity-50"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[100px]"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Industry Challenge</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Complexity at Scale</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Modern construction projects are feats of engineering and coordination. Yet, the industry often struggles with fragmented data, communication silos, and unforeseen delays that erode profit margins.
                                </p>
                                <p>
                                    We digitize the job site. Our solutions bring transparency to every phase of the construction lifecycle, from initial planning and resource allocation to real-time progress monitoring and facility management.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="bg-slate-50 p-8 border-l-8 border-orange-500 shadow-sm">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">30%</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Reduction in Delays</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-8 border-slate-700 shadow-sm">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">15%</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Cost Savings</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-8 border-amber-500 shadow-sm">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Visibility</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-l-8 border-blue-600 shadow-sm">
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">Zero</h4>
                                <p className="text-sm text-slate-500 font-medium uppercase">Paperwork</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Builders</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Robust software tools designed for the rigorous demands of construction.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Project Management", icon: "🏗️", desc: "Centralized platforms to track milestones, budgets, and schedules in real-time." },
                            { title: "Resource & Workforce", icon: "👷", desc: "Optimize labor allocation and equipment utilization across multiple job sites." },
                            { title: "Cost Tracking & Reporting", icon: "💰", desc: "Granular financial insights to detect budget overruns early and maintain profitability." },
                            { title: "Document Management", icon: "📂", desc: "Secure cloud repositories for blueprints, permits, and contracts, accessible from any device." },
                            { title: "IoT & Smart Monitoring", icon: "📡", desc: "Connected sensors for tracking asset location, equipment health, and environmental conditions." },
                            { title: "Safety & Compliance", icon: "🦺", desc: "Digital checklists and incident reporting tools to ensure strict adherence to OSHA standards." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-slate-800 p-8 border border-slate-700 hover:border-orange-500 hover:bg-slate-750 transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-slate-700 rounded-sm flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits - Structural/Blueprint Style */}
            <section className="py-20 md:py-32 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-fixed">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">The Digital Blueprint</h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Central Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-orange-500 hidden md:block"></div>

                        {[
                            { title: "Improved Efficiency", desc: "Eliminate bottlenecks with automated workflows and instant communication channels." },
                            { title: "Risk Mitigation", desc: "Identify potential hazards and scheduling conflicts before they become critical issues." },
                            { title: "Data-Driven Decisions", desc: "Leverage historical data to estimate future project costs and timelines with greater accuracy." },
                            { title: "Sustainable Building", desc: "Track material usage and waste to support green building initiatives and certifications." }
                        ].map((benefit, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`} data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}>
                                <div className="w-full md:w-1/2 p-6 bg-white border-2 border-slate-200 shadow-lg relative">
                                    {/* Connection Dot */}
                                    <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-orange-500 border-4 border-white rounded-full ${idx % 2 === 0 ? '-left-[42px]' : '-right-[42px]'} translate-y-[-50%] z-10`}></div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="text-orange-500">0{idx + 1}.</span> {benefit.title}
                                    </h3>
                                    <p className="text-slate-600">{benefit.desc}</p>
                                </div>
                                <div className="w-full md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-slate-100">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 uppercase tracking-widest text-slate-400" data-aos="fade-up">Tech Stack Construction</h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center" data-aos="fade-in">
                        {['Cloud Platforms', 'ERP Systems', 'BIM Integration', 'Data Analytics', 'Mobile Apps', 'Drones & UAVs'].map((tech, idx) => (
                            <span key={idx} className="text-lg md:text-xl font-bold text-slate-600 bg-white px-6 py-4 border-b-4 border-slate-300 hover:border-orange-500 hover:text-orange-600 hover:-translate-y-1 transition-all cursor-default shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-orange-600 text-center text-white relative overflow-hidden">
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8" data-aos="fade-up">
                        Ready to break ground on innovation?
                    </h2>
                    <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Equip your teams with the tools they need to build the future.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-sm font-bold hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl" data-aos="fade-up" data-aos-delay="200">
                        Build Smarter with Technology
                    </Link>
                </div>
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
            </section>
        </main>
    );
}
