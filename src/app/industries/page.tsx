"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Industries() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    const industries = [
        { title: "Finance", desc: "Secure and compliant financial technology solutions for banking, insurance, and fintech companies.", icon: "💰", slug: "finance", color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Healthcare", desc: "HIPAA-compliant healthcare IT solutions including EMR, telemedicine, and patient management systems.", icon: "🏥", slug: "healthcare", color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Infrastructure", desc: "Project management and resource optimization solutions for construction and infrastructure projects.", icon: "🏗️", slug: "infrastructure", color: "text-orange-600", bg: "bg-orange-50" },
        { title: "Automobile", desc: "Connected vehicle solutions, fleet management, and automotive software development.", icon: "🚗", slug: "automobile", color: "text-red-600", bg: "bg-red-50" },
        { title: "Hospitality", desc: "Hotel management systems, booking platforms, and customer experience solutions.", icon: "🏨", slug: "hospitality", color: "text-indigo-600", bg: "bg-indigo-50" },
        { title: "Media & Entertainment", desc: "Content management, streaming platforms, and digital media solutions.", icon: "🎬", slug: "media-entertainment", color: "text-purple-600", bg: "bg-purple-50" },
        { title: "Retail", desc: "E-commerce platforms, inventory management, and omnichannel retail solutions.", icon: "🛒", slug: "retail", color: "text-pink-600", bg: "bg-pink-50" },
        { title: "Telecommunication", desc: "Network management, billing systems, and customer service platforms.", icon: "📡", slug: "telecommunication", color: "text-cyan-600", bg: "bg-cyan-50" },
        { title: "Education", desc: "Learning management systems, e-learning platforms, and educational technology solutions.", icon: "🎓", slug: "education", color: "text-yellow-600", bg: "bg-yellow-50" },
        { title: "Government", desc: "Citizen services, e-governance solutions, and public sector digital transformation.", icon: "🏛️", slug: "government", color: "text-slate-600", bg: "bg-slate-50" },
        { title: "Manufacturing", desc: "Industry 4.0 solutions, supply chain management, and production optimization.", icon: "🏭", slug: "manufacturing", color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Energy & Utilities", desc: "Smart grid solutions, energy management systems, and utility billing platforms.", icon: "⚡", slug: "energy-utilities", color: "text-lime-600", bg: "bg-lime-50" },
    ];

    const stats = [
        { label: "Countries Served", value: "10+", color: "from-blue-600 to-cyan-500" },
        { label: "Industries Transformed", value: "12+", color: "from-purple-600 to-pink-500" },
        { label: "Projects Delivered", value: "50+", color: "from-orange-500 to-red-500" },
        { label: "Client Satisfaction", value: "98%", color: "from-green-500 to-emerald-400" },
    ];

    return (
        <main className="bg-white min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-50 border-b border-slate-100">
                {/* Background Patterns */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[80px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-3/5 text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm" data-aos="fade-down">
                                Our Expertise
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" data-aos="fade-up">
                                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transform</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Delivering specialized, scalable, and secure technology solutions across diverse sectors to drive digital innovation and business growth.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Link href="#industries" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 hover:-translate-y-1">
                                    Explore Industries
                                </Link>
                                <Link href="/contact-us" className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-2/5 relative" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-4 border-2 border-dashed border-slate-300 rounded-full animate-spin-slow opacity-30"></div>
                                <div className="absolute inset-0 bg-white rounded-full shadow-2xl p-6 flex flex-wrap items-center justify-center gap-4 animate-float-slow">
                                    {industries.slice(0, 9).map((item, idx) => (
                                        <div key={idx} className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl ${item.bg} flex items-center justify-center text-2xl md:text-4xl shadow-sm transform hover:scale-110 transition-transform duration-300 cursor-default`} title={item.title}>
                                            {item.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section id="industries" className="py-20 md:py-32 bg-white">
                <div className="container">
                    <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Tailored for Your Sector</h2>
                        <p className="text-slate-600 text-lg">We understand unique industry challenges and custom-build strategies to solve them effectively.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item, index) => (
                            <Link
                                href={`/industries/${item.slug}`}
                                key={index}
                                className="group block h-full bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.bg.replace('bg-', 'from-').replace('50', '50')} to-white rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-500`}></div>

                                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center text-3xl mb-6 relative z-10 group-hover:rotate-6 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <span className={`inline-flex items-center gap-2 text-sm font-bold ${item.color} uppercase tracking-wider group-hover:gap-3 transition-all`}>
                                    Learn More <span>→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section with Impact */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container">
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden" data-aos="fade-up">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Proven Impact Across Industries</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 divide-x-0 md:divide-x divide-slate-100">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group p-4">
                                    <h3 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block`}>
                                        {stat.value}
                                    </h3>
                                    <p className="text-slate-500 font-semibold uppercase tracking-wide text-sm md:text-base">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#0B0F19] to-[#1a233a] relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto" data-aos="fade-up">
                        Ready to Transform Your Industry?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="100">
                        Partner with us to leverage cutting-edge technology tailored to your specific sector's needs.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="200">
                        Start Your Journey
                        <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
