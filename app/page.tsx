"use client";
import { Navigation } from "@/components/navigation";
import { Window } from "@/components/ui/window";
import { useSelector } from "react-redux";
import type { RootState } from "./GlobalRedux/store";

export default function Home() {
  const musicOpacity = useSelector((state: RootState) => state.window.music);
  const moviesOpacity = useSelector((state: RootState) => state.window.movies);
  const comicsOpacity = useSelector((state: RootState) => state.window.comics);
  const internetOpacity = useSelector(
    (state: RootState) => state.window.internet
  );
  const blogOpacity = useSelector((state: RootState) => state.window.blog);

  return (
    <main className="relative w-full h-screen">
      <Navigation />
      <Window category="music" opacity={musicOpacity} />
      <Window category="movies" opacity={moviesOpacity} />
      <Window category="comics" opacity={comicsOpacity} />
      <Window category="internet" opacity={internetOpacity} />
      <Window category="blog" opacity={blogOpacity} />
    </main>
  );
}
