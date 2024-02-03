import Image from "next/image";
import musicNote from "./images/musicalNote.svg";
import reel from "./images/reel.svg";
import picture from "./images/picture.svg";
import typewriter from "./images/typewriter.svg";
import map from "./images/map.svg";
import { ModeToggle } from "./modeToggle";

export const Navigation = () => {
  return (
    <div className="absolute bottom-16 flex flex-col w-full md:right-8 md:flex-row md:justify-end md:h-9 gap-4">
      <NavItem image={musicNote} category="music" />
      <NavItem image={reel} category="movies" />
      <NavItem image={picture} category="comics" />
      <NavItem image={map} category="internet" />
      <NavItem image={typewriter} category="blog" />
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

const NavItem = ({ category, image }: { category: string; image: string }) => {
  return (
    <div className="flex group items-center">
      <Image src={image} alt={category} />
      <p className="md:opacity-0 group-hover:opacity-100">{category}</p>
    </div>
  );
};
