"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EnergyUtilitiesIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-emerald-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-emerald-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Smart Technology for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Energy & Utilities</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Designing the future of sustainable infrastructure. We empower utility providers with smart grid solutions, real-time monitoring, and data-driven efficiency.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-emerald-200">
                                Power the Future
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Nature/Grid Background */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[80px] mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[80px] mix-blend-multiply"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Sustainability Transition</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Decarbonization & Digitization</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    The energy sector is undergoing its most significant transformation in a century. Providers must balance the integration of renewable energy sources with grid stability and rising consumer demand for transparency.
                                </p>
                                <p>
                                    Our technology bridges legacy infrastructure with the smart grid. We provide the digital backbone for distributed energy resources (DERs), ensuring reliable, efficient, and sustainable power delivery.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative bg-gradient-to-br from-emerald-900 to-slate-900 p-8 rounded-2xl shadow-2xl text-white overflow-hidden">
                                {/* Grid Visualization */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-end mb-8">
                                        <div>
                                            <div className="text-sm text-emerald-400 uppercase tracking-widest mb-1">Grid Load</div>
                                            <div className="text-4xl font-bold">84%</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="w-2 h-8 bg-green-500 rounded-sm"></span>
                                            <span className="w-2 h-8 bg-green-500 rounded-sm"></span>
                                            <span className="w-2 h-8 bg-green-500 rounded-sm"></span>
                                            <span className="w-2 h-8 bg-green-500/50 rounded-sm"></span>
                                            <span className="w-2 h-8 bg-green-500/20 rounded-sm"></span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">☀️</span>
                                                <div>
                                                    <div className="font-bold text-sm">Solar Output</div>
                                                    <div className="text-xs text-slate-400">Main Array</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">4.2 MW</div>
                                                <div className="text-xs text-green-400">▲ 12%</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">💨</span>
                                                <div>
                                                    <div className="font-bold text-sm">Wind Farm</div>
                                                    <div className="text-xs text-slate-400">Sector 7</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">12.5 MW</div>
                                                <div className="text-xs text-green-400">▲ 5%</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">🔋</span>
                                                <div>
                                                    <div className="font-bold text-sm">Storage</div>
                                                    <div className="text-xs text-slate-400">Li-Ion Reserve</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">92%</div>
                                                <div className="text-xs text-slate-300">Charged</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-emerald-50/50 border-y border-emerald-100">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Utility Transformation Suite</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Scalable solutions for water, gas, and electric providers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Smart Grid Solutions", icon: "⚡", desc: "Advanced Metering Infrastructure (AMI) and distribution automation." },
                            { title: "Energy Management", icon: "🌱", desc: "Platforms for monitoring consumption and optimizing efficiency for commercial clients." },
                            { title: "Utility Billing", icon: "🧾", desc: "Flexible billing engines supporting time-of-use rates and net metering." },
                            { title: "Asset Monitoring", icon: "🛠️", desc: "Remote condition monitoring for transformers, pipelines, and substations." },
                            { title: "Data Analytics", icon: "📊", desc: "Predictive load forecasting and outage management analytics." },
                            { title: "Customer Portals", icon: "📱", desc: "Self-service apps for usage tracking, bill payment, and outage reporting." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-3xl mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Powered By</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6" data-aos="fade-in">
                        {['Azure IoT', 'AWS Greengrass', 'PostgreSQL', 'Python', 'TensorFlow', 'Scada Integration'].map((item, idx) => (
                            <span key={idx} className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default hover:bg-emerald-50">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-white text-slate-900">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Modernize?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">The path to a resilient and sustainable energy future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Improved Efficiency", desc: "Reduce rapid technical losses and optimize grid load balancing." },
                            { title: "Cost Savings", desc: "Lower operational expenses through predictive maintenance and automation." },
                            { title: "Sustainable Ops", desc: "Accelerate the integration of renewable energy sources to meet net-zero goals." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="relative p-8 mt-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-emerald-500 transition-colors group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="absolute -top-6 left-6 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 mt-4 text-slate-900">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8" data-aos="fade-up">
                        Ready to power the future?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Join the leading utilities leveraging technology for a greener tomorrow.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-emerald-600 text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-emerald-900 transition-all uppercase tracking-widest text-sm shadow-xl shadow-emerald-900/20" data-aos="fade-up" data-aos-delay="200">
                        Modernize Your Infrastructure
                    </Link>
                </div>
            </section>
        </main>
    );
}
