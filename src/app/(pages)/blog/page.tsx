import PagesBanner from "@/app/components/PagesBanner";
import CategoriesBox from "./CategoriesBox";
import BlogBox from "./Blogbox";
import PopularPostBox from "./PopularBox";
import Link from "next/link";

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
    {
        id: 2,
        image: "/img/blog-2.jpg",
        views: 917,
        comments: 2,
        date: "15 February 2023",
        title: "Surprising body cues that could be heart shown concern for all.",
        description: "Conveniently whiteboard team building architectures without sticky partnerships. Energistically redefine emerging paradigms after resource sucking bandwidth. Dramatically supply transparent expertise whereas market-driven testing procedures. Professionally visualize client-centric services via inexpensive models.",
    },
    {
        id: 3,
        image: "/img/blog-3.jpg",
        views: 787,
        comments: 1,
        date: "10 March 2023",
        title: "Everyone realizes why a new common language would be desirable: one could refuse.",
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

const Blog = () => {
    return (
        <>
            <PagesBanner title="Blog" currentPage="Blog" />
            <section className="blog">
                <div className="container">
                    <div className="blog-wrapper">
                        <div className="blog-left">
                            {blogData.map((post) => (
                                <BlogBox key={post.id} data={post} />
                            ))}
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
    );
};

export default Blog;
