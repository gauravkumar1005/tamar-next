"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestingQAPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-green-600 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-green-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Software Testing & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Quality Assurance Services</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Delivering reliable, secure, and high-performance software. We ensure your applications are bug-free and ready for the world.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all uppercase tracking-wider text-sm shadow-xl shadow-green-200">
                                Ensure Software Quality Today
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Checkmark Background */}
                <div className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[80px]"></div>
                <div className="absolute right-[10%] bottom-[-10%] w-[300px] h-[300px] bg-emerald-300/30 rounded-full blur-[80px]"></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Quality First</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Perfection in Every Pixel</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    In today's competitive digital landscape, a single bug can cost you customers and reputation. Our rigorous testing methodologies ensure that your software not only meets requirements but exceeds user expectations.
                                </p>
                                <p>
                                    We adopt a holistic approach to quality assurance, integrating testing into every stage of the development lifecycle to catch issues early and deliver flawless digital experiences.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Bug-Free", icon: "🐞", color: "bg-red-50 text-red-500" },
                                    { label: "High Speed", icon: "⚡", color: "bg-yellow-50 text-yellow-500" },
                                    { label: "Secure", icon: "🔒", color: "bg-blue-50 text-blue-500" },
                                    { label: "Reliable", icon: "✅", color: "bg-green-50 text-green-500" },
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.color} p-8 rounded-2xl flex flex-col items-center justify-center aspect-square shadow-sm`}>
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <span className="font-bold text-lg">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Full-Spectrum Testing</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">From manual validation to automated suites, we cover every angle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Manual Testing", icon: "🖐️", desc: "Human-centric testing to ensure intuitive user flows and visual perfection across all devices." },
                            { title: "Automation Testing", icon: "🤖", desc: "Scalable automated scripts for regression testing, speeding up release cycles without compromising quality." },
                            { title: "Functional Testing", icon: "⚙️", desc: "Verifying that every feature behaves exactly as specified in the business requirements." },
                            { title: "Performance Testing", icon: "🚀", desc: "Stress-testing your application under high loads to ensure stability and responsiveness." },
                            { title: "Security Testing", icon: "🛡️", desc: "Identifying vulnerabilities and potential breaches to safeguard sensitive user data." },
                            { title: "Usability Testing", icon: "👥", desc: "Evaluating the user experience to ensure your software is easy to learn and efficient to use." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-green-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Testing Lifecycle</h2>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                { step: "01", title: " Requirement Analysis", icon: "📝" },
                                { step: "02", title: "Test Planning", icon: "📋" },
                                { step: "03", title: "Test Execution", icon: "▶️" },
                                { step: "04", title: "Bug Reporting", icon: "🐛" },
                                { step: "05", title: "Quality Validation", icon: "🏆" }
                            ].map((phase, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center flex flex-col items-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-green-200">
                                        {phase.step}
                                    </div>
                                    <div className="text-4xl mb-4">{phase.icon}</div>
                                    <h4 className="font-bold text-slate-900">{phase.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-widest">Tools We Master</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 items-center" data-aos="zoom-in">
                        {[
                            { name: "Selenium", bg: "bg-green-100 text-green-700" },
                            { name: "JUnit", bg: "bg-red-100 text-red-700" },
                            { name: "Cypress", bg: "bg-slate-200 text-slate-700" },
                            { name: "Postman", bg: "bg-orange-100 text-orange-700" },
                            { name: "JMeter", bg: "bg-purple-100 text-purple-700" },
                            { name: "Appium", bg: "bg-blue-100 text-blue-700" }
                        ].map((tool, idx) => (
                            <span key={idx} className={`px-8 py-3 rounded-full font-bold shadow-sm ${tool.bg}`}>
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 text-center">
                <div className="container">
                    <div className="bg-slate-900 text-white rounded-[30px] p-12 md:p-20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose Our QA Team?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                                {[
                                    { title: "Industry Best Practices", desc: "We adhere to rigorous international testing standards to ensure top-tier quality." },
                                    { title: "Experienced QA Engineers", desc: "Our certified testers bring years of experience across diverse domains and technologies." },
                                    { title: "Faster Release Cycles", desc: "Efficient automated testing pipelines allow you to deploy features faster with confidence." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/5">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">✓</div>
                                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                        <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Background Glows */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/50 to-emerald-900/50 -z-0"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Ready for error-free software?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Partner with us to guarantee the quality and performance of your next release.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-green-600 text-white px-12 py-5 rounded-full font-bold hover:bg-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Ensure Software Quality Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
