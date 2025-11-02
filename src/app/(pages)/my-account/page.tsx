import PagesBanner from "@/app/components/PagesBanner";
import Link from "next/link";

const MyAccount =() => {
    return (
        <>
            <PagesBanner
                title="My account"
                currentPage="My account"
            />
            <section className="from">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="form-btn">
                            <button>Log In</button>
                        </div>
                        <div className="form-input">
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div className="form-input">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-checkbox">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="form-btn-login">
                            <Link href={"#"}>Login</Link>
                        </div>
                        <div className="forgot-link">
                            <Link href={"#"}>Forgot Your Password?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyAccount;