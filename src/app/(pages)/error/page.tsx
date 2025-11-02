import Button from "@/app/components/Button.";
import PagesBanner from "@/app/components/PagesBanner";
import Image from "next/image";

const Error = () => {
    return (
        <>
            <PagesBanner
                title="404 PAGE"
                currentPage="Error 404"
            />
            <section className="error">
                <div className="container">
                    <div className="error-msg">
                        <h2>Oops! That page can't be found.</h2>
                        <p>Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.</p>
                        <Button
                            text="Return To Home"
                            variant="secondary"
                            href="/"
                        />
                        <div>
                            <Image src="/img/404.png" alt="" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Error;