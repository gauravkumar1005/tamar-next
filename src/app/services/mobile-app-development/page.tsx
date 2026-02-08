"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MobileDevelopmentPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#F5F7FA] to-[#B8C6DB]/30">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-blue-600 font-medium mb-6 inline-flex items-center gap-2 group">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold text-black leading-tight mb-6 mt-4">
                            Mobile App Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">for iOS & Android</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                            Building user-friendly, high-performance mobile applications that deliver seamless experiences across all devices and platforms.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-10 py-5 rounded-md font-bold hover:bg-blue-700 transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-200">
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract background shapes */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-0"></div>
                <div className="absolute bottom-[-5%] left-[10%] w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-[100px] -z-0"></div>
            </section>

            {/* Description Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Innovation on the Go</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Performance Meets Portability</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    In an increasingly mobile-first world, your application needs to be more than just functional—it needs to be exceptional. We create mobile solutions that prioritize speed, security, and intuitive user experiences.
                                </p>
                                <p>
                                    Whether you're looking to build a native iOS app, a robust Android solution, or a versatile cross-platform application, our team leverages the latest technologies to ensure your vision is perfectly translated to the small screen.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="bg-blue-600 p-12 rounded-[40px] relative z-10 shadow-2xl">
                                <img src="/images/capabilities-img.png" alt="Mobile Experience" className="w-full h-auto rounded-2xl grayscale brightness-110 mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-6xl mb-4">📱</div>
                                        <h4 className="text-2xl font-bold">Mobile First</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full -z-0 blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Types Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Device-Specific Solutions</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We specialize in developing for all major ecosystems and frameworks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Android App Development", icon: "🤖", desc: "Crafting powerful applications for the world's most popular mobile OS, ensuring compatibility across thousands of devices." },
                            { title: "iOS App Development", icon: "🍎", desc: "Premium, high-performance applications designed specifically for the Apple ecosystem with a focus on elegance and fluidity." },
                            { title: "Cross-Platform Apps", icon: "⚡", desc: "Building unified experiences using Flutter or React Native to reach both platforms with a single, efficient codebase." }
                        ].map((type, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">{type.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Roadmap to Launch</h2>
                        <p className="text-gray-500">A transparent and collaborative process from concept to App Store.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Horizontal line for desktop */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 hidden md:block z-0"></div>

                        {[
                            { step: "Idea", icon: "💡", desc: "Defining goals and strategy." },
                            { step: "UI/UX", icon: "🎨", desc: "Designing visual brilliance." },
                            { step: "Development", icon: "👨‍💻", desc: "Writing robust native code." },
                            { step: "Testing", icon: "🧪", desc: "Ensuring bug-free performance." },
                            { step: "Deployment", icon: "🚀", desc: "Launching to App Stores." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center group hover:border-blue-500 transition-all" data-aos="zoom-in" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-black mb-2">{item.step}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-black text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { title: "Secure", icon: "🛡️", desc: "Banking-grade encryption and data protection." },
                            { title: "Scalable", icon: "📊", desc: "Built to handle millions of active users." },
                            { title: "Fast Performance", icon: "⚡", desc: "Optimized for speed and minimal load times." },
                            { title: "Modern UI", icon: "✨", desc: "Clean, intuitive, and award-worthy designs." }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 relative overflow-hidden">
                <div className="container relative z-10 text-center text-white">
                    <h2 className="text-[32px] md:text-[56px] font-bold mb-8 leading-tight" data-aos="fade-up">
                        Let's Build Your <br /> Mobile App Today
                    </h2>
                    <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Transform your business with a world-class mobile presence. Our experts are ready to turn your idea into reality.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-md font-bold hover:bg-gray-100 transition-all uppercase tracking-widest text-sm shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Get Started Now
                    </Link>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            </section>
        </main>
    );
}
