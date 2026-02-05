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
          <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {[
              { title: "Software Development", desc: "Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.", icon: "💻" },
              { title: "Mobile Development", desc: "Create powerful and user friendly mobile applications for iOS and Android platforms.", icon: "📱" },
              { title: "Web Development", desc: "Build responsive, modern, and high-performance websites tailored to your business needs.", icon: "🌐" },
              { title: "AI Services", desc: "Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.", icon: "🤖" },
              { title: "IT Consulting", desc: "Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.", icon: "💡" },
              { title: "Cybersecurity Services", desc: "Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.", icon: "🔒" },
              { title: "Managed IT Services", desc: "Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.", icon: "⚙️" },
              { title: "Testing and QA Services", desc: "Rigorous testing and quality assurance processes to deliver reliable and high-performing software.", icon: "✓" },
              { title: "RPA Development", desc: "Streamline operations and enhance productivity with our Robotic Process Automation solutions.", icon: "🤖" },
            ].map((item, index) => (
              <div key={index} className="capability-card bg-white border border-[#e0e0e0] rounded-lg p-6 hover:border-[#9428BA] hover:shadow-lg transition-all duration-300 group">
                <div className="icon w-12 h-12 bg-[#9428BA]/10 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-[#9428BA]/20 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-black text-[18px] md:text-[20px] font-semibold mb-3">{item.title}</h3>
                <p className="text-[#666] text-[14px] md:text-[15px] leading-[24px] mb-4">{item.desc}</p>
                <button className="text-[#9428BA] text-[14px] font-medium hover:underline">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="promotional-banner py-[80px] bg-gradient-to-r from-[#7A1538] to-[#4A0E2A] relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF4D4D] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {/* Left Content */}
          <div className="content w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h4 className="text-[#FF4D4D] font-bold tracking-[4px] uppercase text-[14px] md:text-[16px] mb-2">The Big Thinkers</h4>
            <h2 className="text-white text-[32px] md:text-[48px] font-bold leading-tight mb-6">
              Driving Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-orange-400">Innovation</span> Globally
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[500px] mx-auto md:mx-0">
              "We don't just build software; we engineer growth. Our mission is to empower businesses with scalable, future-ready technology that creates lasting impact."
            </p>

            <div className="person-info flex flex-col md:flex-row items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="bar w-[4px] h-[40px] bg-[#FF4D4D] rounded-full hidden md:block"></div>
              <div className="text-center md:text-left">
                <h3 className="text-white text-[20px] font-bold">Pradeep Kumar Tamar</h3>
                <p className="text-gray-400 text-[14px]">Founder & CEO, Tamar Software</p>
              </div>
            </div>

            <Link href="/about" className="btn bg-white text-[#7A1538] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Discover Our Vision
            </Link>
          </div>

          {/* Right Image */}
          <div className="image w-full md:w-1/2 flex justify-center md:justify-end relative" data-aos="fade-left">
            <div className="relative z-10">
              <img src="/images/pradeep_without.png" alt="Pradeep Kumar Tamar" className="max-w-full md:max-w-[900px] object-contain drop-shadow-2xl relative z-10" />
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
      <section className="industries-main bg-[#E1E9EB] py-[80px] md:py-[130px] overflow-hidden">
        <div className="container my-10">
          <h2 className="section-title text-[28px] md:text-[35px] font-medium text-black mb-10 text-center md:text-left">Industries</h2>
          <div className="industries bg-white rounded-[5px] p-10 lg:p-[75px_85px] mt-10 md:mt-[145px] relative w-full lg:w-[calc(100%_-_180px)] mx-auto before:content-[''] before:absolute before:top-[-105px] before:left-[-140px] before:w-full before:h-full before:bg-[url('/images/industries-shap.png')] before:bg-no-repeat before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-[12px] after:z-[-1]" data-aos="fade-left">
            <div className="industries-list-col flex flex-col lg:flex-row w-full relative z-20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 w-full lg:w-[65%] gap-2 lg:gap-x-12 relative z-10">
                {["Finance", "Healthcare", "Infrastructure & Construction", "Automobile", "Hospitality", "Media and Entertainment", "Retail", "Telecommunication", "Education", "Government"].map((industry, index) => (
                  <li key={index} className="text-[#444] text-[16px] py-[10px] md:py-[17px] relative pl-[30px] before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:bg-[url('/images/right-arrow.svg')] before:bg-contain before:bg-no-repeat font-normal">{industry}</li>
                ))}
              </ul>
              <div className="img lg:absolute lg:top-[-165px] lg:right-[-150px] mt-10 lg:mt-0 flex rounded-[10px] overflow-hidden max-w-full lg:max-w-none after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[rgba(142,31,181,0.4)] after:to-[rgba(62,14,79,0.4)]">
                <img src="/images/industries-img.png" alt="" className="transition-transform duration-500 hover:scale-110 w-full h-auto" />
              </div>
            </div>
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
