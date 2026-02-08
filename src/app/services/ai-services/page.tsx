"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AIServicesPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-black min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-br from-[#F0FDFA] to-[#E0F2FE]">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-cyan-600 font-medium mb-6 inline-flex items-center gap-2 group tracking-widest uppercase text-xs">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[44px] md:text-[72px] font-black leading-tight mb-8 mt-4 tracking-tighter text-black">
                            AI & Machine <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-gradient-x">Learning Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl font-light">
                            Transforming raw data into strategic intelligence. We build custom artificial intelligence models that automate complex workflows and unlock unprecedented growth.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-cyan-600 transition-all uppercase tracking-widest text-sm shadow-xl">
                                Initialize Strategy
                            </button>
                            <button className="bg-transparent border border-black/10 text-black px-10 py-5 rounded-full font-bold hover:bg-black/5 transition-all uppercase tracking-widest text-sm">
                                Watch AI Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Futuristic Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-100 rounded-full blur-[150px] -z-0"></div>
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[150px] -z-0"></div>

                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32 relative">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Intelligence Overview</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-black">The Future of Automation is Here</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                                Artificial Intelligence is no longer a luxury; it's a necessity for companies that want to remain competitive in a data-driven world. We help you move beyond simple automation into the realm of cognitive computing.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Cognitive Automation", value: "90% Efficiency Gain" },
                                    { title: "Real-time Processing", value: "Peta-scale Data Analysis" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 border-b border-black/10">
                                        <span className="text-gray-500 text-sm italic">{stat.title}</span>
                                        <span className="text-cyan-600 font-mono font-bold">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="relative z-10 p-1 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-3xl">
                                <div className="bg-white p-12 rounded-[22px] flex flex-col items-center justify-center min-h-[400px] border border-gray-100 shadow-xl">
                                    <div className="text-7xl mb-6">🧠</div>
                                    <div className="w-full max-w-xs h-1 bg-gray-100 rounded-full overflow-hidden mt-8">
                                        <div className="w-2/3 h-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                                    </div>
                                    <p className="text-xs text-cyan-600 mt-4 tracking-widest font-mono">NEURAL NETWORK ACTIVE</p>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-cyan-100 blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter italic text-black">AI Capabilities</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-light">Advanced machine learning modules configured for enterprise performance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Intelligent Chatbots", icon: "💬", desc: "Sophisticated AI agents that understand context and intent, providing human-like support at scale." },
                            { title: "Recommendation Systems", icon: "🎯", desc: "Deep learning algorithms that analyze user behavior to deliver hyper-personalized content and product suggestions." },
                            { title: "Predictive Analytics", icon: "📊", desc: "Turn historical data into future foresight. Anticipate market shifts and customer needs before they happen." },
                            { title: "NLP Solutions", icon: "✍️", desc: "Natural Language Processing to extract insights from text, perform sentiment analysis, and automate translation." }
                        ].map((service, idx) => (
                            <div key={idx} className="group relative p-[1px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-br from-cyan-500/20 to-purple-600/20 transition-all"></div>
                                <div className="relative bg-white p-12 rounded-[23px] h-full flex flex-col items-start border border-gray-100">
                                    <div className="text-4xl mb-6 bg-cyan-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-light group-hover:text-black transition-colors">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-mono text-cyan-600 tracking-widest mb-4">ENGINEERING STACK</h2>
                        <p className="text-gray-500">Core technologies powering our AI solutions.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12" data-aos="zoom-in">
                        {[
                            { name: "Python", color: "text-blue-600" },
                            { name: "TensorFlow", color: "text-orange-600" },
                            { name: "PyTorch", color: "text-red-600" },
                            { name: "OpenAI APIs", color: "text-green-600" },
                            { name: "Scikit-learn", color: "text-yellow-600" },
                            { name: "Keras", color: "text-red-500" }
                        ].map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className={`text-3xl md:text-4xl font-bold ${tech.color} opacity-40 hover:opacity-100 transition-opacity cursor-default tracking-widest font-mono`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 md:py-32 bg-white border-y border-gray-100">
                <div className="container">
                    <div className="flex flex-col items-start mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-black" data-aos="fade-right">Industry Use Cases</h2>
                        <div className="h-1 w-40 bg-gradient-to-r from-cyan-600 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Healthcare", desc: "AI-driven diagnostics, patient data analysis, and personalized treatment plans powered by predictive health models.", icon: "🏥" },
                            { title: "Education", icon: "🎓", desc: "Adaptive learning platforms that adjust to student progress and automated grading systems for complex assessments." },
                            { title: "E-commerce", icon: "🛍️", desc: "Inventory forecasting, price optimization, and visual search capabilities to drive digital sales performance." }
                        ].map((useCase, idx) => (
                            <div key={idx} className="border-l-2 border-gray-200 pl-8 py-4 hover:border-cyan-600 transition-colors" data-aos="fade-up" data-aos-delay={idx * 150}>
                                <div className="text-4xl mb-6">{useCase.icon}</div>
                                <h4 className="text-xl font-bold mb-4 text-black">{useCase.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-light">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container relative z-10">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-12 md:p-24 rounded-[40px] text-center flex flex-col items-center shadow-2xl">
                        <h2 className="text-[36px] md:text-[60px] font-black mb-8 tracking-tighter text-white" data-aos="fade-up">
                            Ready to Leverage AI?
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl font-light" data-aos="fade-up" data-aos-delay="100">
                            The window of opportunity to lead with AI is closing. Partner with our architects today and claim your digital future.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-cyan-500 text-black px-12 py-5 rounded-full font-bold hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl shadow-cyan-500/20" data-aos="fade-up" data-aos-delay="200">
                            Consult with AI Experts
                        </Link>
                    </div>
                </div>
                {/* Glow behind box */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[150px]"></div>
            </section>

            <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
        </main>
    );
}
