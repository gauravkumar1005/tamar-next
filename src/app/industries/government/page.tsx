"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GovernmentIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-slate-100 text-slate-800 selection:bg-slate-300 selection:text-slate-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-slate-500 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-slate-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-800">
                            Digital Transformation for <br />
                            <span className="text-slate-500">Government & Public Services</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl font-light">
                            Secure, efficient, and transparent. We enable smart governance through citizen-centric digital platforms and robust data infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-slate-800 text-white px-8 py-4 rounded-sm font-bold hover:bg-slate-700 transition-all uppercase tracking-wider text-sm shadow-lg">
                                Enable Smart Governance
                            </button>
                        </div>
                    </div>
                </div>
                {/* Geometric/Architectural Background - Clean & Formal */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 skew-x-[-12deg] opacity-50 border-l border-slate-200"></div>
                <div className="absolute right-[10%] bottom-0 w-64 h-2 bg-slate-200"></div>
                <div className="absolute right-[15%] bottom-[10px] w-64 h-2 bg-slate-200"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Public Sector Challenge</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">Serving the Digital Citizen</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Modern citizens expect the same level of digital convenience from government agencies as they do from private sector companies. Yet, agencies must balance this innovation with strict security, privacy, and budget constraints.
                                </p>
                                <p>
                                    We bridge this gap. Our solutions modernize legacy systems, automate improved workflows, and open secure channels for citizen engagement, all while maintaining the highest compliance standards.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="bg-white p-10 shadow-xl border-t-8 border-slate-800 rounded-sm">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Security & Compliance First</h3>
                                <ul className="space-y-4">
                                    {[
                                        "GDPR & Data Privacy Adherence",
                                        "Accessibility (WCAG 2.1) Standards",
                                        "FedRAMP Ready Cloud Solutions",
                                        "End-to-End Encryption",
                                        "Audit Trails & Transparency"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-100 rounded-sm">
                                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-700">✓</div>
                                            <span className="font-medium text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">E-Governance Solutions</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Scalable technology for federal, state, and local agencies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Citizen Portals", icon: "🏛️", desc: "One-stop digital counters for licenses, permits, and tax filings." },
                            { title: "Digital Identify", icon: "🆔", desc: "Secure authentication systems for verifying citizen access to services." },
                            { title: "Workflow Automation", icon: "⚙️", desc: "Reducing red tape by automating internal approval processes." },
                            { title: "Secure Data Mgmt", icon: "🔐", desc: "Unified data warehouses with role-based access controls." },
                            { title: "Smart City IoT", icon: "📡", desc: "Sensors and dashboards for traffic, waste, and utility management." },
                            { title: "Public Safety", icon: "🚓", desc: "Emergency response systems and inter-agency communication tools." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 border border-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-300 group rounded-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{solution.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/3">
                            <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Enterprise Grade Tech</h2>
                            <p className="text-slate-400">Built on stable, supported, and secure open-source and enterprise frameworks.</p>
                        </div>
                        <div className="md:w-2/3 flex flex-wrap gap-4">
                            {['Java/Spring', '.NET Core', 'PostgreSQL', 'Red Hat', 'AWS GovCloud', 'Azure Government'].map((item, idx) => (
                                <span key={idx} className="px-6 py-3 bg-white/10 rounded-sm font-medium hover:bg-white hover:text-slate-900 transition-colors cursor-default">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-100 text-center">
                <div className="container">
                    <div className="bg-white p-12 shadow-2xl max-w-4xl mx-auto border-t-8 border-slate-800">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8" data-aos="fade-up">
                            Ready to modernize public service?
                        </h2>
                        <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Let's build a government that moves at the speed of its citizens.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-slate-800 text-white px-12 py-5 rounded-sm font-bold hover:bg-blue-800 transition-all uppercase tracking-widest text-sm" data-aos="fade-up" data-aos-delay="200">
                            Enable Smart Governance
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
