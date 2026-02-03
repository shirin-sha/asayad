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
        title: "Expert Care <br/>Trusted Health <br/> <span class='text-primary'>Results</span>",
        description: "Modern diagnostics and specialist treatment with patient-first support.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "View Services",
        button2Link: "/services",
        thumbnail: IMAGES.bnr1,
    },
    {
        title: "Modern Clinics, <br/>Consultations  <br/> <span class='text-primary'>Fast.</span>",  
        description: "Modern care with fast, expert consultations you can trust.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "Contact Us",
        button2Link: "/contact-us",
        thumbnail: IMAGES.bnr2,
    },
    {
        title: "Women's Health <br/>IVF Specialist <br/> <span class='text-primary'>Care</span>",
        description: "Private, compassionate support with expert monitoring and guidance.",
        button1Text: "Book Appointment",
        button1Link: "/appointment",
        button2Text: "Learn More",
        button2Link: "/medical-services/ob-gynecology-ivf",
        thumbnail: IMAGES.bnr3,
    },
];

function HomePage() {
    
    return (
        <>
            <Header />
            <style dangerouslySetInnerHTML={{__html: `
                .hero-banner.style-1 {
                    overflow: hidden !important;
                }
                .hero-swiper {
                    overflow: hidden !important;
                    height: 100% !important;
                }
                .hero-swiper .swiper-wrapper {
                    overflow: hidden;
                    height: 100% !important;
                }
                .hero-swiper .swiper-slide {
                    overflow: hidden;
                    height: 100% !important;
                    display: flex !important;
                    align-items: stretch !important;
                }
                .hero-slide {
                    height: 100% !important;
                    width: 100% !important;
                    display: flex !important;
                    flex-direction: column !important;
                }
                .hero-slide .container {
                    height: 100%;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .hero-banner .circle-wrapper {
                    position: relative;
                    bottom: 0;
                    max-height: 100%;
                    overflow: hidden;
                }
                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                    color:rgb(168, 169, 170) !important;
                }
                .hero-swiper .swiper-button-next:hover,
                .hero-swiper .swiper-button-prev:hover {
                    color:rgb(153, 157, 158) !important;
                }
           
            `}} />
            <main className="page-content">
                <div className="hero-banner style-1">
                    <Swiper
                        className="hero-swiper"
                        modules={[Autoplay, EffectFade, Navigation, ]}
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
                                            {/* <span className="text-vertical text-secondary">24/7 EMERGENCY SERVICE</span> */}
                                            <div className="row align-items-end h-100">
                                                <div className="col-lg-6 align-self-center">
                                                    <div className="hero-content">
                                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                                            <span dangerouslySetInnerHTML={{ __html: slide.title }} />
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
                                                         <Image className="thumbnail" src={slide.thumbnail} alt="" />
                                                        <div className="circle-wrapper">
                                                            <span className="circle1"></span>
                                                            <span className="circle2"></span>
                                                            <span className="circle3"></span>
                                                            <div className="item1">
                                                                <Image src={IMAGES.herobannerheart} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item2" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                                            <div className="info-widget style-1 move-3">
                                                                <div className="avatar-group">
                                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                                                </div>
                                                                
                                                                <div className="clearfix ms-2">
                                                                    <span className="number text-primary"> 15+</span>
                                                                    <span>Specialty Services</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                                            <div className="info-widget style-2 move-2">
                                                                <DiagnosisReport />
                                                                <div className="widget-content">
                                                                    <h6 className="mb-0"> Online Appointment</h6>
                                                                    <Link href="/team-detail" className="btn btn-square btn-outline-light text-primary rounded-circle">
                                                                        <i className="feather icon-arrow-up-right" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                                            <div className="info-widget style-3 move-1">
                                                                <div className="widget-head">
                                                                    {/* <div className="widget-media">
                                                                        <Image src={IMAGES.smallavatar5} alt="" />
                                                                    </div> */}
                                                                    <div className="widget-content">
                                                                        <h6 className="title">Reports & Follow-Ups</h6>
                                                                        {/* <ul className="star-list">
                                                                            <li><i className="fa fa-star" /></li>
                                                                            <li><i className="fa fa-star" /></li>
                                                                            <li><i className="fa fa-star" /></li>
                                                                            <li><i className="fa fa-star" /></li>
                                                                            <li><i className="fa fa-star" /></li>
                                                                        </ul> */}
                                                                    </div>
                                                                </div>
                                                                <p>Clear results and guidance for your next steps after every visit.</p>
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
                <Awards />  
                <Frequently />
                <Counter />
                <StayInformed />
                <MapWraper />                 
            </main >
            <Footer />
            
        </>
    )
}
export default HomePage;