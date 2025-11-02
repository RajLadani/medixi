"use client";

import { useState } from "react";
import PagesBanner from "@/app/components/PagesBanner";
import Button from "@/app/components/Button.";
import Link from "next/link";
import MailIcon from "@/app/components/icon/MailIcon";
import PhoneIcon from "@/app/components/icon/PhoneIcon";
import LocationIcon from "@/app/components/icon/LocationIcon";

const ContactPage = () => {
    const [activeInput, setActiveInput] = useState(null);

    const handleFocus = (index:any) => {
        setActiveInput(index);
    };

    const handleBlur = () => {
        setActiveInput(null);
    };

    return (
        <>
            <PagesBanner title="Contact Us" currentPage="Contact Us" />
            <section className="contact-us-main">
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="contact-us-left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="contact-us-right">
                            <div className="contact-us-right-heading">
                                <h3>Contact Us</h3>
                                <p>Donec sed laoreet odio. Quisque sollicitudin vestibulum ultrices. pellentesque odio eget urna venenatis, ac loxist maximus diam auctor. Phasellus aliquam neque orchestrate accurate information non sodales lacinia.</p>
                            </div>
                            <div className="contact-us-right-form-main">
                                <div className={`contact-us-right-form-input ${activeInput === 1 ? 'active' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        onFocus={() => handleFocus(1)}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className={`contact-us-right-form-input ${activeInput === 2 ? 'active' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder="Email address"
                                        onFocus={() => handleFocus(2)}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            <div className="contact-us-right-form-main">
                                <div className={`contact-us-right-form-input ${activeInput === 3 ? 'active' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder="Phone number"
                                        onFocus={() => handleFocus(3)}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className={`contact-us-right-form-input ${activeInput === 4 ? 'active' : ''}`}>
                                    <select
                                        onFocus={() => handleFocus(4)}
                                        onBlur={handleBlur}
                                    >
                                        <option value="">Web Development</option>
                                        <option value="">Web Design</option>
                                        <option value="">UI/UX Design</option>
                                        <option value="">Content Writing</option>
                                    </select>
                                </div>
                            </div>
                            <div className="contact-us-msg">
                                <textarea
                                    rows={10}
                                    cols={40}
                                    name="comment"
                                    placeholder="Message"
                                />
                            </div>
                            <div className="contact-btn">
                                <Button
                                    text="Send Message"
                                    variant="secondary"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="contact-information-wrapper">
                        <div className="contact-information-box">
                            <div className="contact-information-box-icon">
                                <MailIcon/>
                            </div>
                            <div className="contact-information-box-text">
                                <Link href={"#"}>support@vecuro.com</Link>
                                <Link href={"#"}>info@yourdomain.com</Link>
                            </div>
                        </div>
                        <div className="contact-information-box">
                            <div className="contact-information-box-icon">
                                <PhoneIcon />
                            </div>
                            <div className="contact-information-box-text">
                                <Link href={"#"}>+(00) 194 7531 3485</Link>
                                <Link href={"#"}>+(00) 7712 653 7514</Link>
                            </div>
                        </div>
                        <div className="contact-information-box">
                            <div className="contact-information-box-icon">
                                <LocationIcon />
                            </div>
                            <div className="contact-information-box-text">
                                <p>21/7A, Josua Street, Queens, NY, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
