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
        console.log("Appointment submitted");
    };
    
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .form-body {
                    position: relative;
                    overflow: visible !important;
                }
                .form-body .bs-select .dropdown-menu {
                    max-width: 100%;
                    width: 100%;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .form-body .bs-select .dropdown-toggle {
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .form-body .dropdown-item {
                    white-space: normal !important;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    padding: 10px 20px !important;
                }
            `}} />
            <section className="content-inner-2 bg-light z-2" style={{ backgroundImage: `url(${IMAGES.bg5png.src})` }}>
                <div className="container">
                    <div className="row align-items-end content-wrapper style-8">
                        <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <Image src={IMAGES.about3png} alt="/" />
                        </div>
                        <div className="col-lg-6" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-10px)">
                            <div className="form-wrapper style-1 text-vr-wrapper">
                                <div className="text-vertical">Appointment Now</div>
                                <div className="form-body bg-primary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png.src})`, backgroundSize: 'cover', padding: '40px', overflow: 'visible' }}>
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
                                                <div className="form-floating floating-underline input-light" style={{ overflow: 'visible' }}>
                                                    <Dropdown className="form-control bs-select" style={{ width: '100%' }}>
                                                        <Dropdown.Toggle as="div" style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '40px' }}>
                                                            {selectCat || "Select Department"}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
                                                            <Dropdown.Item onClick={() => setSelectCat("Radiology & Imaging")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Radiology & Imaging</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Laboratory Services")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Laboratory Services</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Women's Health & IVF")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Women's Health & IVF</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Dental Care")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Dental Care</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Internal Medicine")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Internal Medicine</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("General Surgery")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>General Surgery</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Physiotherapy & Rehabilitation")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Physiotherapy & Rehabilitation</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("ENT (Ear, Nose & Throat)")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>ENT (Ear, Nose & Throat)</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Pediatrics & Neonatology")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Pediatrics & Neonatology</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Urology & Andrology")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Urology & Andrology</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Plastic Surgery")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Plastic Surgery</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Anesthesia & Pain Treatment")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Anesthesia & Pain Treatment</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setSelectCat("Emergency")} style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Emergency</Dropdown.Item>
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