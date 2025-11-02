import { useState} from "react";
import Button from "@/app/components/Button.";
import CalendarIcon from "@/app/components/icon/CalendarIcon";
import ChevaronDownBlue from "@/app/components/icon/ChevaronDownBlue";
import MailIcon from "@/app/components/icon/MailIcon";
import PhoneIcon from "@/app/components/icon/PhoneIcon";
import UserIcon from "@/app/components/icon/UserIcon";

const AppointmentBox = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleFocus = (index) => {
        setActiveIndex(index);
    };

    const handleBlur = () => {
        setActiveIndex(null);
    };

    return (
        <div className="appointment-right">
            <div className="appointment-book-main">
                <div className="appointment-box-text">
                    <h4>Book An Appointment</h4>
                    <p>Please Call Us To Ensure</p>
                </div>
                <div className="appointment-book-call-icon">
                    <PhoneIcon />
                </div>
            </div>
            <div className="appointment-back-wight">
                <div className="appointment-form">
                    {[
                        { placeholder: "Aerospace Medicine", type: "select", options: ["Aerospace Medicine", "Bariatric Surgery", "Infectious Diseases", "Laboratory Medicine"] },
                        { placeholder: "David Smith", type: "select", options: ["David Smith", "Vivi Marian", "Farhan Moris", "Jerzzy Lamot"] },
                        { placeholder: "Your Name", type: "text" },
                        { placeholder: "Email Address", type: "email" },
                        { placeholder: "Your Phone", type: "tel" },
                        { placeholder: "YY/MM/DD", type: "date" },
                    ].map((field, index) => (
                        <div
                            key={index}
                            className={`appointment-from-input-main ${activeIndex === index ? "active-input" : ""}`}
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                        >
                            <div className="appointment-input-type">
                                {field.type === "select" ? (
                                    <select id="input-tags">
                                        {field.options.map((option, idx) => (
                                            <option value={option} key={idx}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={field.type} placeholder={field.placeholder} />
                                )}
                            </div>
                            <div className="appointment-input-icon">
                                {index === 0 || index === 1 ? <ChevaronDownBlue /> :
                                    index === 2 ? <UserIcon /> :
                                        index === 3 ? <MailIcon /> :
                                            index === 4 ? <PhoneIcon /> :
                                                <CalendarIcon />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="appointment-button">
                    <Button
                        text="Make Appointment"
                        variant="secondary"
                    />
                </div>
            </div>
        </div>
    )
}
export default AppointmentBox;
