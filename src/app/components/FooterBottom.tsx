import Link from "next/link";

const FooterBottom = () => {
    return (
        <div className="footer-bottom-main">
            <div className="container">
                <div className="footer-bottom-wrapper">
                    <div className="footer-left">
                        <p>Copyright 2023 <Link href={"#"}>Medixi.</Link> All Rights Reserved by <Link href={""}>Vecuro</Link></p>
                    </div>
                    <div className="footer-right">
                        <Link href={"#"}>Privacy</Link>
                        <Link href={"#"}>Terms</Link>
                        <Link href={"#"}>Contact</Link>
                        <Link href={"#"}>About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterBottom;