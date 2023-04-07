import { notFound } from "next/navigation";
import Image from "next/image";
import MarkDownContentView from "@/app/components/markdonw_content";
import { getBlog, getBlogContent } from "@/app/data/repository/BlogRepository";

type Props = {
  params: {
    slug: string;
  };
};

// This page is post detail page
const PostDetailPage = async ({ params }: Props) => {
  const blog = await getBlog(params.slug);
  const markdown = await getBlogContent(blog?.contentPath ?? "");

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-screen-xl mx-auto pt-2">
      <h1 className="py-4 text-2xl font-bold">{blog.title}</h1>

      <Image
        src={`/blog/${blog.imagePath ?? "/blog/pexels-photo-2662116.jpeg"}`}
        alt={blog.title}
        width={1024}
        height={600}
        className="mx-auto py-6 max-w-screen-lg rounded-xl object-fit"
      />

      <MarkDownContentView markdown={markdown} />
    </article>
  );
};

// export async function generateStaticParams() {
//   const blogs = await getBlogs();
//   return blogs.map((blog) => ({ params: { slug: blog.id } }));
// }

export default PostDetailPage;
