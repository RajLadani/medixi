"use client";
import { useState } from "react";
import CaseStudyBox from "@/app/components/CaseStudyBox";

const ProjectSection = () => {
    const caseStudies = [
        {
            id: 1,
            image: "/img/case-study-1.jpg",
            title: "Nephrologist",
            description: "Top Ranked",
        },
        {
            id: 2,
            image: "/img/case-study-2.jpg",
            title: "Breath Problem",
            description: "New Surgeon",
        },
        {
            id: 3,
            image: "/img/case-study-3.jpg",
            title: "Heart Surgery",
            description: "Development",
        },
        {
            id: 4,
            image: "/img/case-study-4.jpg",
            title: "Cardiology",
            description: "Top Ranked",
        },
        {
            id: 5,
            image: "/img/case-study-5.jpg",
            title: "Cancer Care",
            description: "Development",
        },
        {
            id: 6,
            image: "/img/case-study-6.jpg",
            title: "Eye Surgery",
            description: "New Surgeon",
        },
        {
            id: 7,
            image: "/img/case-study-7.jpg",
            title: "Orthopadics",
            description: "Ophthalmic",
        },
        {
            id: 8,
            image: "/img/case-study-8.jpg",
            title: "New Surgeon",
            description: "Neurosurgeon",
        },
        {
            id: 9,
            image: "/img/case-study-9.jpg",
            title: "Development",
            description: "Heart Surgery",
        },
    ];

    const [selectedFilter, setSelectedFilter] = useState("All");

    const filters = ["All", "Development", "New Surgeon", "Orthopadics", "Surgery", "Top Ranked"];

    const filteredCaseStudies = selectedFilter === "All"
        ? caseStudies
        : caseStudies.filter((study) => study.description === selectedFilter);

    return (
        <section className="project">
            <div className="container">
                <div className="project-filter-wrapper">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={selectedFilter === filter ? "active" : ""}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="project-wrapper">
                    {filteredCaseStudies.map((caseStudy) => (
                        <CaseStudyBox key={caseStudy.id} {...caseStudy} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
