"use client";
import HeadingText from "@/app/components/HeadingText";
import CheckIcon from "@/app/components/icon/CheckIcon";
import Button from "@/app/components/Button.";
import AppointmentBox from "./AppointmentBox";

const AppointmentSection = () => {
    return (
        <section className="appointment">
            <div className="container">
                <div className="appointment-wrapper">
                    <div className="appointment-left">
                        <HeadingText
                            subtitle="Medical & General Care!"
                            title="We’re Here For You"
                            description="Proactively revolutionize granular customer service after pandemic internal or organic sources. Distinctively impact proactive human capital rather than client-centered benefits."
                        />
                        <div className="right-main">
                            <ul>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">99% success rate</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">100% Confidential</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">Affordable Fees</div>
                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">Free Consultation</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">Expert surveillance agents</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="right-inner">
                                        <div className="right-icon"><CheckIcon /></div>
                                        <div className="right-text">Over 50 years experience</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Button text="Get More Info" variant="secondary" showChevron={true} />
                    </div>
                    <AppointmentBox />
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
