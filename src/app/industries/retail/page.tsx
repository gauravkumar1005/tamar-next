"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RetailIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 selection:bg-rose-100 selection:text-rose-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-rose-50 to-orange-50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-rose-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-rose-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Digital Solutions for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">Modern Retail</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Powering e-commerce, inventory, and omnichannel retail experiences. We help you connect with customers seamlessly across digital and physical touchpoints.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-rose-200">
                                Transform Your Retail Business
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract Shopping/Bag Shapes */}
                <div className="absolute right-[-5%] top-[20%] w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-[60px] mix-blend-multiply"></div>
                <div className="absolute right-[10%] bottom-[-10%] w-[300px] h-[300px] bg-orange-200/40 rounded-full blur-[60px] mix-blend-multiply"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-rose-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Retail Shift</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Omnichannel Excellence</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    The modern shopper expects a unified experience, whether they're buying online, in-app, or in-store. Retailers face the challenge of synchronizing inventory in real-time while delivering personalized engagement at scale.
                                </p>
                                <p>
                                    Our solutions bridge the gap between clicks and bricks. We build robust e-commerce platforms and integrate them deeply with supply chain systems to ensure you never miss a sale.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-rose-100">
                                {/* Abstract Dashboard UI */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">🛍️</div>
                                            <div>
                                                <div className="font-bold text-slate-900">Online Sales</div>
                                                <div className="text-xs text-slate-500">Real-time Tracker</div>
                                            </div>
                                        </div>
                                        <div className="text-green-600 font-bold">+24.5% ↗</div>
                                    </div>
                                    <div className="h-40 bg-slate-50 rounded-lg relative overflow-hidden flex items-end justify-between px-4 pb-0 gap-2">
                                        {[40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                                            <div key={i} className="w-full bg-rose-500 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-slate-50 p-4 rounded-lg">
                                            <div className="text-xs text-slate-500 mb-1">Inventory</div>
                                            <div className="font-bold text-slate-900">98% Synced</div>
                                        </div>
                                        <div className="flex-1 bg-slate-50 p-4 rounded-lg">
                                            <div className="text-xs text-slate-500 mb-1">Conversion</div>
                                            <div className="font-bold text-slate-900">4.2% Avg</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-rose-50/50 border-y border-rose-100">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Retail Tech Ecosystem</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">End-to-end solutions for the sophisticated retailer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "E-commerce Platforms", icon: "🛒", desc: "Custom storefronts built on headless architectures for maximum speed and flexibility." },
                            { title: "Inventory Management", icon: "📦", desc: "Smart WMS systems that track stock levels across all locations in real-time." },
                            { title: "Omnichannel Solutions", icon: "🔄", desc: "Unified commerce platforms enabling Buy Online, Pick Up In-Store (BOPIS) flows." },
                            { title: "POS Integration", icon: "💳", desc: "Seamless connections between physical point-of-sale systems and digital backends." },
                            { title: "Customer Analytics", icon: "👥", desc: "Deep insights into shopper behavior to drive personalized marketing campaigns." },
                            { title: "Supply Chain & Logistics", icon: "🚚", desc: "Optimization tools for last-mile delivery and vendor management." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-rose-400 hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-3xl mb-6 text-rose-600 group-hover:scale-110 transition-transform">
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
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Powered By</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6" data-aos="fade-in">
                        {['Shopify Plus', 'Magento', 'Salesforce Commerce Cloud', 'React', 'Node.js', 'AWS'].map((item, idx) => (
                            <span key={idx} className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-rose-500 hover:text-rose-600 transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "Improved Experience", desc: "Delight customers with personalized recommendations and friction-free checkouts.", icon: "❤️" },
                            { title: "Real-Time Inventory", desc: "Eliminate stockouts and overstocking with AI-driven demand forecasting.", icon: "📊" },
                            { title: "Increased Sales", desc: "Boost conversion rates and average order value through intelligent cross-selling.", icon: "💰" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="p-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-5xl mb-6 bg-slate-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-rose-400 shadow-inner">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Ready to grow your retail empire?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Join the retailers who are redefining the shopping experience.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-rose-600 text-white px-12 py-5 rounded-full font-bold hover:bg-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Transform Your Retail Business
                    </Link>
                </div>
            </section>
        </main>
    );
}
