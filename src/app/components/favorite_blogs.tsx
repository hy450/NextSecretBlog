"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BlogData } from "../data/model/BlogData";
import BlogThumbView from "./blog_thumb_page";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    paritialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  src: BlogData[];
};

const FavoriteBlogs = ({ src }: Props) => {
  return (
    <div className="pt-4 pb-2">
      <h3 className="text-2xl font-bold py-2">Favorite Blogs</h3>
      <div className="w-full h-full bg-white">
        <Carousel
          partialVisbile={false}
          swipeable={false}
          draggable={false}
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          className="p-4"
        >
          {src.map((blog) => (
            <BlogThumbView src={blog} key={blog.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FavoriteBlogs;
