import JsonDataSource from "../dataSource/JsonDataSource";
import { BlogRepository, BlogRepositoryImpl } from "./BlogRepository";

const blogRepository: BlogRepository = new BlogRepositoryImpl(
  new JsonDataSource(["data", "blogs.json"])
);

export { blogRepository };
