'use client';

import HeadingText from "@/app/components/HeadingText";
import RightArrowIcon from "@/app/components/icon/RightArrowIcon";
import StethoscopeIcon from "@/app/components/icon/StethoscopeIcon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import HSRone from '/public/img/h-sr-1.jpg';
import HSRtwo from '/public/img/h-sr--2.jpg';
import HSRthree from '/public/img/h-sr-3.jpg';
import HSRfour from '/public/img/h-sr-4.jpg';
import { Autoplay } from "swiper/modules";

const servicesData = [
    {
        id: 1,
        image: HSRone,
        icon: <StethoscopeIcon />,
        heading: "Hematology and Super Cool",
        content: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
        link: "#",
    },
    {
        id: 2,
        image: HSRtwo,
        icon: <StethoscopeIcon />,
        heading: "Family Physician & Doctor",
        content: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
        link: "#",
    },
    {
        id: 3,
        image: HSRthree,
        icon: <StethoscopeIcon />,
        heading: "Laboratory & Pathology Drag",
        content: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
        link: "#",
    },
    {
        id: 4,
        image: HSRfour,
        icon: <StethoscopeIcon />,
        heading: "Heart Checkup or Cardiovascular",
        content: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
        link: "#",
    },
];

const ServicesSection = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-heading">
                    <HeadingText
                        subtitle="Medical & General Care!"
                        title="Our Services"
                        description="Proactively revolutionize granular customer service after pandemic internal or organic sources instinctively impact proactive human"
                    />
                </div>
                <div className="services-wrapper">
                    <Swiper spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {servicesData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="services-box">
                                    <div className="services-box-img">
                                        <div className="services-box-img-ex">
                                            <Image src={service.image} alt={service.heading} />
                                        </div>
                                        <div className="services-box-icon">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="services-box-text">
                                        <div className="services-box-text-heading">
                                            <Link href={service.link}>{service.heading}</Link>
                                        </div>
                                        <div className="services-box-text-content">
                                            <p>{service.content}</p>
                                        </div>
                                    </div>
                                    <div className="services-box-arrow">
                                        <RightArrowIcon />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
