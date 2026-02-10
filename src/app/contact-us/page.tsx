"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Enquiry sent successfully!");
            setFormData({ name: "", phone: "", email: "", country: "", message: "" });
        }, 2000);
    };

    const contactOptions = [
        {
            label: "Phone",
            value: "(+91)-9650 836 300",
            link: "tel:(+91)-9650 836 300",
            icon: "/images/call-icon.svg",
            color: "text-blue-600",
            bgColor: "bg-blue-50 border-blue-100"
        },
        {
            label: "WhatsApp",
            value: "Chat on WhatsApp",
            link: "https://wa.me/919650836300",
            icon: "/images/whatsapp-icon.svg",
            color: "text-green-600",
            bgColor: "bg-green-50 border-green-100"
        },
        {
            label: "Email",
            value: "contact@Tamarsoftware.in",
            link: "mailto:contact@Tamarsoftware.in",
            icon: "/images/email-icon.svg",
            color: "text-purple-600",
            bgColor: "bg-purple-50 border-purple-100"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-slate-50 text-slate-900">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow animation-delay-2000"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-blue-600 text-sm font-bold uppercase tracking-wider mb-6">
                                Get In Touch
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                                Let's Build Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Exceptional Together</span>
                            </h1>
                            <p className="text-xl text-slate-600 font-light mb-8 max-w-lg mx-auto lg:mx-0">
                                Have a project in mind? We are here to answer your questions and provide world-class solutions tailored to your business needs.
                            </p>

                            {/* Quick Contact Buttons (Horizontal) */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {contactOptions.map((opt, idx) => (
                                    <Link
                                        key={idx}
                                        href={opt.link}
                                        className="flex items-center gap-3 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
                                    >
                                        <img src={opt.icon} alt={opt.label} className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{opt.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Visual/Image */}
                        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Decorative Circle */}
                                <div className="absolute inset-0 border-2 border-slate-200 rounded-full animate-spin-slow opacity-60"></div>
                                <div className="absolute inset-4 border border-slate-300 rounded-full animate-spin-reverse-slow opacity-50"></div>

                                {/* Main Image Container */}
                                <div className="absolute inset-10 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        src="/images/contact-img.png"
                                        alt="Contact Us Team"
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute top-20 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float-slow hidden md:block border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            📞
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold">Support</p>
                                            <p className="text-sm font-bold text-slate-900">24/7 Active</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float-slow animation-delay-1500 hidden md:block border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            ✉️
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold">Response</p>
                                            <p className="text-sm font-bold text-slate-900">Within 24 Hrs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Contact Form */}
                        <div className="lg:w-2/3" data-aos="fade-up">
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                                    <p className="text-slate-500">Fill out the form below and our team will verify your request and get back to you shortly.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="country" className="text-sm font-semibold text-slate-700">Country</label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                placeholder="United States"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / Comments</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Enquiry
                                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="lg:w-1/3 space-y-8" data-aos="fade-left" data-aos-delay="200">
                            {/* Office Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 text-blue-600">
                                        📍
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Office</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        Tamar Software<br />
                                        A-0313, Logix Technova,<br />
                                        Sector 132, Noida, UP, India 201304
                                    </p>
                                    <a href="https://maps.google.com" target="_blank" className="text-blue-600 font-semibold hover:underline text-sm inline-flex items-center gap-1">
                                        View on Map ↗
                                    </a>
                                </div>
                            </div>

                            {/* Contact Details Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                <div className="relative z-10 space-y-6">
                                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6 text-purple-600">
                                        💬
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h3>
                                        <a href="tel:+919650836300" className="text-lg font-bold text-slate-900 hover:text-purple-600 transition-colors">
                                            (+91)-9650 836 300
                                        </a>
                                    </div>

                                    <div className="border-t border-slate-100 pt-6"></div>

                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
                                        <a href="mailto:contact@Tamarsoftware.in" className="text-lg font-bold text-slate-900 hover:text-purple-600 transition-colors break-words">
                                            contact@Tamarsoftware.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
