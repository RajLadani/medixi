'use client';
import HeadingText from "@/app/components/HeadingText";
import MeetDoctorsBox from "@/app/components/MeetDoctorsBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const MeetDoctors = () => {
    const doctorData = [
        {
            id: 1,
            name: "Vivi Marian",
            specialization: "Anesthesiologists",
            image: "/img/doctor-1.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
        {
            id: 2,
            name: "Farhan Moris",
            specialization: "Cardiovascular",
            image: "/img/doctor-2.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
        {
            id: 3,
            name: "Jerzzy Lamot",
            specialization: "Dermatologists",
            image: "/img/doctor-3.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
        {
            id: 4,
            name: "Peter Parker",
            specialization: "Endocrinologists",
            image: "/img/doctor-4.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
        {
            id: 5,
            name: "Alex Pulak",
            specialization: "Hematologists",
            image: "/img/doctor-5.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
        {
            id: 6,
            name: "Ricki Martin",
            specialization: "Ophthalmologist",
            image: "/img/doctor-6.jpg",
            description: "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                basketball: "#",
            },
            phone: "+592 2015 20156",
            email: "info.example@mail.com",
        },
    ];

    return (
        <section className="meet-doctor">
            <div className="container">
                <div className="meet-doctor-heading">
                    <HeadingText
                        showTitleIcon={true}
                        addTextIconBgClass={true}
                        title="Meet Our Doctors"
                        description="Proactively revolutionize granular customer service after pandemic internal or organic sources instinctively impact proactive human."
                    />
                </div>
                <div className="meet-doctor-wrapper">
                    <Swiper
                        spaceBetween={30}
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
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {doctorData.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <MeetDoctorsBox doctor={doctor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MeetDoctors;
