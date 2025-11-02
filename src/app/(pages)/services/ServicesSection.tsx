import ServicesSectionBox from "./ServicesSectionBox";

const ServicesSection = () => {
    const servicesData = [
        {
            imageSrc: "/img/services-1.jpg",
            title: "Hematology and Super Cool",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        },
        {
            imageSrc: "/img/services-2.jpg",
            title: "Family Physician & Doctor",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        },
        {
            imageSrc: "/img/services-3.jpg",
            title: "Laboratory & Pathology Drag",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        },
        {
            imageSrc: "/img/services-4.jpg",
            title: "Heart Checkup or Cardiovascular",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        },
        {
            imageSrc: "/img/h-sr-5.jpg",
            title: "Cardiovascular for Women’s",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        },
        {
            imageSrc: "/img/h-sr-6.jpg",
            title: "Medical Advices & Checkup",
            description: "Continually evisculate goal-oriented portals rather than prospective channels. excellent customize life",
            link: "#"
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-section-wrapper">
                    {servicesData.map((service, index) => (
                        <ServicesSectionBox
                            key={index}
                            imageSrc={service.imageSrc}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ServicesSection;