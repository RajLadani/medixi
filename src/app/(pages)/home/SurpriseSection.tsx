import Link from "next/link";
import HeadingText from "../../components/HeadingText";
import PhoneIcon from "../../components/icon/PhoneIcon";
import Button from "../../components/Button.";
import Image from "next/image";
import surprise from '/public/img/surprise.jpg';
import PlayIcon from "../../components/icon/PlayIcon";

const SurpriseSection = ({ className = "" }) => {
    return (
        <section className={`surprise ${className}`}>
            <div className="container">
                <div className="surprise-wrapper">
                    <div className="surprise-left">
                        <HeadingText
                            subtitle="Medical & General Care!"
                            title="Surprise your body with"
                            highlight="extra care."
                            description="Rapidiously evisculate user-centric functionalities for highly efficient interfaces. Competently leverage other's scalable technology before synergistic manufactured products."
                        />
                        <div className="surprise-contact-main">
                            <div className="surprise-contact-main-icon">
                                <PhoneIcon />
                            </div>
                            <div className="surprise-contact-main-text">
                                <h4>CALL ANYTIME 24/7</h4>
                                <Link href={"#"}>+44-1234-5996</Link>
                            </div>
                        </div>
                        <Button
                            text="Learn More"
                            variant="secondary"
                        />
                    </div>
                    <div className="surprise-right">
                        <div className="surprise-right-img">
                            <Image src={surprise} alt="" />
                            <div className="surprise-right-img-play-icon">
                                <PlayIcon />
                            </div>
                        </div>
                        <div className="surprise-right-img-experience">
                            <span>10+</span>
                            <h6>Year Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SurpriseSection;
