"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CaseStudies() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main>
            {/* Banner Section */}
            <section className="banner h-auto md:h-[500px] w-full flex overflow-hidden py-10 md:py-0 bg-[#F8F8F8]">
                <div className="container my-10 banner-content flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="banner-textwrap w-full md:w-1/2">
                        <div className="banner-text fadeInUp text-center md:text-left">
                            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-black leading-tight">
                                Case Studies
                            </h1>
                            <h4 className="text-[#666] text-[16px] md:text-[20px] font-normal mt-[10px] mb-[30px] md:mb-[42px]">
                                Real-world success stories and transformative solutions
                            </h4>
                        </div>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/contact-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>
            </section>

            {/* Case Studies Grid Section */}
            <section className="case-studies-detail py-[80px] md:py-[120px] w-full bg-white">
                <div className="container my-10">
                    <div className="case-studies-grid flex flex-wrap justify-between gap-y-10 md:gap-y-[80px]">
                        {[
                            {
                                title: "Online OPD - Naturalminds Digital Systems LLP",
                                category: "Healthcare",
                                desc: "A comprehensive digital solution for outpatient department management, streamlining patient appointments, records, and doctor schedules.",
                                image: "/images/case-1.jpg",
                                tags: ["Healthcare IT", "Patient Management", "Digital Transformation"],
                            },
                            {
                                title: "Automation of Accountability - Ganesha Software",
                                category: "Finance & Accounting",
                                desc: "Automated system for tracking sales, purchases, collections, and payments, significantly reducing manual errors and improving financial transparency.",
                                image: "/images/case-2.jpg",
                                tags: ["FinTech", "Automation", "Accounting"],
                            },
                            {
                                title: "Online Venue Booking - Madnue Solutions",
                                category: "Hospitality",
                                desc: "User-friendly platform for booking venues for events, conferences, and weddings, featuring real-time availability and secure payments.",
                                image: "/images/case-3.jpg",
                                tags: ["Booking System", "Hospitality", "Web App"],
                            },
                            {
                                title: "Horse & Saddle",
                                category: "Retail / E-Commerce",
                                desc: "Specialized e-commerce platform for equestrian products, offering a seamless shopping experience for horse riding enthusiasts.",
                                image: "/images/case-1.jpg",
                                tags: ["E-Commerce", "Retail", "Niche Market"],
                            },
                            {
                                title: "Automated Dustbins",
                                category: "IoT / Smart City",
                                desc: "Innovative IoT solution for waste management, featuring automated sensors and monitoring systems for efficient waste disposal.",
                                image: "/images/case-2.jpg",
                                tags: ["IoT", "Smart City", "Automation"],
                            },
                            {
                                title: "Advanced Chatbot Integration",
                                category: "AI Services",
                                desc: "Implementation of intelligent chatbots to enhance customer support and user engagement across various digital platforms.",
                                image: "/images/case-3.jpg",
                                tags: ["AI", "Chatbot", "Customer Support"],
                            },
                        ].map((caseStudy, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="card w-full sm:w-[calc(50%_-_20px)] md:w-[calc(50%_-_69px)] relative group"
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            >
                                <div className="img-box overflow-hidden rounded-[10px] relative h-[250px] md:h-[350px]">
                                    <img
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="category absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full text-[12px] font-medium text-black">
                                        {caseStudy.category}
                                    </div>
                                </div>
                                <div className="content mt-5">
                                    <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-3 group-hover:text-[#056CB7] transition-colors">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-[#666] text-[14px] md:text-[16px] leading-[24px] mb-4">
                                        {caseStudy.desc}
                                    </p>
                                    <div className="tags flex flex-wrap gap-2">
                                        {caseStudy.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="tag bg-[#F8F8F8] px-3 py-1 rounded-full text-[12px] text-[#666]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="results-section py-[80px] md:py-[100px] bg-[#F8F8F8]">
                <div className="container my-10">
                    <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black mb-10 text-center" data-aos="fade-up">
                        Our Impact in Numbers
                    </h2>
                    <div className="results-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="result-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#023051] to-[#056CB7] bg-clip-text text-transparent">50+</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Projects Completed</p>
                        </div>
                        <div className="result-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#9428BA] to-[#431254] bg-clip-text text-transparent">45%</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Avg. Efficiency Gain</p>
                        </div>
                        <div className="result-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#023051] to-[#056CB7] bg-clip-text text-transparent">98%</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Client Satisfaction</p>
                        </div>
                        <div className="result-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#9428BA] to-[#431254] bg-clip-text text-transparent">10+</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Industries Served</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-[80px] md:py-[100px] bg-gradient-to-r from-[#410C54] via-[#5D0E78] to-[#0E4972]">
                <div className="container my-10 text-center">
                    <h2 className="text-white text-[28px] md:text-[42px] font-medium mb-6" data-aos="fade-up">
                        Ready to create your success story?
                    </h2>
                    <p className="text-white/90 text-[16px] md:text-[18px] mb-8 max-w-[700px] mx-auto" data-aos="fade-up">
                        Let's discuss how we can help transform your business with innovative technology solutions
                    </p>
                    <Link href="/contact-us" className="btn bg-white text-black px-8 py-3 rounded-lg inline-flex items-center gap-3 hover:bg-white/90 transition-colors" data-aos="fade-up">
                        <img src="/images/arrow.svg" alt="" /> Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
