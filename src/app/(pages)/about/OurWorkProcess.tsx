import HeadingText from "@/app/components/HeadingText";
import MedicalIcon from "@/app/components/icon/MedicalIcon";
import OwpBox from "./OwpBox";
import Stethoscope from "@/app/components/icon/Stethoscope";
import HealthCarerIcon from "@/app/components/icon/HealthCareIcon";

const boxData = [
    {
        id: 1,
        icon: <MedicalIcon />,
        number: "01",
        title: "Take Appointment",
        description: "We provide janitorial and Medical services complexes for all types sizes of services.",
        imageSrc: "/img/arrow-down.png",
        link: "#"
    },
    {
        id: 2,
        icon: <Stethoscope/>,
        number: "02",
        title: "Medical Checkup",
        description: "We provide janitorial and Medical services complexes for all types sizes of services.",
        imageSrc: "/img/arrow-up.png",
        link: "#"
    },
    {
        id: 3,
        icon: <HealthCarerIcon/>,
        number: "03",
        title: "Started Treatment",
        description: "We provide janitorial and Medical services complexes for all types sizes of services.",
        link: "#"
    }
];
const OurWorkProcess = () => {
    return (
        <section className="owp">
            <div className="container">
                <div className="owp-heading">
                    <HeadingText
                        showTitleIcon={true}
                        addTextIconBgClass={true}
                        title="Our Work Process"
                        description="Proactively revolutionize granular customer service after pandemic internal or organic sources proactive human capital rather."
                    />
                </div>
                <div className="owp-wrapper">
                    {boxData.map((box) => (
                        <OwpBox
                            key={box.id}
                            icon={box.icon}
                            number={box.number}
                            title={box.title}
                            description={box.description}
                            imageSrc={box.imageSrc}
                            link={box.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurWorkProcess;