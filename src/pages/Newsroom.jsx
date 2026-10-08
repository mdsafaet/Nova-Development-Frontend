import NewsroomHero from "@/components/news/NewsroomHero";
import NewsroomList from "@/components/news/NewsroomList";

import "@/styles/news.css";


export default function Newsroom() {
  return (
    <>
      <title>
        Newsroom — Nova Development
      </title>

      <NewsroomHero />

      <NewsroomList />
    </>
  );
}