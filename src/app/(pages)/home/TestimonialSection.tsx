'use client';

import HeadingText from "@/app/components/HeadingText";
import TestimonialBox from "@/app/components/TestimonialBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'; // Import navigation CSS

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            text: "Uniquely strategize 2.0 portals after fully researched vortals. Quickly repurpose front-end metrics through",
            name: "Moris Jonson",
            position: "CEO, Hosak Int. Ltd.",
            avatar: "/img/ceo.jpg",
            rating: 5,
        },
        {
            id: 2,
            text: "From its medieval origins to the digital era, learn everything there is to know about ubiquitous ipsum passage",
            name: "Peter Parker",
            position: "HR, Tech Master Ltd.",
            avatar: "/img/hr.jpg",
            rating: 4,
        },
        {
            id: 3,
            text: "From its medieval origins to the digital era, learn everything there is to know about ubiquitous ipsum passage",
            name: "David Smith",
            position: "Founder, Ajaira LTD.",
            avatar: "/img/founder.jpg",
            rating: 5,
        },
    ];

    return (
        <section className="testimonial">
            <div className="container">
                <div className="testimonial-heading">
                    <HeadingText
                        subtitle="Testimonial"
                        title="Our Patient Says"
                        description="Proactively revolutionize granular customer service after pandemic internal or  organic sources instinctively impact proactive human"
                    />
                </div>
                <div className="testimonial-wrapper">
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={3}
                        loop={true}
                        navigation={true} // Enable navigation
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay, Navigation]} // Add Navigation module
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialBox {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
