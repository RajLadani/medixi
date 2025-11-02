import PagesBanner from "@/app/components/PagesBanner";
import BlogBox from "../blog/Blogbox";
import Link from "next/link";
import PopularPostBox from "../blog/PopularBox";
import CategoriesBox from "../blog/CategoriesBox";
import Image from "next/image";
const blogData = [
    {
        id: 1,
        image: "/img/blog-1.jpg",
        views: 1386,
        comments: 2,
        date: "30 January 2023",
        title: "Lifestyle conditions to have today’s all time and age is diabetes for good health.",
        description: "Conveniently whiteboard team building architectures without sticky partnerships. Energistically redefine emerging paradigms after resource sucking bandwidth. Dramatically supply transparent expertise whereas market-driven testing procedures. Professionally visualize client-centric services via inexpensive models.",
    },
];
const popularPosts = [
    {
        id: 1,
        image: "/img/popular-1.jpg",
        title: "Lifestyle conditions to have today’s all",
        date: "30 January 2023",
    },
    {
        id: 2,
        image: "/img/Popular-2.jpg",
        title: "Surprising body cues that could be",
        date: "30 January 2023",
    },
    {
        id: 3,
        image: "/img/Popular-3.jpg",
        title: "Everyone realizes why a new common",
        date: "23 January 2023",
    },
    {
        id: 4,
        image: "/img/Popular-4.jpg",
        title: "Every person is in charge of",
        date: "23 January 2023",
    },
];

const categories = [
    { id: 1, name: "Acupressure", count: 1 },
    { id: 2, name: "Allgemein", count: 1 },
    { id: 3, name: "Blood", count: 1 },
    { id: 4, name: "Food", count: 1 },
    { id: 5, name: "Health", count: 1 },
    { id: 6, name: "Mental Health", count: 2 },
    { id: 7, name: "Therapy", count: 1 },
    { id: 8, name: "Walking", count: 2 },
];
const BlogDetails = () => {
    return (
        <>
            <PagesBanner
                title="Blog Details"
                currentPage="Lifestyle conditions to have today’s all time and age is diabetes for good health."
                breadcrumbLinks={[
                    { href: "/blog", label: "Mental Health" },
                ]}
            />
            <section className="blog-details">
                <div className="container">
                    <div className="blog-details-wrapper">
                        <div className="blog-details-left">
                            {blogData.map((post) => (
                                <BlogBox key={post.id} data={post} />
                            ))}
                            <div className="text-box">
                                <h2>Continually restore premier strategic theme areas through magnetic customer service. Holisticly embrace optimal processes without B2C</h2>
                                <h3>Sowat Ahsan</h3>
                            </div>
                            <p>Objectively optimize strategic technology without 2.0 bandwidth. Monotonectally administrate user-centric results whereas performance based manufactured products. Continually restore premier strategic theme areas through magnetic customer service. Holisticly embrace optimal processes without B2C infomediaries. Holisticly deploy future-proof leadership skills rather than vertical technologies.</p>
                            <Image src="/img/blog-details.jpg" alt="" width={805} height={481} />
                            <h6>High quality for timely markets.</h6>
                            <p>Interactief toegang bieden tot front-end netwerken ten opzichte van potentiële infomediairs. Breid onderscheidende methoden van empowerment volledig uit via covalente strategische themagebieden die het aangepaste proces ynamisch aanpassen.Dramatically supply transparent expertise whereas market</p>
                            <p>Interactief toegang bieden tot front-end netwerken ten opzichte van potentiële infomediairs. Breid onderscheidende methoden van empowerment volledig uit via covalente strategische themagebieden die het aangepaste proces ynamisch aanpassen.Dramatically supply transparent expertise whereas market</p>
                        </div>
                        <div className="blog-right">
                            <div className="search">
                                <h5>Search</h5>
                                <div className="search-box-main">
                                    <input type="text" placeholder="Search Here" />
                                    <Link href={"#"}>Search</Link>
                                </div>
                            </div>
                            <div className="categories">
                                <h3>Categories</h3>
                                <div className="categories-box-main">
                                    {categories.map((category) => (
                                        <CategoriesBox key={category.id} data={category} />
                                    ))}
                                </div>
                            </div>
                            <div className="popular-post">
                                <h3>Popular Posts</h3>
                                <div className="popular-post-box-main">
                                    {popularPosts.map((post) => (
                                        <PopularPostBox key={post.id} data={post} />
                                    ))}
                                </div>
                            </div>
                            <div className="popular-tags">
                                <h3>Popular Tags</h3>
                                <div className="popular-tags-box">
                                    <Link href={"#"}>Blood</Link>
                                    <Link href={"#"}>Body</Link>
                                    <Link href={"#"}>Eye</Link>
                                    <Link href={"#"}>Health</Link>
                                    <Link href={"#"}>Teeth</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogDetails;