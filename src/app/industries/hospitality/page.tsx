"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HospitalityIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-[#FAF9F6] text-slate-800 font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
                {/* Soft, warm background image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

                <div className="container relative z-10 text-white">
                    <div className="max-w-4xl" data-aos="fade-up">
                        <Link href="/industries" className="text-amber-200 font-medium mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-white transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-serif font-medium leading-tight mb-6 mt-4">
                            Digital Solutions for <br />
                            <span className="italic text-amber-200">The Hospitality Industry</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light">
                            Enhancing guest experiences through technology. We create seamless digital journeys that turn first-time visitors into loyal lifelong guests.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-amber-500 text-white px-10 py-4 rounded-full font-medium hover:bg-amber-600 transition-all text-sm shadow-lg hover:shadow-amber-500/30">
                                Upgrade Your Experience
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">The Guest Journey</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">Redefining Service</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                <p>
                                    In an era of instant gratification, the hospitality industry faces the challenge of personalized service at scale. From seamless booking to contactless check-in, guests demand friction-free experiences.
                                </p>
                                <p>
                                    We help hotels, resorts, and travel companies meet these expectations. Our integrated solutions streamline operations while gathering data to anticipate guest needs before they happen.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" alt="Hotel Lobby" className="rounded-2xl shadow-md w-full h-64 object-cover translate-y-8" />
                                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop" alt="Poolside" className="rounded-2xl shadow-md w-full h-64 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Five-Star Solutions</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light">Comprehensive tools for managing properties and delighting guests.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Hotel Management Systems", icon: "🏨", desc: "Centralized property management (PMS) for front desk, housekeeping, and billing." },
                            { title: "Online Booking Platforms", icon: "📅", desc: "Direct booking engines that reduce OTA commissions and maximize revenue." },
                            { title: "Customer Experience", icon: "✨", desc: "Personalized guest apps for room service, spa booking, and local recommendations." },
                            { title: "CRM & Loyalty Systems", icon: "❤️", desc: "Data-driven loyalty programs that reward repeat visits and personalized marketing." },
                            { title: "Analytics & Reporting", icon: "📊", desc: "Deep insights into occupancy rates, RevPAR, and guest preferences." },
                            { title: "Contactless Solutions", icon: "📱", desc: "Mobile check-in/out and digital key integration for modern safety protocols." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-[#FAF9F6] p-8 rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform text-amber-500">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-serif text-slate-900 mb-3">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-stone-100">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-serif text-slate-800">Powered by Reliable Tech</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Cloud Computing', 'Mobile Apps', 'CRM Systems', 'AI Chatbots', 'Secure Payments'].map((item, idx) => (
                            <span key={idx} className="text-xl font-medium text-slate-800">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-[#FAF9F6]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Improved Satisfaction", desc: "Delight guests with seamless, personalized interactions at every touchpoint.", icon: "😊" },
                            { title: "Operational Efficiency", desc: "Automate routine tasks so your staff can focus on what matters—the guest.", icon: "⚡" },
                            { title: "Increased Revenue", desc: "Maximize room rates and upsell opportunities with intelligent data analytics.", icon: "📈" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center px-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-5xl mb-6 mx-auto">{benefit.icon}</div>
                                <h3 className="text-xl font-serif text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6" data-aos="fade-up">
                        Ready to welcome the future?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="100">
                        Let's build a digital experience as warm and inviting as your hospitality.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-medium hover:bg-amber-500 transition-all text-sm shadow-xl" data-aos="fade-up" data-aos-delay="200">
                        Upgrade Your Hospitality Experience
                    </Link>
                </div>
            </section>
        </main>
    );
}
