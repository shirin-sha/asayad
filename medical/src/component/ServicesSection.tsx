import Link from "next/link";
import ServiceBox from "./ServiceBox";

function ServicesSection() {
    return (
        <>
            <section className="content-inner-2 bg-light">
                <div className="container">
                    <div className="section-head style-1 m-b30 row align-items-end">
                        <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b0">Start Feeling Your Best <br /> Explore Our Medical Services </h2>
                        </div>
                        <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <Link href="/services" className="btn btn-icon btn-secondary"> View All
                                <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                    <ServiceBox />
                </div>
            </section>
        </>
    )
}

export default ServicesSection;
