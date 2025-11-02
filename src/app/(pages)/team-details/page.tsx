"use client";
import { useState } from "react";
import FaceBook from "@/app/components/icon/FaceBook";
import Linkedin from "@/app/components/icon/Linkedin";
import ShareIcon from "@/app/components/icon/ShareIcon";
import SkaypeIcon from "@/app/components/icon/SkaypeIcon";
import Twitter from "@/app/components/icon/Twitter";
import PagesBanner from "@/app/components/PagesBanner";
import Image from "next/image";
import Link from "next/link";
import AppointmentBox from "../home/AppointmentBox";
import CheckIcon from "@/app/components/icon/CheckIcon";
import PhoneIcon from "@/app/components/icon/PhoneIcon";

const TeamDetails = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleClass = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <PagesBanner
                title="Jerzzy Lamot"
                currentPage="Jerzzy Lamot"
                breadcrumbLinks={[
                    { href: "/team", label: "Doctor" },
                ]}
            />
            <section className="team-details">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="team-details-dr-img">
                            <Image src="/img/team-detail-dr.jpg" alt="" width={600} height={600} />
                            <div className={`dr-media-link ${isVisible ? 'show' : ''}`}>
                                <div className="dr-box-img">
                                    <Image src="/img/member-shape.png" alt="Member Shape" width={100} height={100} />
                                </div>
                                <span className="share-icon" onClick={toggleClass}>
                                    <ShareIcon />
                                </span>
                                <div className="demo">
                                    <Link href="#">
                                        <Linkedin />
                                    </Link>
                                    <Link href="#">
                                        <FaceBook />
                                    </Link>
                                    <Link href="#">
                                        <Twitter />
                                    </Link>
                                    <Link href="#">
                                        <SkaypeIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-details-dr-text">
                            <div className="dr-name">
                                <h3>Jerzzy Lamot</h3>
                                <p>MBBS, M.D of Medicine</p>
                            </div>
                            <div className="dr-details">
                                <p>Rapidiously productivate multimedia based scenarios and economically sound ROI. Dynamically seize cross-platform “outside the box” thinking after enterprise markets. Efficiently enhance end-to-end relationships…</p>
                                <p>Productivate multimedia based scenarios and economically sound ROI. Dynamically seize cross-platform “outside the box” thinking after enterprise markets. Efficiently enhance end-to-end relationships after installed base best practices. Phosfluorescently customize proactive testing procedures via end-to-end networks. Competently scale holistic interfaces for performance based customer service.</p>
                            </div>
                            <div className="dr-ex-details">
                                <div className="dr-ex-details-label">Speciality</div>
                                <div className="dr-ex-information">Medicine</div>
                            </div>
                            <div className="dr-ex-details">
                                <div className="dr-ex-details-label">Degrees</div>
                                <div className="dr-ex-information">MBBS, M.D</div>
                            </div>
                            <div className="dr-ex-details">
                                <div className="dr-ex-details-label">Areas of Expertise</div>
                                <div className="dr-ex-information">
                                    <ul>
                                        <li>
                                            <CheckIcon />Cardiac Imaging – Non-invasive.
                                        </li>
                                        <li>
                                            <CheckIcon />Cardiac Rehabilitation and Exercise.
                                        </li>
                                        <li>
                                            <CheckIcon />Hypertrophic Cardiomyopathy.
                                        </li>
                                        <li>
                                            <CheckIcon />Inherited Heart Diseases.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dr-ex-details">
                                <div className="dr-ex-details-label">Office</div>
                                <div className="dr-ex-information">374 William S Canning Blvd, Fall River MA 2721</div>
                            </div>
                            <div className="dr-ex-details">
                                <div className="dr-ex-details-label">University</div>
                                <div className="dr-ex-information">Harvard University</div>
                            </div>
                        </div>
                    </div>
                    <div className="dr-details-two">
                        <div className="dr-details-two-left">
                            <div className="dr-details-two-left-heading">
                                <h3>My Time Schedule</h3>
                            </div>
                            <div className="time-main">
                                <div className="day">
                                    Mon - Fri:
                                </div>
                                <div className="time">
                                    8.00 am - 8.00 pm
                                </div>
                            </div>
                            <div className="time-main">
                                <div className="day">
                                    Saturday:
                                </div>
                                <div className="time">
                                    9.00 am - 6.00 pm
                                </div>
                            </div>
                            <div className="time-main">
                                <div className="day">
                                    Sunday:
                                </div>
                                <div className="time">
                                    9.00 am - 6.00 pm
                                </div>
                            </div>
                            <div className="number-btn">
                                <Link href={"#"}>
                                    <PhoneIcon />
                                    (669) 2568 2596
                                </Link>
                            </div>
                        </div>
                        <AppointmentBox />
                    </div>
                </div>
            </section>
        </>
    )
}
export default TeamDetails;