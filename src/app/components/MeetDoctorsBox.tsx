import Link from "next/link";
import FaceBook from "./icon/FaceBook";
import Twitter from "./icon/Twitter";
import BasketBallIcon from "./icon/BasketBall";
import PhoneIcon from "./icon/PhoneIcon";
import MailIcon from "./icon/MailIcon";

const MeetDoctorsBox = ({ doctor }:{
    doctor: any;
}) => {
    return (
        <div className="meet-doctors-box">
            <div className="meet-doctors-box-img">
                <img src={doctor.image} alt={doctor.name} />
                <div className="meet-doctors-box-link">
                    <Link href={doctor.socialLinks.facebook} target="_blank">
                        <FaceBook />
                    </Link>
                    <Link href={doctor.socialLinks.twitter} target="_blank">
                        <Twitter />
                    </Link>
                    <Link href={doctor.socialLinks.basketball} target="_blank">
                        <BasketBallIcon />
                    </Link>
                </div>
            </div>
            <div className="meet-doctors-box-text">
                <div className="doctor-name">
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialization}</p>
                </div>
                <p>{doctor.description}</p>
                <div className="doctor-number-mail">
                    <div className="doctor-number">
                        <PhoneIcon />
                        <Link href={`tel:${doctor.phone}`}>{doctor.phone}</Link>
                    </div>
                    <div className="doctor-number">
                        <MailIcon />
                        <Link href={`mailto:${doctor.email}`}>{doctor.email}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetDoctorsBox;
