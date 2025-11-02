'use client';
import CaseStudyBox from "@/app/components/CaseStudyBox";
import HeadingText from "@/app/components/HeadingText";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

const CaseStudySection = () => {
    const caseStudies = [
        {
            id: 1,
            image: "/img/case-study-1.jpg",
            title: "Nephrologist",
            description: "Top Ranked",
        },
        {
            id: 2,
            image: "/img/case-study-2.jpg",
            title: "Breath Problem",
            description: "New Surgeon",
        },
        {
            id: 3,
            image: "/img/case-study-3.jpg",
            title: "Heart Surgery",
            description: "Development",
        },
        {
            id: 4,
            image: "/img/case-study-4.jpg",
            title: "Cardiology",
            description: "Top Ranked",
        },
        {
            id: 5,
            image: "/img/case-study-5.jpg",
            title: "Cancer Care",
            description: "Development",
        },
        {
            id: 6,
            image: "/img/case-study-6.jpg",
            title: "Eye Surgery",
            description: "New Surgeon",
        },
    ];

    return (
        <section className="case-study">
            <div className="container">
                <div className="case-study-heading">
                    <HeadingText
                        subtitle="Case Study"
                        title="Latest Projects"
                        description="Proactively revolutionize granular customer service after pandemic internal or organic sources proactive human capital rather."
                    />
                </div>
                <div className="case-study-wrapper">
                    <Swiper spaceBetween={25}
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
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {caseStudies.map((caseStudy) => (
                            <SwiperSlide key={caseStudy.id}>
                                <CaseStudyBox key={caseStudy.id} {...caseStudy} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
