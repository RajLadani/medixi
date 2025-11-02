import TeamIcon from "@/app/components/icon/TeamIcon";

const HospitalDetails = () => {
    return (
        <section className="hospital-detail">
            <div className="container">
                <div className="hospital-detail-wrapper">
                    <div className="hospital-detail-box">
                        <div className="hospital-detail-box-icon">
                            <TeamIcon />
                        </div>
                        <div className="hospital-detail-box-text">
                            <h3>30+</h3>
                            <h4>Years Of Experience</h4>
                            <p>Incubate extensive scenarios without top-line quality vectors. Authoritatively engage</p>
                        </div>
                    </div>
                    <div className="hospital-detail-box">
                        <div className="hospital-detail-box-icon">
                            <TeamIcon />
                        </div>
                        <div className="hospital-detail-box-text">
                            <h3>100+</h3>
                            <h4>Experienced Doctor's</h4>
                            <p>Incubate extensive scenarios without top-line quality vectors. Authoritatively engage</p>
                        </div>
                    </div>
                    <div className="hospital-detail-box">
                        <div className="hospital-detail-box-icon">
                            <TeamIcon />
                        </div>
                        <div className="hospital-detail-box-text">
                            <h3>200+</h3>
                            <h4>Happy Patients</h4>
                            <p>Incubate extensive scenarios without top-line quality vectors. Authoritatively engage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalDetails;
