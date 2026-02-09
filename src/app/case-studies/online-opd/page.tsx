"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OnlineOPDCaseStudy() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    const data = {
        title: "Online OPD Platform",
        subtitle: "Digital Healthcare Management System",
        client: "Naturalminds Digital Systems LLP",
        industry: "Healthcare",
        summary: "A comprehensive digital solution for outpatient department management, streamlining patient appointments, records, and doctor schedules.",
        heroImage: "/images/case-studies-1.png",
        overview: "In an effort to modernize healthcare access, Naturalminds needed a robust Online OPD platform. The goal was to eliminate long waiting queues, simplify patient registration, and manage doctor schedules efficiently across multiple departments.",
        problem: [
            "Long patient wait times and overcrowded waiting areas.",
            "Manual appointment scheduling leading to errors and overlaps.",
            "Difficulty in maintaining and retrieving digital health records (EHR).",
            "Lack of remote consultation options for patients.",
        ],
        solution: "We developed a secure, HIPAA-compliant web and mobile application for Online OPD management. It features an intuitive booking interface for patients and a comprehensive dashboard for doctors and administrators.",
        highlights: [
            "Real-time appointment booking system with slot management.",
            "Secure Electronic Health Record (EHR) storage and retrieval.",
            "Teleconsultation integration for remote patient visits.",
            "Automated SMS/Voice reminders to reduce no-shows.",
        ],
        results: [
            "Patient processing time reduced by 35%.",
            "Successfully handled 10,000+ appointments in the first 6 months.",
            "Reduced administrative workload by 40%.",
            "Improved patient satisfaction scores significantly.",
        ],
        techStack: ["React.js", "Node.js", "MongoDB", "WebRTC", "AWS HIPAA Cloud"],
        nextCase: "/case-studies/media-integration"
    };

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B0F19] text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>

                <div className="container relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-[#9428BA] text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
                        {data.industry}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 animate-fade-in-up animation-delay-200">
                        {data.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#9428BA] to-blue-500 mx-auto rounded-full animate-fade-in-up animation-delay-300"></div>
                </div>
            </section>

            <div className="container py-16 md:py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Overview Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border border-slate-100" data-aos="fade-up">
                            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover max-h-[500px]" />
                        </div>

                        {/* Client Overview */}
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm">01</span>
                                The Challenge
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-lg">{data.overview}</p>
                            <ul className="space-y-3">
                                {data.problem.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <span className="text-[#E31E24] mt-1.5">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solution */}
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm">02</span>
                                Our Solution
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-lg">{data.solution}</p>

                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-4">Key Implementation Highlights:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {data.highlights.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                                            <span className="text-slate-700 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm">03</span>
                                Measurable Impact
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.results.map((result, index) => (
                                    <div key={index} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-700 font-medium">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        {/* Info Card */}
                        <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-100 sticky top-32" data-aos="fade-left">
                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-2">Client</h3>
                                <p className="text-slate-900 font-semibold text-lg">{data.client}</p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-2">Industry</h3>
                                <p className="text-slate-900 font-semibold text-lg">{data.industry}</p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Interested in a similar solution?</h3>
                                <Link href="/contact-us" className="block w-full text-center bg-[#E31E24] text-white py-3 rounded-lg font-bold hover:bg-[#c1191f] transition-all">
                                    Let's Talk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="border-t border-slate-200 mt-20 pt-10 flex justify-between items-center">
                    <Link href="/case-studies" className="text-slate-500 hover:text-[#9428BA] font-medium flex items-center gap-2 transition-colors">
                        ← Back to All Projects
                    </Link>
                    {data.nextCase && (
                        <Link href={data.nextCase} className="text-[#9428BA] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Next Project →
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
}
