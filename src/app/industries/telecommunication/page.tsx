"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TelecommunicationIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 selection:bg-cyan-100 selection:text-cyan-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-cyan-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-cyan-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Telecom Solutions <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">for a Connected World</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Powering network management, billing, and customer experience. We build the scalable infrastructure that keeps the world talking.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-700 transition-all uppercase tracking-wider text-sm shadow-xl shadow-blue-200">
                                Upgrade Your Infrastructure
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Network Background */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                <div className="absolute right-[-10%] bottom-[-20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Connectivity Challenge</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Scale at Speed</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Telecommunication providers are under immense pressure to deliver higher speeds, lower latency, and zero downtime—all while managing complex billing cycles and massive datasets.
                                </p>
                                <p>
                                    Our solutions focus on operational excellence. We automate network operations (NetOps), streamline BSS/OSS workflows, and leverage AI to predict service interruptions before they affect customers.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 gap-6" data-aos="fade-left">
                            {/* Network Visualization Card */}
                            <div className="bg-slate-900 p-8 rounded-lg text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></span>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-6">Network Health Monitor</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                            <span className="font-mono text-sm">US-East-1 Core</span>
                                        </div>
                                        <span className="font-mono text-xs text-green-400">99.99% Uptime</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                            <span className="font-mono text-sm">EU-West Gateway</span>
                                        </div>
                                        <span className="font-mono text-xs text-green-400">99.95% Uptime</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-pointer border border-yellow-500/30">
                                        <div className="flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full bg-yellow-500 animate-ping"></span>
                                            <span className="font-mono text-sm">APAC-South Node</span>
                                        </div>
                                        <span className="font-mono text-xs text-yellow-400">High Latency</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Enterprise Telecom Suite</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Robust applications for modern communication service providers (CSPs).</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Network Management", icon: "📡", desc: "Centralized dashboards for monitoring physical and virtual network functions (VNF)." },
                            { title: "Billing & Revenue", icon: "💳", desc: "Complex rating engines and convergent billing systems for prepaid/postpaid plans." },
                            { title: "CRM & Support", icon: "🎧", desc: "360-degree customer view platforms integrated with ticketing and self-service portals." },
                            { title: "OSS / BSS Solutions", icon: "⚙️", desc: "End-to-end operational and business support systems for seamless order fulfillment." },
                            { title: "Data Analytics", icon: "📊", desc: "Big data pipelines processing terabytes of call detail records (CDRs) for insights." },
                            { title: "5G Slice Management", icon: "📶", desc: "Orchestration tools for managing network slices for specialized enterprise use cases." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 border-l-4 border-blue-600 shadow-sm hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl mb-6 text-blue-600 group-hover:scale-110 transition-transform origin-left">
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
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-400">Designed for Scale</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6" data-aos="fade-in">
                        {['Microservices Architecture', 'Kubernetes', 'Apache Kafka', 'Elasticsearch', 'AI/ML Ops'].map((item, idx) => (
                            <span key={idx} className="px-6 py-3 rounded border border-slate-700 font-mono text-sm hover:bg-blue-600 hover:border-blue-600 transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Network Performance", desc: "Optimized routing and load balancing for superior Quality of Service (QoS).", icon: "🚀" },
                            { title: "Revenue Assurance", desc: "Eliminate leakage with automated reconciliation and fraud detection algorithms.", icon: "🛡️" },
                            { title: "Customer Satisfaction", desc: "Reduce churn with predictive support and personalized service offerings.", icon: "😊" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center p-6 border border-slate-100 rounded-xl hover:border-cyan-400 transition-colors" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-cyan-600">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-center text-white">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8" data-aos="fade-up">
                        Ready to future-proof your network?
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Partner with the experts in high-scale telecommunication software.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-cyan-500 text-slate-900 px-12 py-5 rounded-sm font-bold hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-cyan-500/50" data-aos="fade-up" data-aos-delay="200">
                        Upgrade Your Telecom Infrastructure
                    </Link>
                </div>
            </section>
        </main>
    );
}
