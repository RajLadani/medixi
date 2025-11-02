import MeetDoctorsBox from "@/app/components/MeetDoctorsBox";
import PagesBanner from "@/app/components/PagesBanner";

const team = () => {
    const doctors = [
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
        <>
            <PagesBanner
                title="Team"
                currentPage="Team"
            />
            <section className="team">
                <div className="container">
                    <div className="team-wrapper">
                        {doctors.map((doctor) => (
                            <MeetDoctorsBox key={doctor.id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default team;