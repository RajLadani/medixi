"use client";
import { useState } from "react";
import PagesBanner from "@/app/components/PagesBanner";
import AppointmentBox from "../home/AppointmentBox";
import PlusIcon from "@/app/components/icon/PlusIcon";

const Appointment = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <PagesBanner
                title="Appointment"
                currentPage="Appointment"
            />
            <section className="appointment-section">
                <div className="container">
                    <div className="appointment-section-wrapper">
                        <AppointmentBox />
                        <div className="appointment-section-right">
                            {[
                                "Uniquely optimize reliable models before wireless results ofessionally impact progressive core.",
                                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
                                "From its medieval origins to the digital era, learn everything there is to know about the ubiquitous",
                                "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus",
                                "Some claim lorem ipsum threatens to promote design over content, while others defend its value process"
                            ].map((question, index) => (
                                <div
                                    key={index}
                                    className={`appointment-item ${activeIndex === index ? "show" : ""}`}
                                >
                                    <div
                                        className="appointment-question-main"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div className="appointment-question-icon">
                                            <PlusIcon />
                                        </div>
                                        <div className="appointment-question-text">
                                            <h3>{question}</h3>
                                        </div>
                                    </div>
                                    <div className="appointment-ans">
                                        <p>Professionally impact distributed data via value-added experiences. Proacti incentivize 24/365 applications whereas turnkey total linkage. whiteboard multifunctional channels with interoperable value.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointment;
