"use client";

import React from "react";
import Image from "next/image";
import { BlogData } from "../data/model/BlogData";
import Link from "next/link";

type Props = {
  src: BlogData;
};

// This is a blog thumbnail view
const BlogThumbView = ({ src }: Props) => {
  const createdDate = new Date(src.createdAt * 1000);
  const date = createdDate.toLocaleDateString("ko-KR");
  return (
    <Link href={`/posts/${src.id}`}>
      <div className="bg-white rounded-lg shadow-lg w-[300px] h-[332px]">
        <Image
          className="object-fit rounded-t-lg"
          src={`/blog/${src.imagePath ?? "/blog/pexels-photo-2662116.jpeg"}`}
          alt={src.title}
          width={300}
          height={200}
        />
        <div className="flex flex-col">
          <div className="text-xl p-2 font-bold">{src.title}</div>
          <div className="text-md ps-2 py-1 font-sm">{src.summary}</div>
          <div className="text-m2 ps-2 py-1 flex-none">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogThumbView;
