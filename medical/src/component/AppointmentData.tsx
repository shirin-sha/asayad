"use client"
import { useRef, useState } from "react";
import { IMAGES } from "../constant/theme";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { useEmailService } from "@/constant/useEmailService";

function AppointmentData() {
    const [selectCat, setSelectCat] = useState("Radiology & Imaging");
    const form = useRef<HTMLFormElement | null>(null);
    const { sendEmail } = useEmailService();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        const result = await sendEmail(form.current);
        if (result.success) {
            console.log('SUCCESS!', result.message);
        } else {
            console.error('FAILED...', result.message);
        }
    };
    
    return (
        <>
            <section className="content-inner-2 bg-light z-2" style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}>
                <div className="container">
                    <div className="row align-items-end content-wrapper style-8">
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <Image src={IMAGES.about3png} alt="/" />
                        </div>
                        <div className="col-lg-6" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-10px)">
                            <div className="form-wrapper style-1 text-vr-wrapper">
                                <div className="text-vertical">Appointment Now</div>
                                <div className="form-body bg-primary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover' }}>
                                    <div className="title-head">
                                        <h2 className="form-title m-b0">Make An <span>Appointment</span> <br /> Request Your Consultation</h2>
                                        <p className="m-t10 m-b20 text-white">Fill in your details and choose a department. Our team will contact you to confirm.</p>
                                    </div>
                                    <form ref={form} onSubmit={handleSubmit} className="dzForm" method="POST">
                                        <input type="hidden" className="form-control" name="dzToDo" value="Appointment" />
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                        <div className="dzFormMsg"></div>
                                        <div className="row">
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline input-light">
                                                    <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" />
                                                    <label htmlFor="inputYourName">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline input-light">
                                                    <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" />
                                                    <label htmlFor="inputYourEmail">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline input-light">
                                                    <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" />
                                                    <label htmlFor="inputPhoneNumber">Phone Number</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline input-light">
                                                    <Dropdown className="form-control bs-select">
                                                        <Dropdown.Toggle as="div" >
                                                            {selectCat || "Select Department"}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => setSelectCat("Radiology & Imaging")}>Radiology & Imaging</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Laboratory Services")}>Laboratory Services</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Women's Health & IVF")}>Women's Health & IVF</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Dental Care")}>Dental Care</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Internal Medicine")}>Internal Medicine</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("General Surgery")}>General Surgery</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Physiotherapy & Rehabilitation")}>Physiotherapy & Rehabilitation</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("ENT (Ear, Nose & Throat)")}>ENT (Ear, Nose & Throat)</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Pediatrics & Neonatology")}>Pediatrics & Neonatology</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Urology & Andrology")}>Urology & Andrology</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Plastic Surgery")}>Plastic Surgery</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Anesthesia & Pain Treatment")}>Anesthesia & Pain Treatment</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Emergency")}>Emergency</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <label htmlFor="selectDepartment" style={{ pointerEvents: 'none' }}>Select Department</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div className="form-floating floating-underline input-light">
                                                    <textarea name="dzMessage" className="form-control" id="inputMessage" rows={6} placeholder="Describe your concern / preferred time"></textarea>
                                                    <label htmlFor="inputMessage">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                    Appointment 
                                                    <span className="right-icon">
                                                        <i className="feather icon-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AppointmentData;