"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    const teamSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        arrows: false,
        customPaging: (i) => (
            <div className="w-3 h-3 mx-1 rounded-full bg-slate-300 hover:bg-purple-500 transition-colors"></div>
        ),
    };

    const leaders = [
        {
            name: "Pradeep Kumar Tamar",
            role: "CEO",
            img: "/images/pradeep.png",
            desc: "Pradeep Kumar Tamar, CEO of Tamar Software, is an accomplished IIT Roorkee alumnus with 20 years of extensive experience in IT consulting and the banking and insurance sectors. At Tamar Software, Pradeep leads with passion, integrity, and a commitment to empowering teams, driving growth, and fostering innovation. His visionary leadership and unwavering dedication to excellence have propelled the organization to new heights. Under Pradeep's guidance, Tamar Software is poised for continued success, shaping a future defined by innovation and achievement"
        },
        {
            name: "Vishu Tamar",
            role: "Head of Human Resource",
            img: "/images/vishu.png",
            desc: "Vishu Tamar is the Head of Human Resources at Tamar Software LLP, bringing a wealth of experience and a deep understanding of HR practices to the organization. With a focus on fostering a positive workplace culture, Vishu is dedicated to empowering employees and driving organizational growth through strategic HR initiative."
        },
        {
            name: "Dr. Atul Verma",
            role: "AI Senior Consultant",
            img: "/images/atul.png",
            desc: "Dr. Atul Kumar, our esteemed AI Senior Consultant, contributes extensive expertise and a strategic vision to Tamar Software's AI initiatives. His leadership and technical acumen are instrumental in delivering innovative solutions and fostering a culture of excellence."
        },
        {
            name: "Kaushal Dave",
            role: "Head of Technical Solutions Architecture",
            img: "/images/kaushal.png",
            desc: "Our Head of Technical Solutions Architecture brings extensive expertise in designing and implementing complex technical solutions, significantly shaping our architectural strategies. His leadership guarantees that our technical solutions meet client needs and adhere to industry best practices. Under his direction, our technical solutions team consistently delivers innovative and effective solutions."
        },
    ];

    return (
        <main className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-50">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-bold uppercase tracking-wider mb-8 shadow-sm">
                                Our Story
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                                Driving Innovation <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Since 2018</span>
                            </h1>

                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Tamar Software was founded back in 2018 have rapidly emerged to become the leader in the IT industry by delivering cutting-edge solutions. Addressing the evolving requirements of businesses across the world has made this software development company a leading choice for several businesses. Being committed to quality and innovation, Tamar Software has already positioned itself as a trusted partner for several companies looking for innovation and transformation.
                                </p>
                                <p>
                                    Tamar Software has taken a strategic decision to a Limited Liability Partnership in 2024 to support the rapid growth of the organisation. The organization is equipped to empower innovation and deliver superior IT and software development services with strategic business goals.
                                </p>
                                <p>
                                    At the growth of this dynamic organisation is Pradeep Tamar Kumar who has always been helpful. He brings his decades of experience in the banking, insurance and IT sectors to his company. His visionary leadership led with integrity and passion has been instrumental to the growth and development of Tamar Software.
                                </p>
                            </div>

                            <div className="mt-10 flex justify-center lg:justify-start">
                                <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                                    Let's Connect
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-20 animate-pulse-slow"></div>
                                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                                    <img src="/images/about-img.png" alt="About Tamar Software" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-float-slow">
                                    <div className="text-center">
                                        <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">6+</span>
                                        <span className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Years of<br />Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-white border-y border-slate-100 relative z-20 -mt-10 md:-mt-20 lg:mx-20 rounded-xl shadow-xl max-w-7xl mx-auto">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        {[
                            { title: "6+", label: "Years in business", color: "text-blue-600" },
                            { title: "50+", label: "Projects completed", color: "text-purple-600" },
                            { title: "40+", label: "Team of experts", color: "text-pink-600" },
                            { title: "98%", label: "Customer satisfaction", color: "text-green-600" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 hover:-translate-y-1 transition-transform duration-300">
                                <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.title}</h3>
                                <p className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
                        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 group hover:border-blue-200 transition-all duration-300" data-aos="fade-up">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                                <img src="/images/mission.svg" alt="Mission" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                At Tamar Software, our mission is to deliver innovative and reliable IT solutions that empower businesses to achieve their full potential. We strive to create value for our clients through exceptional service, technological expertise, and a commitment to excellence.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 group hover:border-purple-200 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-300">
                                <img src="/images/vision.svg" alt="Vision" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Our vision is to be a global leader in the IT industry, recognized for our innovation, quality, and customer-centric approach. We aim to drive digital transformation and shape the future of technology by continuously evolving and adapting to market trends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Leaders</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Meet The Visionaries</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {leaders.map((leader, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="shrink-0 relative">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-md">
                                        <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                                    <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">{leader.role}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                                        {leader.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Players Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Team Players</h2>
                            <p className="text-slate-400 text-lg">The dedicated experts behind every success story.</p>
                        </div>

                        <div className="hidden md:flex gap-2">
                            {/* Custom Navigation Arrows could go here if needed, keeping it simple for now */}
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <Slider {...teamSettings} className="team-slider -mx-4">
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="px-4 outline-none">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                        <img src="/images/teams.png" alt="Our Team" className="w-full aspect-[21/9] object-cover" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </main>
    );
}
