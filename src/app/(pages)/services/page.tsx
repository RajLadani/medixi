import PagesBanner from "@/app/components/PagesBanner";
import ServicesSection from "./ServicesSection";
import OurWorkProcess from "../about/OurWorkProcess";
import MeetDoctors from "../about/MeetDoctors";

const Services = () => {
    return (
        <>
            <PagesBanner title="Services" currentPage="Services" />
            <ServicesSection />
            <OurWorkProcess />
            <MeetDoctors />
        </>
    )
}

export default Services;