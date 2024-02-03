import { Navigation } from "@/components/navigation";
import { Window } from "@/components/ui/window";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Navigation />
      <Window category="music" />
      <Window category="movies" />
      <Window category="comics" />
      <Window category="internet" />
      <Window category="blog" />
    </main>
  );
}
