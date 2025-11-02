"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MainLogo from "./icon/MainLogo";
import ChevaronDownBlue from "./icon/ChevaronDownBlue";
import SearchIcon from "./icon/SearchIcon";
import BarsIcon from "./icon/BarsIcon";
import PhoneIcon from "./icon/PhoneIcon";
import CloseIcon from "./icon/CloseIcon";
import Chevronright from "./icon/Chevronright";
import PlusIcon from "./icon/PlusIcon";
import MinusIcon from "./icon/MinusIcon";
import MailIcon from "./icon/MailIcon";
import Image from 'next/image';
import gallery1 from '/public/img/side-menu-1.jpg';
import gallery2 from '/public/img/side-menu-2.jpg';
import gallery3 from '/public/img/side-menu-3.jpg';
import gallery4 from '/public/img/side-menu-4.jpg';
import gallery5 from '/public/img/side-menu-5.jpg';
import gallery6 from '/public/img/side-menu-6.jpg';

const MainHeader = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const toggleSearchPopup = () => setIsSearchPopupOpen(!isSearchPopupOpen);

    const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    return (
        <>
            <header className={`header ${isSticky ? "sticky" : ""}`}>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <Link href={"/"}>
                                <MainLogo />
                            </Link>
                        </div>

                        <div className={`header-link ${isMenuOpen ? 'mobile-show-menu' : ''}`}>
                            <ul>
                                {isMenuOpen && (
                                    <div className="mobile-logo">
                                        <MainLogo />
                                        <div className="menu-close" onClick={closeMenu}>
                                            <CloseIcon />
                                        </div>
                                        <div className="mobile-search-input">
                                            <div className="mobile-input">
                                                <input type="text" placeholder="Search..." className="mobile-search" />
                                            </div>
                                            <div className="search-icon-mobile">
                                                <SearchIcon />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {[
                                    {
                                        label: "Home", href: "#", hasChevron: true, addMarginTop: true, addMobileDropIcon: true, subMenu: [
                                            { label: "Home One", href: "#" },
                                            { label: "Home Tow", href: "#" },
                                            { label: "Home Three", href: "#" },
                                            { label: "Home Four", href: "#" },
                                            { label: "Home Five", href: "#" },
                                            { label: "Home Six", href: "#" },
                                            { label: "Home Seven", href: "#" },
                                            { label: "Home Eight", href: "#" }
                                        ]
                                    },
                                    { label: "About", href: "/about", hasChevron: false, addMarginTop: false, addMobileDropIcon: false },
                                    {
                                        label: "Pages", href: "#", hasChevron: true, addMarginTop: false, addMobileDropIcon: true, subMenu: [
                                            { label: "Services", href: "/services" },
                                            { label: "Service Details", href: "/services-details" },
                                            { label: "Team", href: "/team" },
                                            { label: "Team Details", href: "/team-details" },
                                            { label: "Projects", href: "/projects" },
                                            { label: "Appointment", href: "/appointment" },
                                            { label: "Error Page", href: "/error" }
                                        ]
                                    },
                                    {
                                        label: "Shop", href: "#", hasChevron: true, addMarginTop: false, addMobileDropIcon: true, subMenu: [
                                            { label: "Shop", href: "/shop" },
                                            { label: "Shop Details", href: "/shop-details" },
                                            { label: "Cart", href: "/cart" },
                                            { label: "Checkout", href: "/checkout" },
                                            { label: "My account", href: "/my-account" }
                                        ]
                                    },
                                    {
                                        label: "Blog", href: "#", hasChevron: true, addMarginTop: false, addMobileDropIcon: true, subMenu: [
                                            { label: "Blog", href: "/blog" },
                                            { label: "Blog Details", href: "/blog-details" }
                                        ]
                                    },
                                    { label: "Contact", href: "/contact", hasChevron: false, addMarginTop: false, addMobileDropIcon: false },
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${item.addMarginTop ? "margin-top" : ""} ${isMobile && openDropdownIndex === index ? "open-mobile-drop-down" : ""}`}
                                        onClick={() => isMobile && item.addMobileDropIcon && toggleDropdown(index)}
                                    >
                                        <Link href={item.href}>
                                            <div className="main-link-icon">
                                                <div className="chevron-right">
                                                    <Chevronright />
                                                </div>
                                                {item.label}
                                            </div>
                                            {item.hasChevron && (
                                                <div className="chevron-down">
                                                    <ChevaronDownBlue />
                                                </div>
                                            )}
                                            {item.addMobileDropIcon && (
                                                <div className="add-to-mobile-drop-icon">
                                                    <div className="plus-icon">
                                                        <PlusIcon />
                                                    </div>
                                                    <div className="minus-icon">
                                                        <MinusIcon />
                                                    </div>
                                                </div>
                                            )}
                                        </Link>
                                        {item.subMenu && (
                                            <ul className="sub-menu">
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <div className="chevron-sub-menu">
                                                            <Chevronright />
                                                        </div>
                                                        <Link href={subItem.href}>{subItem.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>

                                ))}
                            </ul>
                        </div>

                        <div className="menu-and-search">
                            <Link href="#" className="desktop-search" onClick={toggleSearchPopup}>
                                <SearchIcon />
                            </Link>
                            <Link href="#" className="open-sidebar-menu" onClick={toggleSidebar}>
                                <BarsIcon />
                            </Link>
                        </div>

                        <div className="contact-number">
                            <div className="contact-number-phone-icon">
                                <Link href="#">
                                    <PhoneIcon />
                                </Link>
                            </div>
                            <div className="contact-number-text">
                                <p>Call Anytime</p>
                                <Link href="#">669 2568 2596</Link>
                            </div>
                        </div>

                        <div className="mobile-menu-open" onClick={toggleMenu}>
                            <BarsIcon />
                        </div>
                    </div>
                </div>
            </header>
            <div className={`search-popup-main ${isSearchPopupOpen ? 'search-popup-open' : ''}`}>
                <div className="search-popup-input-main">
                    <div className="search-popup-input">
                        <input type="text" placeholder="What are you looking for" />
                    </div>
                    <div className="search-popup-icon">
                        <SearchIcon />
                    </div>
                </div>
                <div className="search-popup-close-icon" onClick={toggleSearchPopup}>
                    <CloseIcon />
                </div>
            </div>

            <div className={`desktop-side-menu-wrapper ${isSidebarOpen ? 'show' : ''}`}>
                <div className="desktop-side-menu-main">
                    <div className="desktop-side-menu-logo">
                        <MainLogo />
                        <div className="desktop-side-menu-close-btn" onClick={toggleSidebar}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="desktop-side-menu-text">
                        <p>Lorem ipsum dolor sit amet, consectet eiusmod tempor incididunt ut labore e rem ipsum dolor sit amet. sum dolor sit amet, consectet eiusmod.</p>
                    </div>
                    <div className="desktop-side-menu-media">
                        <Link href={"#"}></Link>
                        <Link href={"#"}></Link>
                        <Link href={"#"}></Link>
                        <Link href={"#"}></Link>
                    </div>
                    <div className="desktop-side-menu-visiting-hours">
                        <div className="desktop-side-menu-visiting-hours-heading">
                            <h3>Visiting Hours</h3>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    Mon - Fri:
                                </span>
                                <span>
                                    8:00 am - 8:00 pm
                                </span>
                            </li>
                            <li>
                                <span>
                                    Saturday:
                                </span>
                                <span>
                                    9:00 am - 6:00 pm
                                </span>
                            </li>
                            <li>
                                <span>
                                    Sunday:
                                </span>
                                <span>
                                    9:00 am - 6:00 pm
                                </span>
                            </li>
                        </ul>
                        <div className="desktop-side-menu-contact-link">
                            <Link href={"#"}>
                                <div className="desktop-side-menu-contact-link-icon">
                                    <PhoneIcon />
                                </div>
                                <div className="desktop-side-menu-contact-link-text">
                                    +88012456789
                                </div>
                            </Link>
                            <Link href={"#"}>
                                <div className="desktop-side-menu-contact-link-icon">
                                    <MailIcon />
                                </div>
                                <div className="desktop-side-menu-contact-link-text">
                                    info@example.com
                                </div>
                            </Link>
                        </div>
                        <div className="desktop-side-menu-gallery">
                            <div className="desktop-side-menu-gallery-heading">
                                <h3>Gallery Posts</h3>
                            </div>
                            <div className="desktop-side-menu-gallery-img">
                                {galleryImages.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`desktop side menu gallery image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainHeader;
