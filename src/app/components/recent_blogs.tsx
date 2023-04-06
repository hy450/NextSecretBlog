import React from "react";
import { BlogData } from "../data/model/BlogData";
import BlogThumbView from "./blog_thumb_page";

type Props = {
  src: BlogData[];
};
const RecentBlogs = ({ src }: Props) => {
  return (
    <div>
      <h3 className="text-2xl font-bold py-4">Recent Blogs</h3>
      <div className="grid gap-4 grid-cols-4">
        {src.map((blog) => (
          <BlogThumbView src={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
