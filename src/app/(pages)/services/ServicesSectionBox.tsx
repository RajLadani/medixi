import RightArrowIcon from "@/app/components/icon/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";

const ServicesSectionBox = ({ imageSrc, title, description, link }:{
      imageSrc: any;
    title: any;
    description: any;
    link: any;
}) => {
    return (
        <div className="services-section-box">
            <div className="services-section-box-img">
                <Image src={imageSrc} alt={title} width={300} height={200} />
            </div>
            <div className="services-section-box-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={link}>Read More <RightArrowIcon/> </Link>
            </div>
        </div>
    );
};
export default ServicesSectionBox;