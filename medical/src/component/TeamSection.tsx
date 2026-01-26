"use client"
import Link from "next/link";
import { empolydata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

function TeamSection() {
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="section-head style-1 m-b30 row align-items-end">
                        <div className="col-sm-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b0">Meet Our Specialists</h2>
                        </div>
                        <div className="col-sm-5 text-sm-end d-sm-block d-none wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <Link href="/team" className="btn btn-icon btn-primary btn-shadow"> View All
                                <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-btn-center-lr">
                        <Swiper
                            className="team-swiper"
                            modules={[Autoplay, Navigation]}
                            loop={empolydata.length > 4}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".team-button-next",
                                prevEl: ".team-button-prev",
                            }}
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={{
                                1200: { slidesPerView: 4 },
                                991: { slidesPerView: 3 },
                                767: { slidesPerView: 2 },
                                575: { slidesPerView: 2 },
                                320: { slidesPerView: 1 },
                            }}
                        >
                            {empolydata.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className="dz-team style-1 box-hover">
                                        <div className="dz-media">
                                            <Image src={data.image} alt="/" />
                                            <Link href="/appointment" className="btn btn-primary">
                                                <i className="feather icon-calendar m-r5" /> Appointment Now
                                            </Link>
                                        </div>
                                        <div className="dz-content">
                                            <div className="clearfix">
                                                <h3 className="dz-name"><Link href="/team-detail">{data.title}</Link></h3>
                                                <span className="dz-position">{data.position}</span>
                                            </div>
                                            <Link href="/team-detail" className="btn btn-square btn-secondary">
                                                <i className="feather icon-arrow-right" />
                                            </Link>
                                        </div>
                                        <ul className="dz-social">
                                            <li><Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link href="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                            <li><Link href="https://www.youtube.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="team-button-prev btn-prev" role="button">
                            <Image src={IMAGES.arrowleft} alt="" />
                        </div>
                        <div className="team-button-next btn-next" role="button">
                            <Image src={IMAGES.arrowright} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamSection;
