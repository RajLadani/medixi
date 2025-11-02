import AppointmentSection from "./AppointmentSection";
import BannerSection from "./BannerSection";
import CaseStudySection from "./CaseStudySection";
import HospitalDetails from "./HospitalDetails";
import NewsSection from "./NewsSection";
import ServicesSection from "./ServicesSection";
import SurpriseSection from "./SurpriseSection";
import TestimonialSection from "./TestimonialSection";

const HomePage = () => {

    return (
        <>
            {/* <BannerSection /> */}
            <ServicesSection />
            <SurpriseSection />
            <HospitalDetails />
            <AppointmentSection />
            <CaseStudySection />
            <TestimonialSection />
            <NewsSection />
        </>
    )
}
export default HomePage;

