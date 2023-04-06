import path from "path";
import { promises as fs } from "fs";
import JsonDataSource from "../dataSource/JsonDataSource";
import { BlogData } from "../model/BlogData";

// create interface for BlogRepository.ts
// This interface has functions that getBlogs, getBlog(id:string)
export interface BlogRepository {
  getBlogs: () => Promise<BlogData[]>;
  getBlog: (id: string) => Promise<BlogData | undefined>;
  getBlogContent: (name: string) => Promise<string | null>;
}

// This is a class BlogRepositoryImpl
// This class implents BlogRepository interface
export class BlogRepositoryImpl implements BlogRepository {
  private dataSource: JsonDataSource;
  constructor(dataSource: JsonDataSource) {
    this.dataSource = dataSource;
  }

  async getBlogs(): Promise<BlogData[]> {
    const data = await this.dataSource.readData();
    return data;
  }

  async getBlog(id: string): Promise<BlogData | undefined> {
    const data = await this.dataSource.readData();
    return data.find((blog: BlogData) => blog.id === id);
  }

  async getBlogContentById(id: string): Promise<string | null> {
    const blog = await this.getBlog(id);
    return this.getBlogContent(blog?.contentPath ?? "none.md");
  }

  async getBlogContent(name: string): Promise<string | null> {
    const filePath = path.join(process.cwd(), "data", "blogs", name);
    try {
      const data = await fs.readFile(filePath, "utf8");
      return data;
    } catch (error) {
      return null;
    }
  }
}
