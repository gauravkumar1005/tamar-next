"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header id="header-main" className="sticky top-0 left-0 w-full py-[15px] border-b border-black/5 bg-white z-[111]">
            <div className="container flex justify-between items-center">
                <div className="logo flex items-center">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Logo" className="max-w-[150px] md:max-w-[210px] flex" />
                    </Link>
                </div>
                <nav className="nav flex items-center">
                    <ul className={`
            fixed top-0 right-0 h-full w-[250px] bg-white border-l border-black/5 flex flex-col gap-5 p-10 transition-transform duration-300 z-[112]
            md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:border-none md:p-0 md:gap-5 lg:gap-[50px]
            ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}>
                        {/* Close Button for Mobile */}
                        <li className="md:hidden flex justify-end mb-5">
                            <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
                        </li>
                        <li><Link href="/" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Home</Link></li>
                        <li><Link href="/capabilities" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Capabilities</Link></li>
                        <li><Link href="/industries" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Industries</Link></li>
                        <li><Link href="/about" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">About us</Link></li>
                        <li><Link href="/careers" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Careers</Link></li>
                        <li><Link href="/case-studies" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Case studies</Link></li>
                        <li><Link href="/contact-us" className="text-[#333] text-[16px] lg:text-[18px] font-medium px-[10px] relative hover:text-[#056CB7] transition-colors whitespace-nowrap">Contact us</Link></li>
                    </ul>
                    <button
                        className="hamburger flex flex-col justify-between w-[30px] h-[20px] bg-transparent border-none md:hidden ml-4"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="w-full h-[2px] bg-[#333]"></span>
                        <span className="w-full h-[2px] bg-[#333]"></span>
                        <span className="w-full h-[2px] bg-[#333]"></span>
                    </button>
                </nav>
            </div>
            {isOpen && (
                <div
                    className="overlay fixed inset-0 bg-black/50 z-[111] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
}
