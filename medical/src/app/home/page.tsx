"use client"
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import DiagnosisReport from "./_components/DiagnosisReport";
import WorldClass from "@/component/WorldClass";
import Counter from "@/component/Counter";
import ServicesSection from "@/component/ServicesSection";
import AppointmentData from "@/component/AppointmentData";
import WhyChoose from "@/component/WhyChoose";
import TeamSection from "@/component/TeamSection";
import RealPatient from "@/component/RealPatient";
import Howitwork from "@/component/Howitwork";
// import MeetDr from "@/component/MeetDr";
import Frequently from "@/component/Frequently";
import Awards from "@/component/Awards";
import StayInformed from "@/component/StayInformed";
import MapWraper from "@/component/MapWraper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const heroSlides = [
    {
        title: "Multi-Specialty Care, One Trusted Center",
        description: "Expert doctors, modern diagnostics, and patient-first treatment, everything you need under one roof in Kuwait.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "View Services",
        button2Link: "/services",
    },
    {
        title: "Advanced Diagnostics. Accurate Results.",
        description: "From imaging to lab testing, get clear answers faster with modern technology and professional reporting.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "Contact Us",
        button2Link: "/contact-us",
    },
    {
        title: "Women's Health & IVF Support You Can Rely On",
        description: "Compassionate care for every stage, consultations, monitoring, and fertility support with privacy and comfort.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "Learn More",
        button2Link: "/medical-services/ob-gynecology-ivf",
    },
];

function HomePage() {
    
    return (
        <>
            <Header />
            <main className="page-content">
                <div className="hero-banner style-1">
                    <Swiper
                        className="hero-swiper"
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                        effect="fade"
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        pagination={{ clickable: true }}
                        speed={1000}
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="hero-slide" style={{ backgroundImage: `url(${IMAGES.herobannerbg1.src})`, backgroundSize: 'cover' }}>
                                    <div className="container">
                                        <div className="inner-wrapper">
                                            <div className="row align-items-end h-100">
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="hero-content">
                                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                                            {slide.title}
                                                            <Image src={IMAGES.herobannerline} alt="" />
                                                        </h1>
                                                        <p className="text wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                                            {slide.description}
                                                        </p>
                                                        <Link href={slide.button1Link} className="btn btn-lg btn-icon btn-primary m-r20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                                            {slide.button1Text}
                                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                        </Link>
                                                        <Link href={slide.button2Link} className="btn btn-lg btn-icon btn-secondary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                                            {slide.button2Text}
                                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                                    <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                                        <Image className="thumbnail" src={IMAGES.herobanner1} alt="" />
                                                        <div className="circle-wrapper">
                                                            <span className="circle1"></span>
                                                            <span className="circle2"></span>
                                                            <span className="circle3"></span>
                                                            <div className="item1">
                                                                <Image src={IMAGES.herobannerheart} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item5" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                                                <div className="info-widget style-4 move-4">
                                                    <div className="widget-media">
                                                        <Image src={IMAGES.smallavatar6} alt="" />
                                                    </div>
                                                    <div className="widget-content">
                                                        <h6 className="title">Have a Question?</h6>
                                                        <Link href="mailto:info@example.com">info@example.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                <Counter />
                <ServicesSection />
                <AppointmentData />
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <TeamSection />
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" 
                    style={{ backgroundImage: `url(${IMAGES.bg3.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}
                >
                    <RealPatient />
                </section>
                <Howitwork />
                {/* <MeetDr /> */}
                <Frequently />
                <Awards />
                <StayInformed />
                <MapWraper />                 
            </main >
            <Footer />
            
        </>
    )
}
export default HomePage;