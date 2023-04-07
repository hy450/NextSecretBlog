import { Inter } from "next/font/google";
import styles from "./page.module.css";
import FavoriteBlogs from "./components/favorite_blogs";
import RecentBlogs from "./components/recent_blogs";
import { getBlogs } from "./data/repository/BlogRepository";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const blogs = await getBlogs();

  const recents = blogs.slice(0, 6);
  const favorites = blogs.slice(0);

  return (
    <main className="max-w-screen-xl mx-auto">
      <RecentBlogs src={recents} />
      <FavoriteBlogs src={favorites} />
      <div className="mb-[100px]"></div>
    </main>
  );
}
