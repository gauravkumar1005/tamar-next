"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Industries() {
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
                                Industries We Serve
                            </h1>
                            <h4 className="text-[#666] text-[16px] md:text-[20px] font-normal mt-[10px] mb-[30px] md:mb-[42px]">
                                Delivering specialized solutions across diverse sectors
                            </h4>
                        </div>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/contact-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="industries-detail py-[80px] md:py-[120px] w-full bg-white">
                <div className="container my-10">
                    <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Finance", desc: "Secure and compliant financial technology solutions for banking, insurance, and fintech companies.", icon: "💰", slug: "finance" },
                            { title: "Healthcare", desc: "HIPAA-compliant healthcare IT solutions including EMR, telemedicine, and patient management systems.", icon: "🏥", slug: "healthcare" },
                            { title: "Infrastructure & Construction", desc: "Project management and resource optimization solutions for construction and infrastructure projects.", icon: "🏗️", slug: "infrastructure" },
                            { title: "Automobile", desc: "Connected vehicle solutions, fleet management, and automotive software development.", icon: "🚗", slug: "automobile" },
                            { title: "Hospitality", desc: "Hotel management systems, booking platforms, and customer experience solutions.", icon: "🏨", slug: "hospitality" },
                            { title: "Media and Entertainment", desc: "Content management, streaming platforms, and digital media solutions.", icon: "🎬", slug: "media-entertainment" },
                            { title: "Retail", desc: "E-commerce platforms, inventory management, and omnichannel retail solutions.", icon: "🛒", slug: "retail" },
                            { title: "Telecommunication", desc: "Network management, billing systems, and customer service platforms.", icon: "📡", slug: "telecommunication" },
                            { title: "Education", desc: "Learning management systems, e-learning platforms, and educational technology solutions.", icon: "🎓", slug: "education" },
                            { title: "Government", desc: "Citizen services, e-governance solutions, and public sector digital transformation.", icon: "🏛️", slug: "government" },
                            { title: "Manufacturing", desc: "Industry 4.0 solutions, supply chain management, and production optimization.", icon: "🏭", slug: "manufacturing" },
                            { title: "Energy & Utilities", desc: "Smart grid solutions, energy management systems, and utility billing platforms.", icon: "⚡", slug: "energy-utilities" },
                        ].map((item, index) => (
                            <Link href={`/industries/${item.slug}`} key={index} className="industry-card bg-white border border-[#e0e0e0] rounded-lg p-6 hover:border-[#056CB7] hover:shadow-lg transition-all duration-300 group block" data-aos="fade-up">
                                <div className="icon w-12 h-12 bg-[#056CB7]/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-[#056CB7]/20 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-black text-[18px] md:text-[20px] font-semibold mb-3">{item.title}</h3>
                                <p className="text-[#666] text-[14px] md:text-[15px] leading-[24px]">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section py-[80px] md:py-[100px] bg-[#F8F8F8]">
                <div className="container my-10">
                    <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="stat-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#023051] to-[#056CB7] bg-clip-text text-transparent">10+</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Countries Served</p>
                        </div>
                        <div className="stat-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#9428BA] to-[#431254] bg-clip-text text-transparent">12+</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Industries</p>
                        </div>
                        <div className="stat-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#023051] to-[#056CB7] bg-clip-text text-transparent">50+</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Projects Delivered</p>
                        </div>
                        <div className="stat-item" data-aos="fade-up">
                            <h3 className="text-[36px] md:text-[48px] font-semibold bg-gradient-to-b from-[#9428BA] to-[#431254] bg-clip-text text-transparent">98%</h3>
                            <p className="text-[#666] text-[14px] md:text-[16px] mt-2">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-[80px] md:py-[100px] bg-gradient-to-r from-[#410C54] via-[#5D0E78] to-[#0E4972]">
                <div className="container my-10 text-center">
                    <h2 className="text-white text-[28px] md:text-[42px] font-medium mb-6" data-aos="fade-up">
                        Let's build something amazing together
                    </h2>
                    <p className="text-white/90 text-[16px] md:text-[18px] mb-8 max-w-[700px] mx-auto" data-aos="fade-up">
                        Partner with us to transform your industry with cutting-edge technology solutions
                    </p>
                    <Link href="/contact-us" className="btn bg-white text-black px-8 py-3 rounded-lg inline-flex items-center gap-3 hover:bg-white/90 transition-colors" data-aos="fade-up">
                        <img src="/images/arrow.svg" alt="" /> Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
