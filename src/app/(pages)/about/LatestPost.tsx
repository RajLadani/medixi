'use client';
import HeadingText from "@/app/components/HeadingText";
import React from 'react';
import NewsBox from "@/app/components/NewsBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
const LatestPost = () => {
    const newsData = [
        {
            id: 1,
            category: "Therapy",
            author: "wp-medixi",
            title: "Surprising body cues that could be heart shown",
            imageUrl: "/img/news-1.jpg",
            link: "/news/1",
            day: "30",
            month: "jun",
            year: "2025",
        },
        {
            id: 2,
            category: "Acupressure",
            author: "wp-medixi",
            title: "Everyone realizes why a new common language would",
            imageUrl: "/img/news-2.jpg",
            link: "/news/1",
            day: "23",
            month: "jun",
            year: "2023",
        },
        {
            id: 3,
            category: "Mental Health",
            author: "wp-medixi",
            title: "Every person is in charge of maintain their",
            imageUrl: "/img/news-3.jpg",
            link: "/news/1",
            day: "30",
            month: "jun",
            year: "2023",
        },
        {
            id: 4,
            category: "Mental Health",
            author: "wp-medixi",
            title: "Lifestyle conditions to have today’s all time and",
            imageUrl: "/img/news-4.jpg",
            link: "/news/1",
            day: "30",
            month: "jun",
            year: "2023",
        },
    ];
    return (
        <section className="latest-post">
            <div className="container">
                <div className="latest-post-heading">
                    <HeadingText
                        showTitleIcon={true}
                        addTextIconBgClass={true}
                        title="Our Work Process"
                        description="Proactively revolutionize granular customer service after pandemic internal or organic sources proactive human capital rather."
                    />
                </div>
                <div className="updates-news-wrapper">
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
                        {newsData.map((newsItem) => (
                            <SwiperSlide key={newsItem.id}>
                                <NewsBox key={newsItem.id} news={newsItem} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default LatestPost;