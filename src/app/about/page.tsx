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
        });
    }, []);

    const teamSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
    };

    return (
        <main>
            {/* About Banner */}
            <section className="banner about-banner h-auto py-[60px] md:py-[90px] flex flex-col bg-black/5 overflow-hidden">
                <div className="container banner-content flex flex-col md:flex-row items-start justify-between gap-10">
                    <div className="banner-text w-full md:w-1/2">
                        <h1 className="text-[36px] md:text-[60px] font-medium text-black mb-5 md:mb-10 text-center md:text-left">About us</h1>
                        <div className="flex flex-col gap-6 text-center md:text-left">
                            <h4 className="text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] font-normal max-w-full lg:max-w-[850px]">
                                Tamar Software was founded back in 2018 have rapidly emerged to become the leader in the IT industry by delivering cutting-edge solutions. Addressing the evolving requirements of businesses across the world has made this software development company a leading choice for several businesses. Being committed to quality and innovation, Tamar Software has already positioned itself as a trusted partner for several companies looking for innovation and transformation.
                            </h4>
                            <h4 className="text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] font-normal max-w-full lg:max-w-[850px]">
                                Tamar Software has taken a strategic decision to a Limited Liability Partnership in 2024 to support the rapid growth of the organisation. The organization is equipped to empower innovation and deliver superior IT and software development services with strategic business goals.
                            </h4>
                            <h4 className="text-[#333] text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] font-normal max-w-full lg:max-w-[850px]">
                                At the growth of this dynamic organisation is Pradeep Tamar Kumar who has always been helpful. He brings his decades of experience in the banking, insurance and IT sectors to his company. His visionary leadership led with integrity and passion has been instrumental to the growth and development of Tamar Software.
                            </h4>
                        </div>
                        <Link className="btn justify-center md:justify-start mt-8" href="/contact-us">
                            <img src="/images/arrow.svg" alt="" /> Let’s Connect
                        </Link>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/about-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="container">
                    <div className="details grid grid-cols-2 md:grid-cols-4 justify-between mt-[80px] md:mt-[150px] gap-8">
                        {[
                            { title: "6+", label: "Years in business", color: "from-[#023051] to-[#056CB7]" },
                            { title: "50+", label: "Projects completed", color: "from-[#9428BA] to-[#431254]" },
                            { title: "40+", label: "Team of experts", color: "from-[#BA3EA2] to-[#67237F]" },
                            { title: "98+", label: "Customer satisfaction", color: "text-[#BA3EA2]" },
                        ].map((stat, index) => (
                            <div key={index} className="col flex flex-col items-center">
                                <div className="text text-center">
                                    <h3 className={`text-[32px] md:text-[47px] font-semibold ${stat.color.includes('from') ? `bg-gradient-to-b ${stat.color} bg-clip-text text-transparent` : stat.color}`}>
                                        {stat.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[16px] text-center text-[#555] font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-main py-[80px] md:py-[130px] bg-gradient-to-br from-[#4E0967] via-[#511E89] to-[#0E4972]">
                <div className="container mission-vision flex flex-col md:flex-row gap-10 lg:gap-[100px] xl:gap-[200px] justify-between text-center md:text-left">
                    <div className="mission-vision-col flex flex-col gap-[20px] md:gap-[35px] w-full md:w-1/2 max-w-full md:max-w-[500px] items-center md:items-start" data-aos="fade-up">
                        <img src="/images/mission.svg" alt="" className="w-10 h-10 md:w-12 md:h-12" />
                        <h4 className="text-[22px] md:text-[27px] text-[#F8F8F8] leading-[22px] font-medium">Our Mission</h4>
                        <p className="text-[14px] md:text-[16px] text-[#eee] leading-[26px] md:leading-[30px] font-light">
                            At Tamar Software, our mission is to deliver innovative and reliable IT solutions that empower businesses to achieve their full potential. We strive to create value for our clients through exceptional service, technological expertise, and a commitment to excellence.
                        </p>
                    </div>
                    <div className="mission-vision-col flex flex-col gap-[20px] md:gap-[35px] w-full md:w-1/2 max-w-full md:max-w-[500px] items-center md:items-start" data-aos="fade-up">
                        <img src="/images/vision.svg" alt="" className="w-10 h-10 md:w-12 md:h-12" />
                        <h4 className="text-[22px] md:text-[27px] text-[#F8F8F8] leading-[22px] font-medium">Our Vision</h4>
                        <p className="text-[14px] md:text-[16px] text-[#eee] leading-[26px] md:leading-[30px] font-light">
                            Our vision is to be a global leader in the IT industry, recognized for our innovation, quality, and customer-centric approach. We aim to drive digital transformation and shape the future of technology by continuously evolving and adapting to market trends.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-main py-[80px] md:py-[115px]">
                <div className="container">
                    <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black text-center md:text-left">Leadership</h2>
                    <div className="leadership mt-[40px] md:mt-[60px] flex flex-col gap-[60px] md:gap-[80px]">
                        {[
                            { name: "Pradeep Kumar Tamar", role: "CEO", img: "/images/pradeep.png", desc: "Pradeep Kumar Tamar, CEO of Tamar Software, is an accomplished IIT Roorkee alumnus with 20 years of extensive experience in IT consulting and the banking and insurance sectors. At Tamar Software, Pradeep leads with passion, integrity, and a commitment to empowering teams, driving growth, and fostering innovation. His visionary leadership and unwavering dedication to excellence have propelled the organization to new heights. Under Pradeep's guidance, Tamar Software is poised for continued success, shaping a future defined by innovation and achievement" },
                            { name: "Vishu Tamar", role: "Head of Human Resource", img: "/images/vishu.png", desc: "Vishu Tamar is the Head of Human Resources at Tamar Software LLP, bringing a wealth of experience and a deep understanding of HR practices to the organization. With a focus on fostering a positive workplace culture, Vishu is dedicated to empowering employees and driving organizational growth through strategic HR initiative." },
                            { name: "Dr. Atul Verma", role: "AI Senior Consultant", img: "/images/atul.png", desc: "Dr. Atul Kumar, our esteemed AI Senior Consultant, contributes extensive expertise and a strategic vision to Tamar Software's AI initiatives. His leadership and technical acumen are instrumental in delivering innovative solutions and fostering a culture of excellence." },
                            { name: "Kaushal Dave", role: "Head of Technical Solutions Architecture", img: "/images/kaushal.png", desc: "Our Head of Technical Solutions Architecture brings extensive expertise in designing and implementing complex technical solutions, significantly shaping our architectural strategies. His leadership guarantees that our technical solutions meet client needs and adhere to industry best practices. Under his direction, our technical solutions team consistently delivers innovative and effective solutions." },
                        ].map((leader, index) => (
                            <div key={index} className="leadership-list flex flex-col md:flex-row gap-8 lg:gap-[60px] w-full group items-center md:items-start" data-aos="fade-up">
                                <div className="leadership-img relative overflow-hidden rounded-[10px] w-[220px] h-[220px] md:w-[285px] md:h-[285px] flex-shrink-0">
                                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#9428BA]/50 via-[#025B8B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                </div>
                                <div className="leadership-details pt-2 md:pt-5 flex-grow text-center md:text-left">
                                    <h3 className="text-[20px] text-black font-medium group-hover:bg-gradient-to-r group-hover:from-[#023051] group-hover:to-[#056CB7] group-hover:bg-clip-text group-hover:text-transparent">
                                        {leader.name}
                                    </h3>
                                    <span className="text-[14px] text-[#666] font-normal uppercase tracking-wider group-hover:text-[#056CB7] transition-colors">
                                        {leader.role}
                                    </span>
                                    <p className="text-[14px] md:text-[16px] text-[#444] font-light mt-4 md:mt-5 leading-[26px] md:leading-[30px]">
                                        {leader.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Players Section */}
            <section className="team-players py-[80px] md:py-[130px] bg-gradient-to-br from-[#4E0967] via-[#511E89] to-[#0E4972]">
                <div className="container">
                    <h2 className="section-title text-[28px] md:text-[35px] font-medium text-white text-center md:text-left">Our Team Players</h2>
                    <Slider {...teamSettings} className="team-slider mt-[40px] md:mt-[65px]">
                        {[1, 1, 1, 1].map((_, index) => (
                            <div key={index}>
                                <div className="team-slide px-5">
                                    <img src="/images/teams.png" alt="Our Team" className="w-full rounded-[15px] aspect-video object-cover" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </main>
    );
}
