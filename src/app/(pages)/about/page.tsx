import PagesBanner from "@/app/components/PagesBanner";
import SurpriseSection from "../home/SurpriseSection";
import OurWorkProcess from "./OurWorkProcess";
import MeetDoctors from "./MeetDoctors";
import LatestPost from "./LatestPost";
import MedicalSection from "./MedicalSection";

const AboutPage = () => {
    return (
        <>
            <PagesBanner title="About" currentPage="About" />
            <SurpriseSection className="bg-none" />
            <OurWorkProcess />
            <MeetDoctors />
            <LatestPost />
            <MedicalSection />
            
        </>
    )
}
export default AboutPage;