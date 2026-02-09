"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cases = [
    {
        title: "Horse & Saddle",
        client: "Horse & Saddle",
        category: "E-Commerce",
        desc: "Specialized e-commerce platform for equestrian products, offering a seamless shopping experience for horse riding enthusiasts.",
        result: "Global Market Reach",
        image: "/images/case-studies-4.png",
        tags: ["E-Commerce", "Niche Market"],
        link: "/case-studies/horse-and-saddle"
    },
    {
        title: "Automated Dustbins",
        client: "Municipal Corp",
        category: "IoT",
        desc: "Innovative IoT solution for waste management, featuring automated sensors and monitoring systems for efficient waste disposal.",
        result: "20% Cost Reduction",
        image: "/images/dustbin-case-study1.png",
        tags: ["IoT", "Smart City"],
        link: "/case-studies/automated-dustbins"
    },
    {
        title: "Advanced Chatbot",
        client: "Enterprise Client",
        category: "AI Services",
        desc: "Implementation of intelligent chatbots to enhance customer support and user engagement across various digital interaction points.",
        result: "24/7 Automated Support",
        image: "/images/case-studies-chatbot.png",
        tags: ["AI", "Chatbot"],
        link: "/case-studies/advanced-chatbot"
    },
    {
        title: "Online Venue Booking",
        client: "Madnue Solutions",
        category: "Hospitality",
        desc: "User-friendly platform for booking venues for events, featuring real-time availability checking and secure payment processing.",
        result: "2x Increase in Bookings",
        image: "/images/case-studies-3.png",
        tags: ["Booking System", "Web App"],
        link: "/case-studies/online-venue-booking"
    },
    {
        title: "Online OPD Platform",
        client: "Naturalminds Digital Systems LLP",
        category: "Healthcare",
        desc: "A comprehensive digital solution for outpatient department management, streamlining patient appointments, records, and doctor schedules.",
        result: "35% Faster Patient Processing",
        image: "/images/case-studies-1.png",
        tags: ["Healthcare IT", "Patient Management"],
        link: "/case-studies/online-opd"
    },
    {
        title: "Media Integration During Call",
        client: "Telecom Client",
        category: "Telecommunication",
        desc: "Seamless integration of media streaming and sharing capabilities directly within voice and video calls for enhanced collaboration.",
        result: "Enhanced User Engagement",
        image: "/images/case-studies-2.png", // Using generic image placeholders
        tags: ["WebRTC", "Media Streaming"],
        link: "/case-studies/media-integration"
    },
    {
        title: "Automation of Accountability",
        client: "Ganesha Software",
        category: "Fintech",
        desc: "Automated tracking for sales, purchases, and payments, significantly reducing manual errors and improving financial transparency.",
        result: "99.9% Accuracy Rate",
        image: "/images/case-studies-2.png",
        tags: ["FinTech", "Automation"],
        link: "/case-studies/automation-of-accountability"
    },
    {
        title: "Power BI Dashboard",
        client: "Business Intelligence Client",
        category: "Data Analytics",
        desc: "Interactive, real-time data visualization dashboards empowering stakeholders with actionable business insights.",
        result: "Data-Driven Decisions",
        image: "/images/case-studies-1.png", // Using generic image placeholders
        tags: ["Power BI", "Data Visualization"],
        link: "/case-studies/power-bi-dashboard"
    },
];

const categories = ["All", "Healthcare", "Fintech", "Hospitality", "E-Commerce", "IoT", "AI Services", "Telecommunication", "Data Analytics"];

export default function CaseStudies() {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    const filteredCases = activeCategory === "All"
        ? cases
        : cases.filter(c => c.category === activeCategory);

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B0F19] text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Abstract Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>

                <div className="container relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6 animate-fade-in-up">
                        Our Work
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                        Real-world <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impact</span>.<br />
                        Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Results</span>.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        Explore how we help global enterprises transform challenges into digital opportunities through innovation and engineering excellence.
                    </p>
                </div>
            </section>

            {/* Filter & Grid Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#9428BA] text-white shadow-lg shadow-purple-500/30 transform scale-105"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCases.map((item, index) => (
                            <Link
                                href={item.link || "#"}
                                key={index}
                                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 h-full ${item.link ? 'hover:shadow-2xl hover:border-[#9428BA]/30 cursor-pointer' : 'cursor-default'}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-slate-900 rounded-md shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-[#9428BA] uppercase tracking-wide mb-1">{item.client}</p>
                                        <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#9428BA] transition-colors">{item.title}</h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.desc}
                                    </p>

                                    {/* Key Result Highlight */}
                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Key Result</p>
                                                <p className="text-slate-800 font-bold text-lg">{item.result}</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#9428BA] group-hover:text-white transition-all duration-300">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredCases.length === 0 && (
                        <div className="text-center py-20 text-slate-400">
                            No case studies found for this category.
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('/images/industries-shap.png')] bg-no-repeat bg-cover"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">Ready to write your success story?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Join leading global enterprises that trust Tamar Software to deliver scalable, future-proof digital solutions.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center gap-3 bg-[#E31E24] hover:bg-[#c1191f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-900/20" data-aos="fade-up" data-aos-delay="200">
                        Start Your Project <span className="text-xl">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
