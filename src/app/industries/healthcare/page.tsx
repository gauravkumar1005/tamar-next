"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HealthcareIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-teal-600 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-teal-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Healthcare IT Solutions <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">for Modern Care</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Secure and compliant digital healthcare platforms. We empower providers with technology that enhances patient outcomes and streamlines operations.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-all uppercase tracking-wider text-sm shadow-xl shadow-teal-200">
                                Digitize Healthcare Services
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Medical Background */}
                <div className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[80px]"></div>
                <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[80px]"></div>
                <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Challenge</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Data-Driven Patient Care</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    The healthcare industry is at a pivotal crossroads. Providers must manage explosive growth in patient data, ensure strict regulatory compliance, and deliver seamless digital experiences—all while prioritizing patient care.
                                </p>
                                <p>
                                    Our solutions bridge the gap between complex medical data and actionable insights. We build interoperable systems that securely connect patients, providers, and payers.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl">❤️</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Patient Centricity</h4>
                                        <p className="text-sm text-slate-500">Improving lives through tech</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 w-[85%]"></div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-slate-600">Telemedicine Adoption</span>
                                        <span className="font-bold text-teal-600">85%</span>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">99.9%</div>
                                        <div className="text-xs text-slate-400 uppercase">Uptime</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">ISO</div>
                                        <div className="text-xs text-slate-400 uppercase">Certified</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                                        <div className="text-xs text-slate-400 uppercase">Support</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-teal-100 rounded-2xl -z-10 rotate-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Digital Health Ecosystem</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive IT solutions tailored for hospitals, clinics, and labs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "EMR / EHR Systems", icon: "📋", desc: "Custom Electronic Medical Record systems ensuring seamless data flow and accessibility across departments." },
                            { title: "Telemedicine Platforms", icon: "📱", desc: "Secure video conferencing and remote patient monitoring apps to extend care beyond hospital walls." },
                            { title: "Patient Management", icon: "🏥", desc: "Integrated portals for appointment scheduling, billing, and patient communication." },
                            { title: "Healthcare Analytics", icon: "📈", desc: "Predictive analytics tools to optimize hospital resource allocation and improve treatment outcomes." },
                            { title: "Secure Data Management", icon: "💾", desc: "Cloud-based storage solutions with robust encryption for sensitive medical records." },
                            { title: "IoMT Integration", icon: "⌚", desc: "Connecting medical devices and wearables to central monitoring systems for real-time vitals tracking." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-teal-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="bg-slate-900 text-white rounded-[30px] p-12 md:p-20 relative overflow-hidden">
                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Uncompromising Compliance</h2>
                            <p className="text-slate-400 mb-12 text-lg">
                                We build software that strictly adheres to global healthcare regulations, ensuring your organization remains compliant and your patients' data remains private.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                {['HIPAA Compliant', 'GDPR Ready', 'HL7 Standards', 'FDA Regulations', 'SOC2 Certified'].map((item, idx) => (
                                    <span key={idx} className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm font-medium hover:bg-white/20 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[100px] -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-0"></div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-widest">Powered By Innovation</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 items-center" data-aos="zoom-in">
                        {[
                            { name: "Python", bg: "bg-blue-50 text-blue-700" },
                            { name: "Java", bg: "bg-orange-50 text-orange-700" },
                            { name: "React Native", bg: "bg-cyan-50 text-cyan-700" },
                            { name: "TensorFlow", bg: "bg-yellow-50 text-yellow-700" },
                            { name: "AWS HealthLake", bg: "bg-slate-100 text-slate-700" },
                            { name: "Azure IoT", bg: "bg-blue-100 text-blue-800" }
                        ].map((tool, idx) => (
                            <span key={idx} className={`px-8 py-3 rounded-full font-bold shadow-sm ${tool.bg}`}>
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-teal-50 text-center">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Improved Patient Care", desc: "Empower doctors with real-time data to make faster, more accurate diagnoses.", icon: "🩺" },
                            { title: "Operational Efficiency", desc: "Automate administrative tasks to reduce burnout and lower operational costs.", icon: "⚙️" },
                            { title: "Secure Data Handling", desc: "Protect sensitive health information with military-grade encryption protocols.", icon: "🔒" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto text-teal-600">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Ready to modernize your practice?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Join leading healthcare providers in the digital revolution.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-teal-600 text-white px-12 py-5 rounded-full font-bold hover:bg-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Digitize Healthcare Services
                    </Link>
                </div>
            </section>
        </main>
    );
}
