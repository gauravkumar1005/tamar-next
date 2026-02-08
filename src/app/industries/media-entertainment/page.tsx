"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MediaEntertainmentPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 selection:bg-purple-100 selection:text-purple-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                {/* Dynamic Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient-xy opacity-70"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <div className="container relative z-10 text-center md:text-left">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-purple-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-purple-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[72px] font-black leading-tight mb-6 mt-4 tracking-tight text-slate-900">
                            Digital Solutions for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 animate-text-shimmer bg-[size:200%_auto]">
                                Media & Entertainment
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Create. Stream. Engage. We build the digital stages where the world's stories are told and consumed.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button className="relative px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden group shadow-lg shadow-purple-200">
                                <span className="relative z-10">Power Your Platform</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating shapes background */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full blur-[60px] animate-blob mix-blend-multiply opacity-70"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-200 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply opacity-70"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-200 rounded-full blur-[60px] animate-blob animation-delay-4000 mix-blend-multiply opacity-70"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32 bg-white relative z-10">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Content Age</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Capturing Attention in a Crowded World</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Today's audiences demand high-quality content, instantly available on any device. For media companies, the challenge isn't just creating great content—it's delivering it seamlessly and monetizing it effectively.
                                </p>
                                <p>
                                    We empower creators and broadcasters with robust technological infrastructure. From blazing-fast streaming protocols to AI-driven recommendation engines, we keep your audience glued to the screen.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in">
                            {/* Mockup / Abstract Vis */}
                            <div className="relative bg-gradient-to-tr from-purple-100 to-pink-100 p-1 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-purple-900/10">
                                <div className="bg-white rounded-xl overflow-hidden aspect-video relative group border border-slate-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                                        </div>
                                    </div>

                                    {/* Fake UI Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/50 to-transparent">
                                        <div className="h-2 bg-white/50 rounded-full mb-4 overflow-hidden">
                                            <div className="h-full bg-pink-500 w-[65%]"></div>
                                        </div>
                                        <h4 className="text-white font-bold text-lg">Live: Global Premiere</h4>
                                        <p className="text-white/80 text-sm">4.2M Viewers • 4K HDR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Production to Distibution</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">End-to-end digital tools for the modern media landscape.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "CMS Solutions", icon: "📑", desc: "Headless CMS architectures for rapid multi-channel publishing." },
                            { title: "OTT Platforms", icon: "📺", desc: "Custom streaming apps for Web, Mobile, TVOS, and Roku." },
                            { title: "Digital Media Apps", icon: "📱", desc: "Interactive mobile experiences that deepen fan engagement." },
                            { title: "Audience Analytics", icon: "📊", desc: "Real-time dashboards tracking churn, retention, and engagement." },
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100 transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">{solution.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
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
                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Tech Behind the Magic</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12" data-aos="fade-in">
                        {['React', 'Node.js', 'AWS MediaLive', 'HLS/DASH', 'TensorFlow', 'WebGL'].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-full text-slate-600 font-mono text-sm hover:border-pink-500 hover:text-pink-600 transition-colors shadow-sm">
                                &lt;{item} /&gt;
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-purple-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Scalable Platforms", desc: "Handle millions of concurrent users without breaking a sweat during peak events.", icon: "📈", color: "from-blue-500 to-cyan-500" },
                            { title: "Fan Engagement", desc: "Turn passive viewers into active community members with interactive features.", icon: "❤️", color: "from-pink-500 to-rose-500" },
                            { title: "Smart Monetization", desc: "Unlock revenue with dynamic ad insertion and flexible subscription models.", icon: "💰", color: "from-green-500 to-emerald-500" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="relative p-1 rounded-2xl bg-gradient-to-br from-white to-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300 group shadow-md hover:shadow-xl" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="bg-white h-full p-8 rounded-2xl relative z-10 flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="container relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter" data-aos="zoom-in">
                        THE SHOW MUST GO ON.
                    </h2>
                    <p className="text-pink-100 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Launch your next big digital media project with technology that steals the spotlight.
                    </p>
                    <Link href="/contact-us" className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm uppercase tracking-widest" data-aos="fade-up" data-aos-delay="200">
                        Power Your Digital Media Platform
                    </Link>
                </div>
            </section>

            <style jsx>{`
         @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
         }
         .animate-blob {
            animation: blob 7s infinite opacity-70;
         }
         @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
         }
         .animate-text-shimmer {
            animation: text-shimmer 3s linear infinite;
         }
      `}</style>
        </main>
    );
}
