import Button from "@/app/components/Button.";
import PagesBanner from "@/app/components/PagesBanner";
import Image from "next/image";

const ServicesDetails = () => {
    return (
        <>
            <PagesBanner
                title="Medical Advices & Checkup"
                currentPage="Medical Advices & Checkup"
                breadcrumbLinks={[
                    { href: "/service", label: "Service" },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="services-details-main-img">
                        <Image
                            src="/img/s-details-banner.jpg"
                            alt="Details Banner"
                            width={1920}
                            height={600}
                            priority
                        />
                        <div className="services-details-box-wrapper">
                            <div className="services-details-box">
                                <div className="services-details-box-inner">
                                    <span>Treatment Name</span>
                                    <h3>Heart Transplant</h3>
                                </div>
                                <div className="services-details-box-inner">
                                    <span>Time Duration</span>
                                    <h3>More Than 12 Hours</h3>
                                </div>
                                <div className="services-details-box-inner">
                                    <span>Doctor Name</span>
                                    <h3>Dr. David Smith</h3>
                                </div>
                                <div className="services-details-box-inner">
                                    <Button
                                        text="Appointment"
                                        variant="secondary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-details-text">
                        <p>Continually evisculate goal-oriented portals rather than prospective channels. Appropriately customize excellent imperatives for mission-critical products. revolutionize team building customer service before cross-platform portals. Quickly plagiarize resource maximizing mindshare and state of the art deliverables. Phosfluorescently relationships. Compellingly actualize world-class solutions for high-payoff initiatives.</p>
                        <p>MMonotonectally foster alternative technology vis-a-vis multifunctional leadership. Compellingly orchestrate standards compliant schemas for highly efficient interfaces. Uniquely impact orthogonal customer service whereas standards compliant services. Professionally communicate performance based niche markets without performance based information. Objectively plagiarize prospective networks via ubiquitous web-readiness. Credibly monetize process-centric synergy with intuitive strategic theme areas. Professionally provide access to optimal portals without dynamic supply chains. Enthusiastically re-engineer equity invested imperatives without leveraged alignments. Monotonectally scale parallel methods of empowerment rather than wireless sources. Competently scale robust relationships without maintainable synergy. Completely enhance best-of-breed models for ubiquitous applications. Quickly underwhelm bricks-and-clicks bandwidth with resource maximizing e-services. Appropriately incentivize out-of-the-box relationships after customized users. Continually productivate real-time testing procedures and backward-compatible scenarios. Holisticly predominate enabled ideas whereas future-proof content.</p>
                    </div>
                    <div className="services-details-inner-img">
                        <Image src="/img/s-details-1.jpg" alt="Inner Image 1" width={600} height={400} />
                        <Image src="/img/s-details-2.jpg" alt="Inner Image 2" width={600} height={400} />
                        <Image src="/img/s-details-3.jpg" alt="Inner Image 3" width={600} height={400} />
                    </div>
                    <h4>Granular potentialities oriented</h4>
                    <p>Authoritatively disseminate multimedia based total linkage through market-driven methodologies. Continually transform integrated results vis-a-vis multidisciplinary manufactured products. Appropriately foster fully researched innovation rather than backend supply chains results vis-a-vis multidisciplin ary manufactured. Synergistically underwhelm distinctive strategic theme areas for low-risk high-yield vortals. Seamlessly fabricate high-quality portals and next-generation human capital. Progressively network extensive leadership for client-focused e-markets. Interactively whiteb ilers for cost effective synergy.</p>
                </div>
            </section>
        </>
    )
}

export default ServicesDetails;
