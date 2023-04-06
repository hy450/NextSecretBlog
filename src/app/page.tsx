import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { blogRepository } from "./data/repository";
import FavoriteBlogs from "./components/favorite_blogs";
import RecentBlogs from "./components/recent_blogs";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const blogs = await blogRepository.getBlogs();

  const recents = blogs.slice(0, 6);
  const favorites = blogs.slice(0);

  return (
    <main className="max-w-screen-xl mx-auto">
      <RecentBlogs src={recents} />
      <FavoriteBlogs src={favorites} />
    </main>
  );
}
