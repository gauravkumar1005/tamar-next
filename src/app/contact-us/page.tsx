"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main>
            {/* Contact Banner */}
            <section className="banner about-banner h-auto py-[60px] md:py-[90px] flex flex-col bg-black/5 overflow-hidden">
                <div className="container banner-content flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="banner-text contact-padbot1 w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[36px] md:text-[60px] font-medium text-black mb-5">Contact Us</h1>
                        <h4 className="text-[#333] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-normal mb-8 max-w-full">
                            We are here to answer your business queries and provide your world-class solutions. Let’s get
                            connected and take first step for the success of your business idea.
                        </h4>
                        <ul className="contact-list flex flex-wrap justify-center md:justify-start gap-5 md:gap-8 items-center list-none p-0">
                            <li className="flex items-center gap-2">
                                <a href="tel:(+91)-9650 836 300" className="flex items-center gap-2 text-[#333] font-medium hover:text-[#056CB7] transition-colors">
                                    <img src="/images/call-icon.svg" alt="" className="w-6 h-6" />
                                    <span className="txt">Phone</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <a href="https://wa.me/919650836300" className="flex items-center gap-2 text-[#333] font-medium hover:text-[#25D366] transition-colors">
                                    <img src="/images/whatsapp-icon.svg" className="w-6 h-6 whatsapp" alt="" />
                                    <span className="txt">Whatsapp</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <a href="mailto:contact@Tamarsoftware.in" className="flex items-center gap-2 text-[#333] font-medium hover:text-[#9428BA] transition-colors">
                                    <img src="/images/email-icon.svg" alt="" className="w-6 h-6" />
                                    <span className="txt">Email</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="banner-img-roundbox w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src="/images/contact-img.png" alt="" className="rounded-full shadow-lg max-w-[280px] md:max-w-[400px] w-full" />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section bg-[#E2D1FF] py-[80px] md:py-[130px] pb-[100px] md:pb-[225px]">
                <div className="container">
                    <div className="contact-content flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                        {/* Form */}
                        <div className="contact-form w-full md:w-1/2 md:pr-[10%] mb-10 md:mb-0 box-border">
                            <form className="flex flex-col gap-6 md:gap-10">
                                <div className="form-row border-b border-[#666]/70 pb-2">
                                    <label className="block text-[14px] md:text-[16px] text-[#444] mb-2 font-normal">Full Name</label>
                                    <input type="text" className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] font-light text-[#444] h-[40px] md:h-[45px]" />
                                </div>
                                <div className="form-row border-b border-[#666]/70 pb-2">
                                    <label className="block text-[14px] md:text-[16px] text-[#444] mb-2 font-normal">Phone *</label>
                                    <input type="number" className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] font-light text-[#444] h-[40px] md:h-[45px]" />
                                </div>
                                <div className="form-row border-b border-[#666]/70 pb-2">
                                    <label className="block text-[14px] md:text-[16px] text-[#444] mb-2 font-normal">Email *</label>
                                    <input type="email" className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] font-light text-[#444] h-[40px] md:h-[45px]" />
                                </div>
                                <div className="form-row border-b border-[#666]/70 pb-2">
                                    <label className="block text-[14px] md:text-[16px] text-[#444] mb-2 font-normal">Country</label>
                                    <input type="text" className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] font-light text-[#444] h-[40px] md:h-[45px]" />
                                </div>
                                <div className="form-row border-b border-[#666]/70 pb-2">
                                    <label className="block text-[14px] md:text-[16px] text-[#444] mb-2 font-normal">Comments</label>
                                    <textarea className="w-full bg-transparent border-none outline-none text-[14px] md:text-[16px] font-light text-[#444] h-[80px] md:h-[100px] resize-none"></textarea>
                                </div>
                                <div className="form-row action mt-5 flex justify-center md:justify-start">
                                    <button className="flex items-center justify-center gap-3 w-[180px] md:w-[200px] h-[50px] md:h-[55px] rounded-full bg-gradient-to-r from-[#4E0967] via-[#511E89] to-[#0E4972] text-white text-[14px] md:text-[16px] font-normal hover:scale-105 transition-transform duration-300">
                                        <img src="/images/btn-arrow.svg" alt="" /> Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="contact-info w-full md:w-1/2 md:pl-[8%] flex flex-col gap-6 md:gap-10 box-border">
                            <div className="info-row relative pl-[40px] md:pl-[50px]">
                                <i className="absolute left-0 top-1"><img src="/images/address-icon.svg" alt="" className="w-6 h-6 md:w-8 md:h-8" /></i>
                                <p className="text-[14px] md:text-[16px] text-[#444] font-medium leading-[24px] md:leading-[30px]">A-0313, Logix Technova, Sector 132, Noida, Uttar Pradesh, India 201304</p>
                            </div>
                            <div className="info-row relative pl-[40px] md:pl-[50px]">
                                <i className="absolute left-0 top-1"><img src="/images/call-icon.svg" alt="" className="w-6 h-6 md:w-8 md:h-8" /></i>
                                <a href="tel:(+91)-9650 836 300" className="text-[14px] md:text-[16px] text-[#444] font-medium leading-[24px] md:leading-[30px] hover:text-[#056CB7] transition-colors">(+91)-9650 836 300</a>
                            </div>
                            <div className="info-row relative pl-[40px] md:pl-[50px]">
                                <i className="absolute left-0 top-1"><img src="/images/email-icon.svg" alt="" className="w-6 h-6 md:w-8 md:h-8" /></i>
                                <a href="mailto:contact@Tamarsoftware.in" className="text-[14px] md:text-[16px] text-[#444] font-medium leading-[24px] md:leading-[30px] hover:text-[#9428BA] transition-colors">contact@Tamarsoftware.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
