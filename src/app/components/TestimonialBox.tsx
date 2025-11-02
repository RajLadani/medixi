import Image from "next/image";
import RatingStarSolid from "./icon/RatingStarSolid";
import RatingStarRegular from "./icon/RatingStarRegular";

const TestimonialBox = ({ text, name, position, avatar, rating }:{
     text: any;
    name: any;
    position: any;
    avatar: any;
    rating: any;
}) => {
    return (
        <div className="testimonial-box">
            <div className="testimonial-content">
                <p>{text}</p>
            </div>
            <div className="testimonial-line-img-main">
                <div className="testimonial-box-line"></div>
                <div className="testimonial-box-img">
                    <Image src={avatar} alt={name} width={45} height={45} />
                </div>
            </div>
            <div className="testimonial-box-name-main">
                <div className="testimonial-box-name">
                    <h5>{name}</h5>
                    <p>{position}</p>
                </div>
                <div className="testimonial-rating-star">
                    {Array.from({ length: 5 }, (_, index) =>
                        index < rating ? (
                            <RatingStarSolid key={index} />
                        ) : (
                            <RatingStarRegular key={index} />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialBox;
