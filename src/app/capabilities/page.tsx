"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Capabilities() {
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
                                Our Capabilities
                            </h1>
                            <h4 className="text-[#666] text-[16px] md:text-[20px] font-normal mt-[10px] mb-[30px] md:mb-[42px]">
                                Comprehensive IT solutions tailored to your business needs
                            </h4>
                        </div>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/about-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>
            </section>

            {/* Capabilities Grid Section */}
            <section className="capabilities-detail py-[80px] md:py-[120px] w-full bg-white">
                <div className="container my-10">
                    <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Software Development", desc: "Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.", icon: "💻", slug: "software-development" },
                            { title: "Mobile Development", desc: "Create powerful and user friendly mobile applications for iOS and Android platforms.", icon: "📱", slug: "mobile-app-development" },
                            { title: "Web Development", desc: "Build responsive, modern, and high-performance websites tailored to your business needs.", icon: "🌐", slug: "web-development" },
                            { title: "AI Services", desc: "Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.", icon: "🤖", slug: "ai-services" },
                            { title: "IT Consulting", desc: "Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.", icon: "💡", slug: "it-consulting" },
                            { title: "Cybersecurity Services", desc: "Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.", icon: "🔒", slug: "cybersecurity-services" },
                            { title: "Managed IT Services", desc: "Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.", icon: "⚙️", slug: "managed-it-services" },
                            { title: "Testing and QA Services", desc: "Rigorous testing and quality assurance processes to deliver reliable and high-performing software.", icon: "✓", slug: "testing-and-qa-services" },
                            { title: "RPA Development", desc: "Streamline operations and enhance productivity with our Robotic Process Automation solutions.", icon: "🤖", slug: "rpa-development" },
                        ].map((item, index) => (
                            <div key={index} className="capability-card bg-white border border-[#e0e0e0] rounded-lg p-6 hover:border-[#9428BA] hover:shadow-lg transition-all duration-300 group" data-aos="fade-up">
                                <div className="icon w-12 h-12 bg-[#9428BA]/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-[#9428BA]/20 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-black text-[18px] md:text-[20px] font-semibold mb-3">{item.title}</h3>
                                <p className="text-[#666] text-[14px] md:text-[15px] leading-[24px] mb-4">{item.desc}</p>
                                <Link
                                    href={item.slug ? `/services/${item.slug}` : "/capabilities"}
                                    className="text-[#9428BA] text-[15px] font-medium hover:underline transition-all"
                                >
                                    Read More
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
                        Ready to transform your business?
                    </h2>
                    <p className="text-white/90 text-[16px] md:text-[18px] mb-8 max-w-[700px] mx-auto" data-aos="fade-up">
                        Let's discuss how our capabilities can help you achieve your goals
                    </p>
                    <Link href="/contact-us" className="btn bg-white text-black px-8 py-3 rounded-lg inline-flex items-center gap-3 hover:bg-white/90 transition-colors" data-aos="fade-up">
                        <img src="/images/arrow.svg" alt="" /> Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
