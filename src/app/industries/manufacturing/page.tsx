"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ManufacturingIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-900 font-sans selection:bg-slate-400 selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-200">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-slate-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-black transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-black leading-tight mb-6 mt-4 text-slate-900 uppercase tracking-tighter">
                            Industry 4.0 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Smart manufacturing for the digital age. We optimize production, streamline supply chains, and predict maintenance needs using IoT and AI.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-slate-900 text-white px-10 py-4 font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-xs border-b-4 border-slate-600 hover:border-slate-900">
                                Modernize Operations
                            </button>
                        </div>
                    </div>
                </div>
                {/* Industrial Abstract Background */}
                <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] border-[50px] border-slate-300 rounded-full opacity-50"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Efficiency Imperative</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Data-Driven Production</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    In a competitive global market, margins are thin and uptime is critical. Manufacturers face the dual challenge of maximizing asset utilization while minimizing waste and downtime.
                                </p>
                                <p>
                                    Our solutions turn your factory floor into a data-rich environment. By connecting machines, materials, and people, we provide the real-time visibility needed to make split-second operational decisions.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-slate-100 p-8 border border-slate-300">
                                    <div className="text-4xl font-black text-slate-800 mb-2">25%</div>
                                    <div className="text-xs uppercase font-bold text-slate-500">Productivity Gain</div>
                                </div>
                                <div className="bg-slate-800 p-8 border border-slate-800 text-white">
                                    <div className="text-4xl font-black mb-2">40%</div>
                                    <div className="text-xs uppercase font-bold text-slate-400">Downtime Reduced</div>
                                </div>
                                <div className="bg-white p-8 border border-slate-300 col-span-2">
                                    <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide">Return on Investment</h3>
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-4">
                                        <div className="bg-green-600 h-full w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Manufacturing Suite</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Rugged software for demanding industrial environments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Smart Factory", icon: "🏭", desc: "Digital twin technology to simulate and optimize production lines." },
                            { title: "Supply Chain", icon: "🚚", desc: "End-to-end visibility from raw material sourcing to final delivery." },
                            { title: "Predictive Maint.", icon: "🔧", desc: "Machine learning models that predict equipment failure before it happens." },
                            { title: "Production Planning", icon: "📅", desc: "Advanced scheduling algorithms to balance load and meet deadlines." },
                            { title: "Inventory Control", icon: "📦", desc: "Automated warehouse management with RFID and barcode integration." },
                            { title: "Quality Operations", icon: "✅", desc: "Computer vision systems for automated defect detection." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 border-2 border-slate-200 hover:border-slate-800 transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-400">Powered By</h2>
                        </div>
                        <div className="h-12 w-px bg-slate-700 hidden md:block"></div>
                        <div className="flex flex-wrap justify-center gap-8 font-mono text-lg">
                            <span>Industrial IoT</span>
                            <span>•</span>
                            <span>Edge Computing</span>
                            <span>•</span>
                            <span>SAP / ERP</span>
                            <span>•</span>
                            <span>Robotics</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-200 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter" data-aos="fade-up">
                        Build the future of making.
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Partner with us to implement the next generation of manufacturing technology.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-slate-900 text-white px-12 py-5 font-bold hover:bg-white hover:text-slate-900 border-2 border-transparent hover:border-slate-900 transition-all uppercase tracking-widest text-xs" data-aos="fade-up" data-aos-delay="200">
                        Modernize Manufacturing Operations
                    </Link>
                </div>
            </section>
        </main>
    );
}
