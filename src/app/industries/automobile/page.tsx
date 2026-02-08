"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutomobileIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 selection:bg-red-100 selection:text-red-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>

                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-red-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-red-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Smart & Connected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Automotive Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Accelerating the future of mobility. We provide cutting-edge software solutions for connected vehicles, fleet management, and autonomous driving technologies.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-red-600 text-white px-8 py-4 skew-x-[-10deg] font-bold hover:bg-red-700 transition-all uppercase tracking-wider text-sm shadow-lg shadow-red-200">
                                <span className="skew-x-[10deg] inline-block">Drive Innovation</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Speed lines animation background - adapted for light mode */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[-10%] w-[120%] h-[2px] bg-red-600/10 blur-sm animate-[slideRight_3s_linear_infinite]"></div>
                    <div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-slate-900/5 blur-sm animate-[slideRight_5s_linear_infinite]"></div>
                    <div className="absolute top-[60%] left-[-10%] w-[120%] h-[4px] bg-red-600/5 blur-md animate-[slideRight_2s_linear_infinite]"></div>
                </div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Mobility Revolution</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Software Defined Vehicles</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    The automotive industry is shifting into high gear, transforming from hardware-focused manufacturing to software-defined mobility. Connectivity, electrification, and autonomy are the new engines of growth.
                                </p>
                                <p>
                                    We empower OEMs and Tier 1 suppliers to navigate this transition. Our solutions seamlessly integrate complex onboard systems with cloud infrastructure, unlocking new revenue streams and superior driver experiences.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative">
                                {/* HUD Interface Effect - Light Mode */}
                                <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg relative overflow-hidden shadow-xl">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <div className="text-xs text-slate-500 uppercase">Engine Status</div>
                                            <div className="text-2xl font-mono text-green-600">OPTIMAL</div>
                                            <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 w-[95%] animate-pulse"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-xs text-slate-500 uppercase">Battery Level</div>
                                            <div className="text-2xl font-mono text-blue-600">87%</div>
                                            <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[87%]"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-xs text-slate-500 uppercase">Network</div>
                                            <div className="text-2xl font-mono text-slate-800">5G LTE</div>
                                            <div className="flex gap-1">
                                                <div className="w-1 h-3 bg-red-500"></div>
                                                <div className="w-1 h-3 bg-red-500"></div>
                                                <div className="w-1 h-3 bg-yellow-500"></div>
                                                <div className="w-1 h-3 bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-xs text-slate-500 uppercase">Fleet Health</div>
                                            <div className="text-2xl font-mono text-red-600">SECURE</div>
                                            <div className="text-[10px] text-slate-400">Last scan: 2s ago</div>
                                        </div>
                                    </div>

                                    {/* Decorative HUD Elements */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Automotive Technology Stack</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">High-performance software for the next generation of vehicles.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Connected Vehicle Systems", icon: "🌐", desc: "V2X communication protocols enabling vehicles to talk to each other and infrastructure." },
                            { title: "Fleet Management", icon: "🚛", desc: "Real-time GPS tracking, fuel monitoring, and driver behavior analysis dashboards." },
                            { title: "Auto Software Dev", icon: "💻", desc: "Embedded software development for infotainment, ECU, and ADAS systems." },
                            { title: "Predictive Maintenance", icon: "🔧", desc: "AI algorithms that predict component failures before they cause breakdowns." },
                            { title: "IoT Integration", icon: "📡", desc: "Seamless sensor integration for aggregating vehicle telemetry data in the cloud." },
                            { title: "Autonomous Tech", icon: "🤖", desc: "Sensor fusion and path planning algorithms for self-driving capabilities." }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all group relative overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

                                <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center text-3xl mb-6 text-red-600">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 italic">{solution.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Banner */}
            <section className="py-16 bg-red-600 text-white overflow-hidden">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-2xl font-bold uppercase tracking-widest min-w-max">Powering Innovation With</div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-8 font-mono text-lg opacity-80">
                            <span>IoT</span>
                            <span>•</span>
                            <span>AI/ML</span>
                            <span>•</span>
                            <span>Embedded C++</span>
                            <span>•</span>
                            <span>Cloud Computing</span>
                            <span>•</span>
                            <span>LiDAR</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
                        {[
                            { title: "Enhanced Performance", desc: "Optimize engine and battery efficiency through over-the-air (OTA) updates.", icon: "🚀" },
                            { title: "Real-Time Insights", desc: "Make data-driven decisions with millisecond-latency telemetry streams.", icon: "⚡" },
                            { title: "Improved Safety", desc: "Reduce accident rates with advanced driver-assistance systems (ADAS).", icon: "🛡️" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="relative p-8 group" data-aos="zoom-in" data-aos-delay={idx * 100}>
                                {/* Hexagon shape bg */}
                                <div className="absolute inset-0 border border-slate-100 bg-slate-50/50 clip-path-hexagon transition-colors group-hover:bg-slate-100 group-hover:border-red-200"></div>

                                <div className="relative z-10">
                                    <div className="text-5xl mb-6 text-red-600 drop-shadow-sm">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden text-center bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>

                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic" data-aos="fade-up">
                        Ready to shift gears?
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Partner with us to build the connected, autonomous, and electric future of transportation.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-black px-12 py-5 skew-x-[-10deg] font-bold hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest text-sm" data-aos="fade-up" data-aos-delay="200">
                        <span className="skew-x-[10deg] inline-block">Drive Innovation in Automotive</span>
                    </Link>
                </div>
            </section>

            <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
        </main>
    );
}
