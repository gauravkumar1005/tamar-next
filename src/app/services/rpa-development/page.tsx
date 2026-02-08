"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RPADevelopmentPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-cyan-400 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4">
                            RPA Development for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Smarter Automation</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                            Automate repetitive tasks, reduce human error, and accelerate business processes with intelligent robotic process automation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-sm font-bold hover:bg-white transition-all uppercase tracking-wider text-sm shadow-lg shadow-cyan-500/30">
                                Automate Your Business
                            </button>
                        </div>
                    </div>
                </div>
                {/* Tech/Circuit Background */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute right-[-10%] bottom-[-20%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px]"></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Power of Automation</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Work Smarter, Not Harder</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    In the modern enterprise, time is your most valuable asset. RPA (Robotic Process Automation) frees your workforce from mundane, repetitive tasks, allowing them to focus on high-value strategic initiatives.
                                </p>
                                <p>
                                    Our distinct approach streamlines operations by deploying software bots that mimic human actions—navigating systems, extracting data, and performing complex calculations with 100% accuracy and zero fatigue.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl border border-slate-100 shadow-xl">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">❌</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">Manual Entry</h4>
                                                <p className="text-xs text-slate-500">Slow & Error-prone</p>
                                            </div>
                                        </div>
                                        <span className="text-slate-400 font-mono">15 mins/record</span>
                                    </div>

                                    <div className="flex justify-center text-slate-400 text-2xl">⬇️ VS ⬇️</div>

                                    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm ring-2 ring-cyan-400">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-xl">🤖</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">RPA Bot</h4>
                                                <p className="text-xs text-slate-500">Instant & Accurate</p>
                                            </div>
                                        </div>
                                        <span className="text-cyan-600 font-bold font-mono">2 secs/record</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Automation Services</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">End-to-end RPA solutions tailored to your unique workflows.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Process Analysis", icon: "🔍", desc: "Identifying high-volume, repetitive processes suitable for automation to maximize ROI." },
                            { title: "Bot Development", icon: "🤖", desc: "Custom coding of intelligent bots tailored to interact with your specific legacy and modern applications." },
                            { title: "Workflow Automation", icon: "⚡", desc: "Streamlining complex multi-step workflows across departments like HR, Finance, and Operations." },
                            { title: "System Integration", icon: "🔗", desc: "Seamlessly connecting disparate software systems (ERP, CRM, Databases) through automated data exchange." },
                            { title: "RPA Maintenance", icon: "🛠️", desc: "Ongoing monitoring, updates, and optimization of bot performance to ensure continuous operation." },
                            { title: "AI-Powered RPA", icon: "🧠", desc: "Enhancing bots with cognitive capabilities like OCR and NLP to handle unstructured data." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-purple-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industries We Transform</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Banking", icon: "🏦", desc: "KYC & Fraud Detection" },
                            { name: "Healthcare", icon: "🏥", desc: "Patient Record Management" },
                            { name: "HR", icon: "👥", desc: "Onboarding & Payroll" },
                            { name: "Finance", icon: "💹", desc: "Invoice Processing" },
                            { name: "Logistics", icon: "🚚", desc: "Inventory & Tracking" }
                        ].map((industry, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:-translate-y-2 transition-transform shadow-sm hover:shadow-md" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl mb-4">{industry.icon}</div>
                                <h4 className="font-bold text-slate-900 mb-1">{industry.name}</h4>
                                <p className="text-xs text-slate-500">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase tracking-widest" data-aos="fade-up">Tech We Use</h2>

                    <div className="flex flex-wrap justify-center gap-16 items-center" data-aos="zoom-in">
                        {[
                            { name: "UiPath", color: "text-orange-500" },
                            { name: "Automation Anywhere", color: "text-yellow-500" },
                            { name: "Blue Prism", color: "text-blue-400" },
                            { name: "Power Automate", color: "text-blue-600" },
                            { name: "Python", color: "text-yellow-300" }
                        ].map((tool, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <span className={`text-3xl font-bold ${tool.color} opacity-80 hover:opacity-100 transition-opacity`}>
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Faster Operations", desc: "Complete tasks in seconds that used to take hours.", icon: "⚡" },
                            { title: "Reduced Errors", desc: "Eliminate costly human data entry mistakes completely.", icon: "🎯" },
                            { title: "Cost Savings", desc: "Significantly lower operational costs by automating manual labor.", icon: "💰" },
                            { title: "Scalability", desc: "Scale your digital workforce up or down instantly as needed.", icon: "📈" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center p-6 border border-slate-100 rounded-2xl hover:border-purple-200 transition-colors" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="inline-block p-4 bg-purple-50 rounded-full text-3xl mb-4 text-purple-600">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-purple-700 to-indigo-800 text-center relative overflow-hidden text-white">
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8" data-aos="fade-up">
                        Ready to Automate?
                    </h2>
                    <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Start your digital transformation journey today and protect your business from inefficiency.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-purple-900 px-12 py-5 rounded-full font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl" data-aos="fade-up" data-aos-delay="200">
                        Automate Your Business Processes
                    </Link>
                </div>
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>
        </main>
    );
}
