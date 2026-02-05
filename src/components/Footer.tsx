import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-main bg-[#121323] w-full pt-[80px] md:pt-[130px] pb-[30px] relative overflow-hidden">
            <div className="container">
                <div className="footer flex flex-col md:flex-row w-full relative gap-10 md:gap-0">
                    <div className="footer-shap-icon absolute right-[-50px] top-[-100px] md:top-[-240px] opacity-50 md:opacity-100">
                        <img className="left w-[20px] absolute top-1/2 left-[-40px]" src="/images/glass-circle.png" alt="" />
                        <span className="footer-tick-3d">
                            <img src="/images/tick-3d.png" alt="" className="w-[80px] md:w-[140px]" />
                        </span>
                        <img className="bottom absolute bottom-[-30px] left-[42px] w-[30px]" src="/images/glass-circle.png" alt="" />
                    </div>
                    <div className="footer-col f-logo w-full md:w-1/4">
                        <img src="/images/logo-footer.png" alt="" className="max-w-[200px]" />
                    </div>
                    <div className="footer-col w-full md:w-1/4">
                        <h3 className="text-[#eee] text-[16px] font-medium border-b border-white/10 md:border-none pb-2 md:pb-0">Industries</h3>
                        <ul className="grid grid-cols-2 md:block">
                            <li><Link href="/finance" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Finance</Link></li>
                            <li><Link href="/healthcare" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Healthcare</Link></li>
                            <li><Link href="/retail" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Retail</Link></li>
                            <li><Link href="/manufacturing" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Manufacturing</Link></li>
                            <li><Link href="/telecommunication" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Telecommunications</Link></li>
                            <li><Link href="/education" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Education</Link></li>
                            <li><Link href="/government" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Government</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col w-full md:w-1/4">
                        <h3 className="text-[#eee] text-[16px] font-medium border-b border-white/10 md:border-none pb-2 md:pb-0">Services</h3>
                        <ul className="grid grid-cols-2 md:block">
                            <li><Link href="/software-development" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Software Development</Link></li>
                            <li><Link href="/it-consulting" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">IT Consulting</Link></li>
                            <li><Link href="/ai-services" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">AI Services</Link></li>
                            <li><Link href="/managed-it-services" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Managed IT Services</Link></li>
                            <li><Link href="/testing-and-qa" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">Testing and QA Services</Link></li>
                            <li><Link href="/rpa-development" className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block hover:text-white transition-colors">RPA Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col address w-full md:w-1/4">
                        <h3 className="text-[#eee] text-[16px] font-medium border-b border-white/10 md:border-none pb-2 md:pb-0">Our Location</h3>
                        <p className="text-[#eee] text-[14px] md:text-[16px] leading-[30px] font-light mt-[10px] md:mt-[20px] inline-block">
                            A-0313, LOGIX TECHNOVA SECTOR 132 <br /> Noida, Uttar Pradesh, India 201304 <br />Phone: (+91)-9650 836 300
                        </p>
                    </div>
                </div>
                <div className="copy-right flex flex-col md:flex-row justify-between items-center mt-[50px] md:mt-[80px] pt-[40px] border-t border-white/15 gap-5">
                    <p className="text-[#eee] text-[14px] md:text-[16px] font-light text-center md:text-left">© 2024 Tamar Software LLP. All rights reserved.</p>
                    <div className="social-media flex gap-[20px] lg:gap-[40px]">
                        <a href="#" className="hover:opacity-70 transition-opacity"><img src="/images/facebook.svg" alt="" className="max-h-[24px]" /></a>
                        <a href="#" className="hover:opacity-70 transition-opacity"><img src="/images/instagram.png" alt="" className="max-h-[24px]" /></a>
                        <a href="#" className="hover:opacity-70 transition-opacity"><img src="/images/linkedin.png" alt="" className="max-h-[24px]" /></a>
                        <a href="#" className="hover:opacity-70 transition-opacity"><img src="/images/twitter.png" alt="" className="max-h-[24px]" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
