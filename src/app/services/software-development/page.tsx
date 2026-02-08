"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SoftwareDevelopmentPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#F8F8F8] to-[#E3F2FD]">
                <div className="container relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <Link href="/capabilities" className="text-purple-600 font-medium mb-6 inline-flex items-center gap-2 group">
                            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Capabilities
                        </Link>
                        <h1 className="text-[40px] md:text-[64px] font-bold text-black leading-tight mb-6 mt-4">
                            Custom Software <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9428BA] to-[#E31E24]"> Development Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                            Empowering your business with scalable, secure, and future-ready software solutions engineered for growth and lasting impact.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-black text-white px-10 py-5 rounded-md font-bold hover:bg-gray-800 transition-all uppercase tracking-widest text-sm">
                                Book a Consultation
                            </button>
                        </div>
                    </div>
                </div>
                {/* Abstract background shapes */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[120px] -z-0"></div>
                <div className="absolute bottom-[-5%] left-[10%] w-[300px] h-[300px] bg-red-100/50 rounded-full blur-[100px] -z-0"></div>
            </section>

            {/* Overview Section */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-up">
                            <span className="text-[#9428BA] font-bold tracking-widest uppercase text-sm mb-4 block">Overview</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Engineering Digital Excellence</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    In today's digital landscape, off-the-shelf products often fall short. Our custom software development services are designed to bridge that gap, providing bespoke solutions that fit your unique business workflows like a glove.
                                </p>
                                <p>
                                    From enterprise-grade platforms to streamlined automation tools, we focus on creating software that doesn't just work—it drives ROI. Our approach combines technical rigor with a deep understanding of your business goals.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4" data-aos="fade-left">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                                <div className="text-3xl mb-4">🚀</div>
                                <h4 className="font-bold text-black mb-2">Fast Launch</h4>
                                <p className="text-sm text-gray-500">Agile methodologies for quicker time-to-market.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all mt-8">
                                <div className="text-3xl mb-4">🛡️</div>
                                <h4 className="font-bold text-black mb-2">High Security</h4>
                                <p className="text-sm text-gray-500">Enterprise-level security protocols built from day one.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                                <div className="text-3xl mb-4">⚙️</div>
                                <h4 className="font-bold text-black mb-2">Automation</h4>
                                <p className="text-sm text-gray-500">Streamlining manual tasks for maximum efficiency.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all mt-8">
                                <div className="text-3xl mb-4">📈</div>
                                <h4 className="font-bold text-black mb-2">Scalable</h4>
                                <p className="text-sm text-gray-500">Architecture designed to grow with your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Table/Cards */}
            <section className="py-20 bg-[#fcfcfc] border-y border-gray-100">
                <div className="container">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Core Offerings</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Specialized services to handle every aspect of your software lifecycle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Custom Web Applications", icon: "🌐", desc: "End-to-end web apps tailored to your unique requirements using modern frameworks." },
                            { title: "Enterprise Software", icon: "🏢", desc: "Large-scale systems built to handle complex business operations and high data volumes." },
                            { title: "SaaS Product Development", icon: "☁️", desc: "Turning your product vision into a scalable, multi-tenant cloud application." },
                            { title: "API Development & Integration", icon: "🔌", desc: "Connecting your systems seamlessly for improved data flow and application harmony." },
                            { title: "Software Maintenance & Support", icon: "🛠️", desc: "Ongoing monitoring, updates, and troubleshooting to keep your software running peak." }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="container">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Development Roadmap</h2>
                        <p className="text-gray-500">A structured approach to ensure quality and transparency.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical line for mobile, horizontal for desktop */}
                        <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-100 -translate-x-1/2 hidden md:block group-hover:bg-purple-100 transition-colors"></div>

                        <div className="space-y-12 md:space-y-0">
                            {[
                                { step: "01", title: "Requirement Analysis", desc: "Deep dive workshops to understand your needs, goals, and constraints." },
                                { step: "02", title: "Design", desc: "Creating intuitive UI/UX and robust technical architecture diagrams." },
                                { step: "03", title: "Development", desc: "Clean coding with version control and regular progress sprints." },
                                { step: "04", title: "Testing", desc: "Rigorous QA, bug fixing, and performance optimization." },
                                { step: "05", title: "Deployment", desc: "Seamless launch and configuration in your production environment." },
                                { step: "06", title: "Support", desc: "Continuous monitoring and proactive updates for peace of mind." }
                            ].map((item, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`} data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}>
                                    <div className="w-full md:w-1/2 flex justify-center md:px-16 px-4">
                                        <div className={`p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                            <span className="text-[#9428BA] font-bold text-lg mb-2 block">{item.step}</span>
                                            <h4 className="text-xl font-bold text-black mb-3">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 w-12 h-12 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center font-bold text-purple-500 shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <div className="w-full md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-black text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
                            <p className="text-gray-400">Leveraging industry-leading technologies for superior performance.</p>
                        </div>
                        <div className="flex flex-wrap gap-4" data-aos="fade-left">
                            {['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'MySQL', 'AWS'].map((tech) => (
                                <span key={tech} className="px-6 py-3 bg-white/10 rounded-full border border-white/20 font-medium hover:bg-white hover:text-black transition-all cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-1 border border-white/10 rounded-[28px] overflow-hidden">
                        <div className="bg-gradient-to-br from-white/5 to-transparent p-12 rounded-[24px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                <div>
                                    <h4 className="text-purple-400 font-bold mb-4 uppercase tracking-wider text-xs">Frontend</h4>
                                    <p className="text-gray-300">React, Next.js, Vue, Tailwind CSS</p>
                                </div>
                                <div>
                                    <h4 className="text-red-400 font-bold mb-4 uppercase tracking-wider text-xs">Backend</h4>
                                    <p className="text-gray-300">Java/Spring, Node.js, Python/Django, Go</p>
                                </div>
                                <div>
                                    <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-xs">Cloud & Devops</h4>
                                    <p className="text-gray-300">AWS, Azure, Docker, Kubernetes, Jenkins</p>
                                </div>
                                <div>
                                    <h4 className="text-green-400 font-bold mb-4 uppercase tracking-wider text-xs">Database</h4>
                                    <p className="text-gray-300">PostgreSQL, MongoDB, MySQL, Redis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3" data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">The Edge You Need to Succeed</h2>
                            <p className="text-lg text-gray-600 mb-10">We don't just write code; we solve problems. Here's why world-class brands trust us with their vision.</p>
                            <Link href="/contact-us" className="inline-flex items-center gap-3 font-bold text-purple-600 hover:gap-5 transition-all">
                                Hear from Our Clients <span className="text-xl">→</span>
                            </Link>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-left">
                            <div className="p-10 bg-purple-50/50 rounded-3xl border border-purple-100">
                                <h4 className="text-2xl font-bold text-black mb-4">Experienced Developers</h4>
                                <p className="text-gray-600">A team of senior engineers with decades of combined experience in complex problem-solving.</p>
                            </div>
                            <div className="p-10 bg-red-50/50 rounded-3xl border border-red-100">
                                <h4 className="text-2xl font-bold text-black mb-4">Scalable Solutions</h4>
                                <p className="text-gray-600">We build systems that handle 10x growth without breaking, ensuring your investment is future-proof.</p>
                            </div>
                            <div className="p-10 bg-blue-50/50 rounded-3xl border border-blue-100">
                                <h4 className="text-2xl font-bold text-black mb-4">On-Time Delivery</h4>
                                <p className="text-gray-600">Reliable timelines and strict agile management to ensure your product launches precisely when planned.</p>
                            </div>
                            <div className="p-10 bg-green-50/50 rounded-3xl border border-green-100">
                                <h4 className="text-2xl font-bold text-black mb-4">Client-Focused Approach</h4>
                                <p className="text-gray-600">Your goals are our North Star. We maintain total transparency through every line of code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#9428BA] to-[#E31E24] relative overflow-hidden">
                <div className="container relative z-10 text-center text-white">
                    <h2 className="text-[32px] md:text-[56px] font-bold mb-8 leading-tight" data-aos="fade-up">
                        Ready to Build Your <br /> Next Breakthrough?
                    </h2>
                    <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Schedule a strategy session with our engineering leads and let's map out your transformation.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-black px-12 py-5 rounded-md font-bold hover:bg-gray-100 transition-all uppercase tracking-widest text-sm shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                        Talk to Our Software Experts
                    </Link>
                </div>
                {/* Decorative glows */}
                <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-white/10 rounded-full blur-[150px]"></div>
            </section>
        </main>
    );
}
