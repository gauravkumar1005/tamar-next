"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ManagedITServicesPage() {
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
                        <Link href="/capabilities" className="text-emerald-400 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            Managed IT Services for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Reliable & Secure Operations</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                            End-to-end IT management to keep your systems running smoothly. We handle the technology so you can focus on growing your business.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-emerald-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-emerald-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-emerald-900/50">
                                Get Managed IT Support Today
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract geometric background */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-slate-800 -skew-y-6 opacity-30 origin-bottom-right"></div>
                <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/5 rounded-full"></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Proactive Management</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Zero Downtime, Maximum Efficiency</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Reactive IT support is a thing of the past. Our Managed IT Services are built on a foundation of proactive monitoring and maintenance, identifying and resolving issues before they impact your operations.
                                </p>
                                <p>
                                    From routine software updates to complex infrastructure management, we act as your dedicated IT department, ensuring your technology stack is always optimized, secure, and aligned with your business goals.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-left">
                            <div className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-emerald-100">
                                <div className="text-4xl mb-4">⏱️</div>
                                <h4 className="font-bold text-slate-900">24/7 Monitoring</h4>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-emerald-100">
                                <div className="text-4xl mb-4">🚀</div>
                                <h4 className="font-bold text-slate-900">99.9% Uptime</h4>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-emerald-100">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h4 className="font-bold text-slate-900">Advanced Security</h4>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-emerald-100">
                                <div className="text-4xl mb-4">💰</div>
                                <h4 className="font-bold text-slate-900">Predictable Costs</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive IT Solutions</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">A full suite of services designed to support every aspect of your infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "24/7 IT Support & Helpdesk", icon: "🎧", desc: "Round-the-clock technical support for your team, resolving hardware and software issues swiftly." },
                            { title: "Network & Server Management", icon: "🖥️", desc: "Configuration, monitoring, and maintenance of your physical and virtual servers to ensure peak performance." },
                            { title: "Cloud Infrastructure", icon: "☁️", desc: "Expert management of AWS, Azure, or Google Cloud environments, optimizing for cost and scalability." },
                            { title: "Data Backup & Recovery", icon: "💾", desc: "Automated, redundant backup solutions with rapid disaster recovery protocols to protect your critical data." },
                            { title: "System Maintenance", icon: "🛠️", desc: "Regular patching, updates, and health checks to prevent vulnerabilities and system degradation." },
                            { title: "Strategic Planning", icon: "📈", desc: "Annual technology roadmapping to ensure your IT infrastructure evolves with your business." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:border-emerald-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase tracking-widest">Powered By Best-in-Class Tech</h2>
                        <p className="text-slate-500">We leverage industry-leading platforms to manage your IT environment.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale hover:grayscale-0 transition-all duration-500" data-aos="fade-in">
                        {['AWS', 'Microsoft Azure', 'Linux', 'Windows Server', 'Cisco', 'Datadog'].map((tech, idx) => (
                            <span key={idx} className="text-2xl md:text-3xl font-bold text-slate-400 hover:text-emerald-600 cursor-default transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Managed Services?</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We don't just fix broken computers; we prevent them from breaking in the first place. Our team of certified engineers offers a partnership model that scales with you.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {["Experienced Team", "Proactive Approach", "Scalable Models", "Rapid Response Time"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                        <span className="font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold">IT</div>
                                    <div>
                                        <div className="font-bold">System Status</div>
                                        <div className="text-xs text-emerald-400">All Systems Operational</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {['Network Throughput', 'Server Load', 'Storage Capacity'].map((metric, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>{metric}</span>
                                                <span className="text-emerald-400">{85 + i * 4}%</span>
                                            </div>
                                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${85 + i * 4}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Stop Worrying About IT
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Let us handle the technology so you can focus on your business goals.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-sm font-bold hover:bg-slate-900 transition-all uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Get Managed IT Support Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
