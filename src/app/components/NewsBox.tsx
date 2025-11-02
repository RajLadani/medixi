import Image from "next/image";
import FolderIcon from "./icon/FolderIcon";
import UserIcon from "./icon/UserIcon";
import Link from "next/link";
import RightArrowIcon from "./icon/RightArrowIcon";

const NewsBox = ({ news }:{
    news:any
}) => {
    return (
        <div className="news-box">
            <div className="news-box-img">
                {news.imageUrl ? (
                    <Image
                        src={news.imageUrl}
                        alt={news.title}
                        width={391}
                        height={313}
                    />
                ) : (
                    <div className="placeholder">Image not available</div> // Fallback for missing image
                )}
            </div>
            <div className="news-box-text">
                <div className="news-text-icon-main">
                    <Link href={"#"}>
                        <FolderIcon />
                        <span>{news.category}</span>
                    </Link>
                    <Link href={"#"}>
                        <UserIcon />
                        <span>{news.author}</span>
                    </Link>
                </div>
                <div className="news-box-text-heading">
                    <Link href={news.link}>
                        <h3>{news.title}</h3>
                    </Link>
                </div>
                <div className="news-box-text-link">
                    <Link href={news.link}>
                        Read more
                        <RightArrowIcon />
                    </Link>
                </div>
            </div>
            <div className="news-box-date">
                <div className="news-box-day">
                    <h6>{news.day}</h6>
                </div>
                <div className="news-box-month">
                    <p>{news.month}</p>
                </div>
                <div className="news-box-year">
                    <p>{news.year}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsBox;
