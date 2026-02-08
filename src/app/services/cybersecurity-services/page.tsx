"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CybersecurityPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-cyan-400 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            Cybersecurity & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Data Protection Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                            Safeguarding your digital assets in an increasingly hostile landscape. We provide comprehensive security strategies to detect threats, prevent breaches, and ensure business continuity.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-sm font-bold hover:bg-cyan-400 transition-all uppercase tracking-wider text-sm shadow-lg shadow-cyan-900/50">
                                Secure Your Business Now
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Shield/Network Background */}
                <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Threat Landscape</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Vigilance is Your Best Defense</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Cyber attacks are no longer a matter of "if", but "when". From ransomware to sophisticated phishing campaigns, the threats facing modern enterprises are evolving daily.
                                </p>
                                <p>
                                    We don't just patch holes; we build fortresses. Our proactive approach combines advanced threat intelligence with robust infrastructure hardening to protect your data, your reputation, and your bottom line.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Monitoring</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-slate-900">Zero</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Trust Model</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100">
                                <div className="bg-slate-900 rounded-xl p-8 text-white min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="text-6xl mb-6 text-cyan-400">🛡️</div>
                                    <h4 className="text-2xl font-bold mb-2">Systems Secure</h4>
                                    <p className="text-slate-400 text-sm">Real-time threat detection active.</p>

                                    {/* Animated scanning line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_15px_#22d3ee] animate-scan"></div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Protection</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">End-to-end security services designed to cover every attack vector.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Network Security", icon: "🌐", desc: "Next-gen firewalls, intrusion detection systems, and secure perimeter architectures to block unauthorized access." },
                            { title: "Data Protection", icon: "💾", desc: "Enterprise-grade encryption, data loss prevention (DLP) strategies, and secure backup solutions." },
                            { title: "Vulnerability Assessment", icon: "🔍", desc: "Regular penetration testing and automated scanning to identify and remediate weaknesses before hackers exploit them." },
                            { title: "Security Audits & Compliance", icon: "📋", desc: "Ensuring your organization meets regulatory standards like GDPR, HIPAA, and ISO 27001." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Secure Systems", desc: "Maintain 99.99% uptime with infrastructure that resists DDoS and other disruptive attacks.", icon: "🔒" },
                            { title: "Risk Reduction", desc: "Minimize the financial and reputational damage of data breaches through proactive defense.", icon: "📉" },
                            { title: "Regulatory Compliance", desc: "Avoid costly fines and legal issues by adhering to the strictest industry standards.", icon: "⚖️" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="inline-block p-6 bg-slate-900 rounded-2xl text-4xl mb-6 shadow-xl text-cyan-400">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed px-4">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden text-center text-white">
                <div className="container relative z-10">
                    <h2 className="text-[32px] md:text-[56px] font-bold mb-8 leading-tight" data-aos="fade-up">
                        Don't Leave Your Security to Chance
                    </h2>
                    <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Transform your security posture today with a free risk assessment consultation.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-cyan-500 text-slate-900 px-12 py-5 rounded-sm font-bold hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-cyan-500/50" data-aos="fade-up" data-aos-delay="200">
                        Secure Your Business Now
                    </Link>
                </div>
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>

            <style jsx>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
        </main>
    );
}
