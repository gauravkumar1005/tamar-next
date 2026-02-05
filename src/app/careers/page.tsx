"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Careers() {
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
                                Join Our Team
                            </h1>
                            <h4 className="text-[#666] text-[16px] md:text-[20px] font-normal mt-[10px] mb-[30px] md:mb-[42px]">
                                Build your career with innovative projects and talented people
                            </h4>
                        </div>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/about-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="why-join py-[80px] md:py-[120px] bg-white">
                <div className="container my-10">
                    <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black mb-10 text-center" data-aos="fade-up">
                        Why Join Tamar Software?
                    </h2>
                    <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Innovative Projects", desc: "Work on cutting-edge technology projects across various industries and domains.", icon: "💡" },
                            { title: "Growth Opportunities", desc: "Continuous learning and development programs to advance your career.", icon: "📈" },
                            { title: "Work-Life Balance", desc: "Flexible working hours and remote work options for better work-life balance.", icon: "⚖️" },
                            { title: "Competitive Benefits", desc: "Attractive salary packages, health insurance, and performance bonuses.", icon: "💰" },
                            { title: "Collaborative Culture", desc: "Work with talented professionals in a supportive and inclusive environment.", icon: "🤝" },
                            { title: "Latest Technologies", desc: "Access to the latest tools, technologies, and learning resources.", icon: "🚀" },
                        ].map((item, index) => (
                            <div key={index} className="benefit-card bg-white border border-[#e0e0e0] rounded-lg p-6 hover:border-[#9428BA] hover:shadow-lg transition-all duration-300" data-aos="fade-up">
                                <div className="icon w-12 h-12 bg-[#9428BA]/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-black text-[18px] md:text-[20px] font-semibold mb-3">{item.title}</h3>
                                <p className="text-[#666] text-[14px] md:text-[15px] leading-[24px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="open-positions py-[80px] md:py-[120px] bg-[#F8F8F8]">
                <div className="container my-10">
                    <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black mb-10 text-center" data-aos="fade-up">
                        Open Positions
                    </h2>
                    <div className="positions-list flex flex-col gap-6">
                        {[
                            { title: "Senior Full Stack Developer", location: "Remote", type: "Full-time", dept: "Engineering" },
                            { title: "UI/UX Designer", location: "Hybrid", type: "Full-time", dept: "Design" },
                            { title: "DevOps Engineer", location: "Remote", type: "Full-time", dept: "Engineering" },
                            { title: "Project Manager", location: "On-site", type: "Full-time", dept: "Management" },
                            { title: "QA Engineer", location: "Remote", type: "Full-time", dept: "Quality Assurance" },
                            { title: "Business Analyst", location: "Hybrid", type: "Full-time", dept: "Business" },
                        ].map((job, index) => (
                            <div key={index} className="job-card bg-white border border-[#e0e0e0] rounded-lg p-6 hover:border-[#056CB7] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4" data-aos="fade-up">
                                <div className="job-info flex-1">
                                    <h3 className="text-black text-[18px] md:text-[22px] font-semibold mb-2">{job.title}</h3>
                                    <div className="job-meta flex flex-wrap gap-4 text-[#666] text-[14px]">
                                        <span className="flex items-center gap-1">📍 {job.location}</span>
                                        <span className="flex items-center gap-1">⏰ {job.type}</span>
                                        <span className="flex items-center gap-1">🏢 {job.dept}</span>
                                    </div>
                                </div>
                                <Link href="/contact-us" className="btn bg-[#056CB7] text-white px-6 py-2 rounded-lg hover:bg-[#045a9d] transition-colors w-fit">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-[80px] md:py-[100px] bg-gradient-to-r from-[#410C54] via-[#5D0E78] to-[#0E4972]">
                <div className="container my-10 text-center">
                    <h2 className="text-white text-[28px] md:text-[42px] font-medium mb-6" data-aos="fade-up">
                        Don't see the right position?
                    </h2>
                    <p className="text-white/90 text-[16px] md:text-[18px] mb-8 max-w-[700px] mx-auto" data-aos="fade-up">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <Link href="/contact-us" className="btn bg-white text-black px-8 py-3 rounded-lg inline-flex items-center gap-3 hover:bg-white/90 transition-colors" data-aos="fade-up">
                        <img src="/images/arrow.svg" alt="" /> Send Your Resume
                    </Link>
                </div>
            </section>
        </main>
    );
}
