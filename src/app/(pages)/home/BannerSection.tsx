'use client';
import React from 'react';
import Button from "@/app/components/Button.";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
const BannerSection = () => {
    const banners = [
        {
            id: 1,
            image: "/img/banner1.jpg",
            title1: "Best Treatment for",
            title2: "and physicians",
            description: "Conveniently drive go forward architectures with future-proof growth strategies. Energistically supply low-risk high-yield process improvements for mission-critical testing procedures and visual mockups.",
        },
        {
            id: 2,
            image: "/img/banner-2.jpg",
            title1: "We always put the",
            title2: "healthy life",
            description: "Conveniently drive go forward architectures with future-proof growth strategies. Energistically supply low-risk high-yield process improvements for mission-critical testing procedures and visual mockups.",
        },
    ];

    return (
        <section className="banner">
            <div className="banner-wrapper">
                <Swiper spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay]}
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                        <div className="banner-img" key={banner.id}>
                            <Image
                                src={banner.image}
                                alt={banner.title1}
                                width={1200}
                                height={600}
                                priority
                            />
                            <div className="banner-text">
                                <h1>{banner.title1}</h1>
                                <h2>{banner.title2}</h2>
                                <p>{banner.description}</p>
                                <Button text="View All Services" variant="primary" showChevron={false} />
                            </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BannerSection;
