import RightArrowIcon from "@/app/components/icon/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
const OwpBox = ({
  icon,
  number,
  title,
  description,
  imageSrc,
  link,
}: {
//   id: number;
  icon: JSX.Element;
  number: string;
  title: string;
  description: string;
  imageSrc:  any ;
  link: string;
}) => {
  return (
    <div className="owp-box">
      {imageSrc && (
        <div className="oep-arrow-img">
          <Image
            src={imageSrc || "/images/default.jpg"}
            alt={title}
            width={300}
            height={200}
          />
        </div>
      )}
      <div className="owp-box-icon">
        {icon}
        <div className="box-number">
          <span>{number}</span>
        </div>
      </div>
      <div className="owp-box-text">
        <div className="oep-box-title">
          <h3>{title}</h3>
        </div>
        <div className="owp-box-description">
          <p>{description}</p>
        </div>
      </div>

      <Link href={link}>
        Get In Touch <RightArrowIcon />
      </Link>
    </div>
  );
};

export default OwpBox;
