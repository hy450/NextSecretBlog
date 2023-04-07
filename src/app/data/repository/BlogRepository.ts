import path from "path";
import { promises as fs } from "fs";
import { BlogData } from "../model/BlogData";

export async function getBlogs(): Promise<BlogData[]> {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export async function getBlog(id: string): Promise<BlogData | undefined> {
  const blogs = await getBlogs();
  return blogs.find((blog: BlogData) => blog.id === id);
}

export async function getBlogContent(name: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), "data", "blogs", name);
  console.log(filePath);
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}
