"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EducationIndustryPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-indigo-50">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/industries" className="text-indigo-600 font-bold mb-6 inline-flex items-center gap-2 group uppercase tracking-widest text-xs hover:text-indigo-800 transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Industries
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-6 mt-4 text-slate-900">
                            Digital Learning Solutions <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">for Education</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
                            Empowering institutions with modern education technology. We create engaging, accessible, and scalable platforms for the classroom of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all uppercase tracking-wider text-sm shadow-xl shadow-indigo-200 hover:-translate-y-1">
                                Transform Education
                            </button>
                        </div>
                    </div>
                </div>

                {/* Playful/Abstract Background Elements */}
                <div className="absolute right-[5%] top-[15%] text-9xl select-none opacity-10 rotate-12 text-indigo-400 font-serif">Aa</div>
                <div className="absolute right-[20%] bottom-[10%] text-9xl select-none opacity-10 -rotate-6 text-purple-400 font-mono">∑</div>
                <div className="absolute left-[5%] bottom-[5%] w-32 h-32 bg-yellow-400 rounded-full blur-[50px] opacity-20"></div>
            </section>

            {/* Industry Overview */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2" data-aos="fade-up">
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Learning Evolution</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Beyond the Classroom</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Education is no longer confined to physical walls. Institutions must adapt to hybrid models, ensuring students stay engaged whether they're on campus or halfway across the world.
                                </p>
                                <p>
                                    We build intuitive platforms that simplify administration and amplify learning. Our focus is on user experience—making technology invisible so teaching can take center stage.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-yellow-100 rounded-2xl p-6 h-48 flex flex-col justify-end transform translate-y-8">
                                    <span className="text-4xl mb-2">🎓</span>
                                    <span className="font-bold text-slate-800">Higher Ed</span>
                                </div>
                                <div className="bg-purple-100 rounded-2xl p-6 h-48 flex flex-col justify-end">
                                    <span className="text-4xl mb-2">🏫</span>
                                    <span className="font-bold text-slate-800">K-12</span>
                                </div>
                                <div className="bg-pink-100 rounded-2xl p-6 h-48 flex flex-col justify-end transform translate-y-8">
                                    <span className="text-4xl mb-2">💼</span>
                                    <span className="font-bold text-slate-800">Corporate</span>
                                </div>
                                <div className="bg-blue-100 rounded-2xl p-6 h-48 flex flex-col justify-end">
                                    <span className="text-4xl mb-2">🌐</span>
                                    <span className="font-bold text-slate-800">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">EdTech Ecosystem</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Tools for administrators, educators, and students.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Learning Management (LMS)", icon: "📚", desc: "Centralized hubs for course content, assignments, and grading.", color: "bg-blue-50 text-blue-600" },
                            { title: "Virtual Classrooms", icon: "💻", desc: "Interactive video platforms with whiteboards and breakout rooms.", color: "bg-indigo-50 text-indigo-600" },
                            { title: "Student Information (SIS)", icon: "🗂️", desc: "Secure databases for managing enrollment, attendance, and records.", color: "bg-purple-50 text-purple-600" },
                            { title: "Assessment & Analytics", icon: "📊", desc: "Data-driven insights to track student progress and identify at-risk learners.", color: "bg-pink-50 text-pink-600" },
                            { title: "E-learning Portals", icon: "🌍", desc: "Self-paced learning websites with gamification and certification features.", color: "bg-orange-50 text-orange-600" },
                            { title: "Campus Management", icon: "🏛️", desc: "ERP solutions for finance, HR, and facility management in universities.", color: "bg-teal-50 text-teal-600" }
                        ].map((solution, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className={`w-14 h-14 ${solution.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats / Impact */}
            <section className="py-20 bg-indigo-600 text-white overflow-hidden relative">
                <div className="container relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-indigo-500">
                        <div>
                            <div className="text-4xl md:text-6xl font-black mb-2">95%</div>
                            <div className="text-indigo-200">Engagement</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-black mb-2">24/7</div>
                            <div className="text-indigo-200">Access</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-black mb-2">10x</div>
                            <div className="text-indigo-200">Scalability</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-6xl font-black mb-2">A+</div>
                            <div className="text-indigo-200">Usability</div>
                        </div>
                    </div>
                </div>
                {/* Background Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900">Why Digital Learning?</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {[
                            { title: "Better Outcomes", desc: "Personalized learning paths adapt to each student's pace, ensuring mastery of concepts." },
                            { title: "Global Accessibility", desc: "Remove geographical barriers, allowing quality education to reach anyone with an internet connection." },
                            { title: "Scalable Platforms", desc: "Effortlessly handle thousands of concurrent users during peak exam or enrollment periods." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex-1 bg-white p-8 rounded-2xl shadow-sm border-b-4 border-indigo-500" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-black">{idx + 1}</span>
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8" data-aos="fade-up">
                        Ready to inspire the next generation?
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Let's build the interactive learning experiences of the future, together.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-xl font-bold hover:bg-slate-900 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Transform Education with Technology
                    </Link>
                </div>
            </section>
        </main>
    );
}
