import CalendarIcon from "@/app/components/icon/CalendarIcon";
import Image from "next/image";
import Link from "next/link";

const PopularPostBox = ({ data }) => {
    return (
        <div className="popular-post-box">
            <div className="popular-pot-box-img">
                <Image src={data.image} alt={data.title} width={90} height={80} />
            </div>
            <div className="popular-pot-box-text">
                <h4>{data.title}</h4>
                <Link href={"#"}>
                    <CalendarIcon /> {data.date}
                </Link>
            </div>
        </div>
    );
};

export default PopularPostBox;
