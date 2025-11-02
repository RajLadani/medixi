import Image from "next/image";
import EyeIcon from "./icon/EyeIcon";

const CaseStudyBox = ({ image, title, description }) => {
    return (
        <div className="case-study-box">
            <div className="case-study-img">
                <Image src={image} alt={title} width={500} height={300} />
                <div className="case-study-text">
                    <p>{description}</p>
                    <h5>{title}</h5>
                    <div className="widget-case-study">
                        <EyeIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyBox;
