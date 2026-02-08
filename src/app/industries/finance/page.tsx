"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FinanceIndustryPage() {
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
                        <Link href="/industries" className="text-blue-400 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            Secure & Compliant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Technology Solutions for Finance</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                            Digital solutions for banking, insurance, and fintech companies. We build robust platforms that ensure security, compliance, and seamless customer experiences.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-blue-900/50">
                                Transform Your Financial Systems
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract geometric background */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-800 skew-x-12 opacity-50"></div>
                <div className="absolute right-20 bottom-0 w-64 h-64 border-2 border-white/5 rounded-full"></div>
                <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Financial Landscape</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Navigating Digital Finance Challenges</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    The financial sector faces a unique set of challenges: rigorous regulatory compliance, the constant threat of cyberattacks, and the need for high-performance systems that can handle millions of transactions per second.
                                </p>
                                <p>
                                    Our solutions address these head-on. Whether you're a traditional bank modernizing legacy systems or a fintech startup disrupting the market, we provide the secure, scalable technology backbone you need to succeed.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="bg-slate-50 p-8 border-t-4 border-blue-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Security First</h4>
                                <p className="text-sm text-slate-500">Defense-in-depth strategies to protect sensitive financial data.</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-t-4 border-amber-500 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Regulatory Agility</h4>
                                <p className="text-sm text-slate-500">Systems designed to adapt to changing compliance standards (GDPR, PCI-DSS).</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-t-4 border-emerald-500 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Scalability</h4>
                                <p className="text-sm text-slate-500">Cloud-native architectures that grow with your transaction volume.</p>
                            </div>
                            <div className="bg-slate-50 p-8 border-t-4 border-indigo-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Performance</h4>
                                <p className="text-sm text-slate-500">Low-latency processing for real-time trading and payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions We Offer */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Financial Technology Solutions</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Tailored software services for the banking and finance ecosystem.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Core Banking & Fintech Apps", icon: "🏦", desc: "Modern, microservices-based banking platforms and user-friendly mobile fintech applications." },
                            { title: "Payment Gateway Integration", icon: "💳", desc: "Seamless and secure integration with global payment processors and digital wallets." },
                            { title: "Risk & Compliance Systems", icon: "⚖️", desc: "Automated tools for managing regulatory reporting, AML (Anti-Money Laundering), and KYC processes." },
                            { title: "Data Analytics & Reporting", icon: "📊", desc: "Advanced dashboards and predictive analytics to drive investment decisions and customer insights." },
                            { title: "Cybersecurity & Fraud Detection", icon: "🛡️", desc: "AI-driven threat detection systems to identify and block fraudulent transactions in real-time." },
                            { title: "Blockchain Solutions", icon: "⛓️", desc: "Decentralized ledgers for secure, transparent, and immutable record-keeping and smart contracts." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 shadow-sm border border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance & Security */}
            <section className="py-20 md:py-32 bg-slate-900 text-white">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromised Security & Compliance</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We understand that trust is the currency of finance. Our development lifecycle embeds security at every stage, ensuring your software meets the highest global standards.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["PCI-DSS Compliant", "ISO 27001 Certified Processes", "End-to-End Data Encryption", "Secure API Architecture", "GDPR & CCPA Ready", "Regular Penetration Testing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 text-xs font-bold">✓</span>
                                        <span className="font-medium text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 flex justify-center" data-aos="zoom-in">
                            <div className="relative w-full max-w-md aspect-square bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center p-8">
                                <div className="absolute inset-0 border-[4px] border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-4 border-[2px] border-amber-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                <div className="text-center z-10">
                                    <div className="text-6xl mb-4">🔒</div>
                                    <div className="text-2xl font-bold text-white">Zero Trust</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-widest mt-2">Architecture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 md:py-32">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 uppercase tracking-widest" data-aos="fade-up">Powered By Enterprise Tech</h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale hover:grayscale-0 transition-all duration-500" data-aos="fade-in">
                        {['Java', 'Spring Boot', 'React', 'Node.js', 'Blockchain', 'AWS', 'Azure'].map((tech, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-blue-600 cursor-default transition-colors border-2 border-slate-100 px-6 py-3 rounded-full hover:border-blue-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Benefits */}
            <section className="py-20 bg-blue-50">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Drive Business Value</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Secure Transactions", desc: "Build customer trust with fraud-proof payment processing.", icon: "🔐" },
                            { title: "Faster Processing", desc: "Reduce settlement times from days to seconds with automated workflows.", icon: "⚡" },
                            { title: "Regulatory Peace of Mind", desc: "Focus on growth while our systems handle complex compliance requirements.", icon: "📜" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-600 text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-5xl mb-6">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-center text-white relative overflow-hidden">
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8" data-aos="fade-up">
                        Ready to Modernize Your Finance IT?
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Partner with industry experts to build the secure, scalable financial systems of tomorrow.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-amber-500 text-slate-900 px-12 py-5 rounded-sm font-bold hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-amber-500/50" data-aos="fade-up" data-aos-delay="200">
                        Transform Your Financial Systems
                    </Link>
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
            </section>
        </main>
    );
}
