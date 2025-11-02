"use client";

import Link from "next/link";
import Clock from "./icon/ClockIcon";
import FaceBook from "./icon/FaceBook";
import Linkedin from "./icon/Linkedin";
import LocationIcon from "./icon/LocationIcon";
import MailIcon from "./icon/MailIcon";
import Twitter from "./icon/Twitter";
import Globe from "./icon/Globe";
import ChevaronDownWhite from "./icon/ChevaronDownWhite";
import { useState, useEffect } from 'react';

const TopHeader = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = (event:any) => {
        event.stopPropagation(); // Prevents the event from bubbling to the body
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOutsideClick = () => {
        setIsDropdownVisible(false);
    };

    useEffect(() => {
        if (isDropdownVisible) {
            document.body.addEventListener('click', handleOutsideClick);
        } else {
            document.body.removeEventListener('click', handleOutsideClick);
        }

        return () => document.body.removeEventListener('click', handleOutsideClick);
    }, [isDropdownVisible]);

    return (
        <>
            <section className="top-header">
                <div className="container">
                    <div className="top-header-wrapper">
                        <div className="top-header-left">
                            <div className="top-header-left-inner">
                                <div className="top-header-icon">
                                    <MailIcon />
                                </div>
                                <div className="top-header-text">
                                    <Link href="#">example@domain.com</Link>
                                </div>
                            </div>
                            <div className="top-header-left-inner">
                                <div className="top-header-icon">
                                    <LocationIcon />
                                </div>
                                <div className="top-header-text">
                                    <p>36D Street Brooklyn, New York</p>
                                </div>
                            </div>
                            <div className="top-header-left-inner">
                                <div className="top-header-icon">
                                    <Clock />
                                </div>
                                <div className="top-header-text">
                                    <p>Mon - Fri: 8:00 am - 7:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="top-header-right">
                            <div className="top-header-right-icon">
                                <Link href="#">
                                    <FaceBook />
                                </Link>
                                <Link href="#">
                                    <Twitter />
                                </Link>
                                <Link href="#">
                                    <Linkedin />
                                </Link>
                            </div>
                            <div className="top-header-drop-down" onClick={toggleDropdown}>
                                <Link href={"#"} className="top-header-drop-down">
                                    <Globe />
                                    Language
                                    <ChevaronDownWhite />
                                </Link>
                                <ul className={isDropdownVisible ? 'show' : ''}>
                                    <li>
                                        <Link href={"#"}>
                                            Arabic
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Chinese (Simplified)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Dutch
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            English
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            French
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            German
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Italian
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Portuguese
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Russian
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>
                                            Spanish
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopHeader;

// CSS styles (example)
/*
.top-header-drop-down ul {
  display: none;
}

.top-header-drop-down ul.show {
  display: block;
}
*/
