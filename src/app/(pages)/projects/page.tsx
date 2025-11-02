import PagesBanner from "@/app/components/PagesBanner";
import ProjectSection from "./ProjectSection";

const projectsPages = () => {
    return (
        <>
            <PagesBanner
                title="Projects"
                currentPage="Projects"
            />
            <ProjectSection />
        </>
    )
}
export default projectsPages;