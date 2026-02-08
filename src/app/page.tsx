"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonialSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="banner h-auto md:h-[665px] w-full flex overflow-hidden py-10 md:py-0 relative bg-slate-50">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="container banner-content home-banner flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="banner-textwrap w-full md:w-1/2">
            <div className="banner-text fadeInUp text-center md:text-left">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-black leading-tight">
                Creating high-value AI <br className="hidden md:block" /> software solutions
              </h1>
              <h4 className="text-[#666] text-[16px] md:text-[20px] font-normal mt-[10px] mb-[30px] md:mb-[42px]">
                We focus on your business needs, quality and Innovation
              </h4>
              <Link className="btn justify-center md:justify-start" href="/contact-us">
                <img src="/images/arrow.svg" alt="" /> Let’s Connect
              </Link>
            </div>
          </div>
          <div className="banner-img circle-animation relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[355px] md:h-[355px] rounded-full bg-white/50 flex items-center justify-center">
            <div className="circle animate-[circle-rotation_14s_linear_infinite]">
              <img src="/images/glass-circle.png" alt="" className="w-full" />
            </div>
            <div className="tick-3d absolute flex z-10 w-[150px] sm:w-[200px] md:w-auto">
              <img src="/images/tick-3d.png" alt="" className="w-full h-auto" />
              <span className="top-right absolute right-[-15px] top-[-15px] sm:right-[-30px] sm:top-[-30px]">
                <img width="42px" src="/images/glass-circle.png" alt="" className="w-[20px] sm:w-[42px]" />
              </span>
              <span className="top-left absolute left-[-10px] top-[30px] sm:left-[-20px] sm:top-[60px]">
                <img width="24px" src="/images/glass-circle.png" alt="" className="w-[12px] sm:w-[24px]" />
              </span>
              <span className="left-center absolute left-[-30px] top-1/2 sm:left-[-70px]">
                <img width="35px" src="/images/glass-circle.png" alt="" className="w-[18px] sm:w-[35px]" />
              </span>
              <span className="bottom absolute bottom-[-20px] left-[40px] sm:bottom-[-40px] sm:left-[95px]">
                <img width="44px" src="/images/glass-circle.png" alt="" className="w-[22px] sm:w-[44px]" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-main bg-[#F8F8F8] pt-[80px] md:pt-[120px] pb-[80px] md:pb-[140px] overflow-hidden relative">
        {/* Particle Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-400 opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-purple-400 opacity-20 animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-pink-400 opacity-10 animate-float-slow animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/3 w-3 h-3 rounded-full bg-blue-600 opacity-20 animate-float-x"></div>
        </div>
        <div className="container my-10 our-story flex flex-col md:flex-row items-center h-full gap-10 md:gap-0 relative z-10">
          {/* Left: Stats Grid */}
          <div className="story-left w-full md:w-[40%] grid grid-cols-2 gap-4 md:gap-6" data-aos="fade-right">
            <div className="stat-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="text-[36px] md:text-[42px] font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">6+</div>
              <p className="text-gray-600 font-medium text-sm mt-2">Years of Excellence</p>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 mt-8">
              <div className="text-[36px] md:text-[42px] font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">50+</div>
              <p className="text-gray-600 font-medium text-sm mt-2">Projects Delivered</p>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="text-[36px] md:text-[42px] font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">40+</div>
              <p className="text-gray-600 font-medium text-sm mt-2">Expert Developers</p>
            </div>
            <div className="stat-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 mt-8">
              <div className="text-[36px] md:text-[42px] font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">98%</div>
              <p className="text-gray-600 font-medium text-sm mt-2">Client Satisfaction</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="story-right w-full md:w-[60%] flex flex-col items-center md:items-start md:pl-[80px] lg:pl-[120px] text-center md:text-left" data-aos="fade-left">
            <h2 className="section-title text-[32px] md:text-[48px] font-bold text-black w-full mb-6 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-[#555] text-[16px] md:text-[18px] font-light mb-6 leading-relaxed max-w-[600px]">
              Founded in <strong className="font-semibold text-black">2018</strong> and transitioned to an LLP in <strong className="font-semibold text-black">2024</strong>, Tamar Software has rapidly evolved into a global leader in IT solutions. We specialize in cutting-edge software development, AI services, and consultancy, serving clients across 10+ countries.
            </p>
            <p className="text-[#555] text-[16px] md:text-[18px] font-light mb-8 leading-relaxed max-w-[600px]">
              Our mission is to empower businesses with innovative and reliable technology. Led by <strong className="font-semibold text-black">Pradeep Kumar Tamar</strong> (IIT Roorkee alumnus), our team delivers excellence with passion and precision.
            </p>

          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-main py-[80px] md:py-[120px] w-full bg-white overflow-hidden relative">
        {/* Glow Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-b from-purple-100/40 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
        </div>
        <div className="container my-10">
          <div className="capabilities-header mb-10 md:mb-16">
            <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black w-full text-center md:text-left mb-5">Capabilities</h2>
            <p className="text-[#666] font-light text-[14px] md:text-[16px] mt-4 max-w-[700px] leading-[26px] md:leading-[30px]" data-aos="fade-up">
              We provide managed IT services customized for your industry
            </p>
            <p className="text-[#666] font-light text-[14px] md:text-[16px] mt-4 max-w-[700px] leading-[26px] md:leading-[30px]" data-aos="fade-up">
              We have served many industries including Finance, Healthcare, Retail, Telecommunication, Education, and Manufacturing across 10+ countries worldwide.
            </p>
          </div>
          <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {[
              { title: "Software Development", route: "/services/software-development", desc: "Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.", icon: "💻" },
              { title: "Mobile Development", route: "/services/mobile-app-development", desc: "Create powerful and user friendly mobile applications for iOS and Android platforms.", icon: "📱" },
              { title: "Web Development", route: "/services/web-development", desc: "Build responsive, modern, and high-performance websites tailored to your business needs.", icon: "🌐" },
              { title: "AI Services", route: "/services/ai-services", desc: "Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.", icon: "🤖" },
              { title: "IT Consulting", route: "/services/it-consulting", desc: "Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.", icon: "💡" },
              { title: "Cybersecurity Services", route: "/services/cybersecurity-services", desc: "Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.", icon: "🔒" },
              { title: "Managed IT Services", route: "/services/managed-it-services", desc: "Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.", icon: "⚙️" },
              { title: "Testing and QA Services", route: "/services/testing-and-qa-services", desc: "Rigorous testing and quality assurance processes to deliver reliable and high-performing software.", icon: "✓" },
              { title: "RPA Development", route: "/services/rpa-development", desc: "Streamline operations and enhance productivity with our Robotic Process Automation solutions.", icon: "🤖" },
            ].map((item, index) => (
              <Link href={item.route} key={index} className="capability-card group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-[#9428BA] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-start" data-aos="fade-up" data-aos-delay={index * 50}>
                {/* Hover Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9428BA] to-[#E31E24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="icon w-16 h-16 bg-[#9428BA]/5 rounded-2xl flex items-center justify-center mb-6 text-3xl text-[#9428BA] group-hover:bg-[#9428BA] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="text-slate-900 text-[20px] md:text-[22px] font-bold mb-3 group-hover:text-[#9428BA] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6 line-clamp-3">{item.desc}</p>

                <div className="mt-auto flex items-center text-[#9428BA] font-semibold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  <span>Explore Service</span>
                  <span className="text-lg leading-none ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="promotional-banner pt-[80px] bg-[#530722] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          {/* Diagonal Lines Pattern on Right */}
          <div className="absolute top-0 right-[-100px] w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-20%] right-0 w-full h-[150%] bg-[repeating-linear-gradient(45deg,transparent,transparent_25px,rgba(255,77,77,0.5)_25px,rgba(255,77,77,0.5)_27px)]"></div>
          </div>
          {/* Subtle Glows */}
          <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-[#FF4D4D] rounded-full blur-[120px] opacity-20 transform -translate-y-1/2"></div>
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row items-center md:items-end !justify-start min-h-[500px] md:min-h-[600px]">
          {/* Left Content */}
          <div className="content w-full md:w-[60%] lg:w-[55%] text-center md:text-left md:self-center py-20 z-20" data-aos="fade-right">
            <h4 className="flex items-center justify-center md:justify-start gap-3 mb-6 relative">
              <span className="text-white font-serif italic text-xl md:text-2xl uppercase tracking-[0.2em] opacity-80 leading-none">The</span>
              <div className="relative inline-block">
                <span className="text-[#E31E24] font-serif italic text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none relative z-10">Big</span>
                {/* Red decorative line cutting through BIG */}
                <div className="absolute top-[45%] -left-[10%] w-[120%] h-[2px] bg-[#E31E24] transform -rotate-[5deg] z-0"></div>
              </div>
              <span className="text-white font-serif italic text-xl md:text-2xl uppercase tracking-[0.2em] opacity-80 leading-none">Thinkers</span>
            </h4>

            <h2 className="text-white text-[32px] md:text-[56px] font-bold leading-[1.1] mb-8">
              Driving Digital <br /> Innovation Globally
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
              "We don't just build software; we engineer growth. Our mission is to empower businesses with scalable, future-ready technology that creates lasting impact."
            </p>

            <div className="person-info mb-10 mt-12 flex flex-col md:flex-row items-center md:items-start gap-4">
              {/* Horizontal line like in reference */}
              <div className="w-[80px] h-[1px] bg-white/40 mt-4 hidden md:block"></div>
              <div className="text-center md:text-left">
                <h3 className="text-white text-[24px] md:text-[28px] font-bold tracking-tight mb-1">Pradeep Kumar Tamar</h3>
                <p className="text-[#FF4D4D] text-[15px] font-medium uppercase tracking-wider opacity-90">Founder & CEO, Tamar Software</p>
              </div>
            </div>

            <Link href="/about" className="group flex items-center justify-center md:justify-start gap-3 bg-[#E31E24] text-white px-10 py-5 rounded-[4px] font-bold transition-all hover:bg-[#c1191f] shadow-lg w-fit mx-auto md:mx-0 uppercase tracking-widest text-[14px]">
              WATCH NOW
              <span className="text-[12px] transition-transform group-hover:translate-x-1">▶</span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="image w-full md:w-[40%] lg:w-[45%] flex justify-end relative items-end self-end z-10 h-full" data-aos="fade-left">
            <div className="relative">
              <img src="/images/pradeep_without.png" alt="Pradeep Kumar Tamar" className="w-auto h-[450px] md:h-[650px] lg:h-[750px] object-contain drop-shadow-2xl brightness-110 pointer-events-none" />
              {/* Decorative Elements around image */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#FF4D4D] to-purple-600 rounded-full blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-main py-[80px] md:py-[130px] overflow-hidden relative">
        {/* Tech Pattern Animation */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container my-10 case-studies flex justify-between flex-wrap gap-y-10 md:gap-y-[80px]">
          <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black w-full text-center md:text-left mb-5">Case Studies</h2>
          {[
            { title: "Online OPD - Naturalminds Digital Systems LLP", img: "/images/case-studies-1.png", link: "/case-studies" },
            { title: "Automation of accountability of sells, purchase, collections and payments - Ganesha Software", img: "/images/case-studies-2.png", link: "/case-studies" },
            { title: "Online Venue Booking - Madnue Solutions", img: "/images/case-studies-3.png", link: "/case-studies" },
            { title: "Virtual Trial Room, It’s an in-house product - Tamar Software", img: "/images/full-shot-woman-online-fashion-shopping.jpg", link: "/case-studies" },
            { title: "Horse & Saddle", img: "/images/case-studies-1.png", link: "/case-studies" },
            { title: "Automated Dustbins", img: "/images/case-studies-2.png", link: "/case-studies" },
          ].map((item, index) => (
            <Link key={index} href={item.link} className={`card w-full sm:w-[calc(50%_-_20px)] md:w-[calc(50%_-_69px)] relative ${index % 2 === 0 ? "md:top-[100px]" : ""}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="img flex overflow-hidden rounded-[10px]">
                <img src={item.img} alt="" className="w-full transition-transform duration-500 hover:scale-110 aspect-video object-cover" />
              </div>
              <p className="text-[16px] md:text-[18px] text-[#333] font-normal mt-[15px]">{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="container mt-[150px] md:mt-[200px] flex justify-center">
          <Link href="/case-studies" className="btn w-fit justify-center">
            <img src="/images/arrow.svg" alt="" /> View All Case Studies
          </Link>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-main bg-[#E1E9EB] py-[80px] md:py-[130px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container my-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div data-aos="fade-right">
              <h2 className="section-title text-[28px] md:text-[40px] font-bold text-black mb-4">Industries We Serve</h2>
              <p className="text-slate-600 text-lg max-w-xl">
                Delivering specialized, high-impact digital solutions across diverse sectors.
              </p>
            </div>
            <Link href="/industries" className="hidden md:flex items-center gap-2 text-[#056CB7] font-semibold hover:gap-4 transition-all" data-aos="fade-left">
              View All Industries <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Finance", icon: "💰", route: "/industries/finance", desc: "Secure banking & fintech solutions" },
              { title: "Healthcare", icon: "🏥", route: "/industries/healthcare", desc: "HIPAA-compliant patient systems" },
              { title: "Retail", icon: "🛒", route: "/industries/retail", desc: "Omnichannel e-commerce platforms" },
              { title: "Manufacturing", icon: "🏭", route: "/industries/manufacturing", desc: "Industry 4.0 & IoT automation" },
              { title: "Telecommunication", icon: "📡", route: "/industries/telecommunication", desc: "Network scaling & billing systems" },
              { title: "Education", icon: "🎓", route: "/industries/education", desc: "LMS & remote learning tools" },
              { title: "Government", icon: "🏛️", route: "/industries/government", desc: "Secure e-governance portals" },
            ].map((industry, index) => (
              <Link href={industry.route} key={index} className="industry-card bg-white rounded-xl p-6 shadow-sm border border-transparent hover:border-[#056CB7] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 rounded-full bg-[#E1E9EB] flex items-center justify-center text-3xl mb-4 group-hover:bg-[#056CB7] group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{industry.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{industry.desc}</p>
                <span className="text-[#056CB7] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore industry →</span>
              </Link>
            ))}

            {/* 'View All' Card for mobile/grid balance */}
            <Link href="/industries" className="industry-card bg-[#056CB7] rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-[200px]" data-aos="fade-up" data-aos-delay="700">
              <h3 className="text-2xl font-bold text-white mb-2">Explore All <br />Industries</h3>
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl mt-4 group-hover:scale-110 transition-transform">→</span>
            </Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/industries" className="btn inline-flex justify-center">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-main w-full pt-[80px] md:pt-[125px] pb-[100px] md:pb-[150px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/tesimonial-bg-img.png')] before:bg-center before:bg-cover before:bg-no-repeat before:blur-[150px]">
        {/* Floating Bubble Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/10 rounded-full animate-float-x"></div>
        </div>
        <div className="container my-10 relative z-10">
          <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black mb-10 text-center md:text-left relative">What clients say</h2>
          <Slider {...testimonialSettings} className="testimonial-slide -mx-[25px] before:content-[''] before:absolute before:top-[-30px] before:left-[-70px] before:w-[170px] before:h-[90px] before:bg-[url('/images/client-arrow.png')] before:bg-no-repeat before:z-1 after:content-[''] after:absolute after:bottom-[-35px] after:right-[-60px] after:w-[170px] after:h-[90px] after:bg-[url('/images/client-arrow.png')] after:bg-no-repeat after:rotate-180 after:z-1">
            {[1, 2, 3].map((item) => (
              <div key={item} className="px-[25px] h-full">
                <div className="slide-card bg-white p-10 lg:p-[45px_40px_45px_80px] rounded-[20px] shadow-sm flex flex-col justify-between h-full min-h-[300px]">
                  <p className="text-[18px] text-[#555] leading-[30px] font-light w-full max-w-full break-words">
                    With the help of Tamar Software, our machine automation process is speed up by 35%. They always
                    deliver software solutions before deadline. I’m happy with their software output. I would be
                    happy to partner with them in the future.
                  </p>
                  <h4 className="text-[18px] mt-[30px] text-[#555] font-normal italic">Henry Williamson, CEO ABC Group, UK</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="contact-location py-[80px] md:py-[120px] bg-[#F9F9F9] border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Left: Find Us (Map) */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="section-header flex items-center gap-3 mb-8">
                <span className="icon text-[#056CB7] text-2xl">
                  📍
                </span>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-black">Find Us</h2>
              </div>
              <div className="map-wrapper w-full h-[400px] lg:h-[450px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1508.834426549246!2d77.3785233!3d28.5132393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce62678000001%3A0x67657963d6b637d7!2sLogix%20Technova!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[0.2]"
                ></iframe>
              </div>
            </div>

            {/* Right: Get In Touch */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="section-header flex items-center gap-3 mb-8">
                <span className="icon text-[#056CB7] text-2xl">
                  🎧
                </span>
                <h2 className="text-[28px] md:text-[32px] font-semibold text-black">Get In Touch</h2>
              </div>

              <div className="contact-cards flex flex-col gap-6">
                {/* Address Card */}
                <div className="contact-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                  <div className="icon-box w-12 h-12 rounded-full bg-[#056CB7]/10 flex items-center justify-center shrink-0 text-[#056CB7] text-xl">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-[#056CB7] text-[18px] font-semibold mb-2">Address</h3>
                    <p className="text-[#555] text-[15px] leading-relaxed">
                      Tamar Software, LOGIX TECHNOVA, 313, Block A, Sector 132, Noida, Uttar Pradesh 201304
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="icon-box w-12 h-12 rounded-full bg-[#056CB7]/10 flex items-center justify-center shrink-0 text-[#056CB7] text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-[#056CB7] text-[18px] font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@tamarsoftware.com" className="text-[#555] text-[15px] hover:text-[#056CB7] transition-colors">
                      contact@tamarsoftware.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="icon-box w-12 h-12 rounded-full bg-[#056CB7]/10 flex items-center justify-center shrink-0 text-[#056CB7] text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-[#056CB7] text-[18px] font-semibold mb-1">Phone</h3>
                    <a href="tel:+919650836300" className="text-[#555] text-[15px] hover:text-[#056CB7] transition-colors">
                      +91-9650836300
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main >
  );
}
