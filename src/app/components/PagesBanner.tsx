import Link from "next/link";
import HomeIcon from "./icon/HomeIcon";

const PagesBanner = ({ title, currentPage, breadcrumbLinks = [] }:{
     title: any;
    currentPage: any;
    breadcrumbLinks?: object[] | undefined;
}) => {
    return (
        <>
            <section className="pages-banner">
                <div className="container">
                    <div className="pages-banner-wrapper">
                        <h2>{title}</h2>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="pages-banner-box">
                    <div className="pages-banner-box-link-main">
                        <Link href={"/"}>Home</Link>
                        {breadcrumbLinks.map((link:any, index) => (
                            <span key={index}>
                                <span style={{ marginRight: "10px" }}>/</span>
                                <Link href={link.href}>{link.label}</Link>
                            </span>
                        ))}
                        <span className="details">/</span>
                        <span style={{ color:"#07ccec" }}>{currentPage}</span>
                        <div className="pages-banner-box-home-icon">
                            <HomeIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PagesBanner;
