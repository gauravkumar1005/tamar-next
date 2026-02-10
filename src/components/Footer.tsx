"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-main bg-slate-950 w-full pt-20 md:pt-32 pb-10 relative overflow-hidden border-t border-slate-900">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10">
                <div className="footer flex flex-col lg:flex-row w-full justify-between gap-12 lg:gap-8">

                    {/* Decorative Elements (Preserved) */}
                    <div className="footer-shap-icon absolute right-[-50px] top-[-100px] md:top-[-240px] opacity-20 pointer-events-none">
                        <img className="left w-[20px] absolute top-1/2 left-[-40px] animate-pulse" src="/images/glass-circle.png" alt="" />
                        <span className="footer-tick-3d block transform rotate-12">
                            <img src="/images/tick-3d.png" alt="" className="w-[80px] md:w-[140px]" />
                        </span>
                        <img className="bottom absolute bottom-[-30px] left-[42px] w-[30px] animate-bounce-slow" src="/images/glass-circle.png" alt="" />
                    </div>

                    {/* Logo Column */}
                    <div className="footer-col w-full lg:w-3/12 pr-4">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/images/logo-footer.png" alt="Tamar Software" className="max-w-[180px] brightness-125" />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            High-value AI software solutions focused on business needs, quality, and innovation.
                        </p>
                    </div>

                    {/* Industries Column */}
                    <div className="footer-col w-full md:w-1/2 lg:w-2/12">
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Industries
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/industries/finance" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Finance</Link></li>
                            <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Healthcare</Link></li>
                            <li><Link href="/industries/retail" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Retail</Link></li>
                            <li><Link href="/industries/manufacturing" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Manufacturing</Link></li>
                            <li><Link href="/industries/telecommunication" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Telecommunications</Link></li>
                            <li><Link href="/industries/education" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Education</Link></li>
                            <li><Link href="/industries/government" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Government</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="footer-col w-full md:w-1/2 lg:w-3/12">
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Services
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-purple-600 rounded-full"></span>
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/services/software-development" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Software Development</Link></li>
                            <li><Link href="/services/it-consulting" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">IT Consulting</Link></li>
                            <li><Link href="/services/ai-services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">AI Services</Link></li>
                            <li><Link href="/services/managed-it-services" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Managed IT Services</Link></li>
                            <li><Link href="/services/testing-and-qa" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">Testing and QA Services</Link></li>
                            <li><Link href="/services/rpa-development" className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base block">RPA Development</Link></li>
                        </ul>
                    </div>

                    {/* Location Column */}
                    <div className="footer-col w-full lg:w-3/12">
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Our Location
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-500 rounded-full"></span>
                        </h3>
                        <div className="text-slate-400 leading-relaxed text-sm md:text-base space-y-4">
                            <p className="flex items-start gap-4">
                                <span className="bg-slate-900 p-2 rounded-lg text-xl border border-slate-800">📍</span>
                                <span>
                                    A-0313, LOGIX TECHNOVA<br />
                                    SECTOR 132, Noida,<br />
                                    Uttar Pradesh, India 201304
                                </span>
                            </p>
                            <p className="flex items-center gap-4 group cursor-pointer">
                                <span className="bg-slate-900 p-2 rounded-lg text-xl border border-slate-800 group-hover:border-blue-500 transition-colors">📞</span>
                                <a href="tel:+919650836300" className="group-hover:text-white transition-colors">
                                    (+91)-9650 836 300
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright & Socials */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © 2024 Tamar Software LLP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 group">
                            <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:bg-pink-600 hover:border-pink-600 hover:-translate-y-1 transition-all duration-300 group">
                            <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-700 hover:border-blue-700 hover:-translate-y-1 transition-all duration-300 group">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:-translate-y-1 transition-all duration-300 group">
                            <img src="/images/twitter.png" alt="Twitter" className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
