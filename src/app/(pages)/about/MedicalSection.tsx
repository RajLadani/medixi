'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const MedicalSection = () => {
    const medicalImages = [
        "/img/medical-1.svg",
        "/img/medical-2.svg",
        "/img/medical-3.svg",
        "/img/medical-4.svg",
        "/img/medical-5.svg",
        "/img/medical-6.svg",
    ];

    return (
        <section className="medical">
            <div className="container">
                <div className="medical-wrapper">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            599: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            767: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1199: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {medicalImages.map((imgSrc, index) => (
                            <SwiperSlide key={index}>
                                <div className="medical-box">
                                    <Image src={imgSrc} alt={`Medical Image ${index + 1}`} width={300} height={200} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MedicalSection;
