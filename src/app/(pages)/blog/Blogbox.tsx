import CalendarIcon from "@/app/components/icon/CalendarIcon";
import Comments from "@/app/components/icon/Comments";
import EyeIcon from "@/app/components/icon/EyeIcon";
import RightArrowIcon from "@/app/components/icon/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogBoxProps {
  data: {
    image: string;
    title: string;
    description: string;
    views: number;
    comments: number;
    date: string;
  };
}

const BlogBox: React.FC<BlogBoxProps> = ({ data }) => {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <Image src={data.image} alt={data.title} width={800} height={480} />
      </div>
      <div className="blog-text">
        <div className="blog-link">
          <Link href="#">
            <EyeIcon />
            {data.views} Views
          </Link>
          <Link href="#">
            <Comments />
            {data.comments} Comments
          </Link>
          <Link href="#">
            <CalendarIcon />
            {data.date}
          </Link>
        </div>
        <div className="blog-heading">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <Link href="#">
            Read More <RightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
