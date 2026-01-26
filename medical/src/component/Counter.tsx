"use client"
import Image from "next/image";
import { countupdata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup"

function Counter() {
    return (
        <>
            <section className="content-inner-3 bg-secondary background-blend-multiply bg-img-fix" 
                style={{ backgroundImage: `URL(${IMAGES.bg2.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}
            >
                <div className="container">
                    <div className="row align-items-sm-center">
                        <div className="col-lg-3 col-12 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            {/* <div className="avatar-group m-b20">
                                <Image className="avatar rounded-circle border border-white border-3" src={IMAGES.smallavatar1} alt="" />
                                <Image className="avatar rounded-circle border border-white border-3" src={IMAGES.smallavatar2} alt="" />
                                <Image className="avatar rounded-circle border border-white border-3" src={IMAGES.smallavatar3} alt="" />
                                <Image className="avatar rounded-circle border border-white border-3" src={IMAGES.smallavatar4} alt="" />
                            </div> */}
                            <h2 className="text-white font-20 m-b0 fw-medium">Trusted Care. Faster Appointments.</h2>
                            <p className="text-white m-t10 m-b0">Book your visit with AMC and get confirmation from our team quickly.</p>
                        </div>
                        {countupdata.map((data, i) => (
                            <div className="col-lg-3 col-4 m-b30 d-flex wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-1 mx-auto">
                                    <span className="content-text text-white">
                                        {data.timeText ? (
                                            data.timeText
                                        ) : data.text ? (
                                            data.text
                                        ) : data.countup !== undefined ? (
                                            <>
                                                <CountUp end={data.countup} duration={5} />
                                                {data.span}
                                            </>
                                        ) : null}
                                    </span>
                                    <h3 className="title text-white m-b0">{data.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;