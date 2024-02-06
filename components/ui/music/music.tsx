import { Input } from "../input";
import { Label } from "../label";

export const Music = () => {
  return (
    <div className="flex flex-col w-full">
      <Search />
      <div className="p-5 flex justify-between">
        <TopChart />
        <div>Favorites</div>
        <div>Playlists</div>
      </div>
      <div className="p-5 flex justify-between">
        <div>tags</div>
        <div>genre</div>
      </div>
    </div>
  );
};

export const Search = () => {
  return (
    <div className="p-5 self-end flex items-center gap-2">
      <Input id="search" placeholder="search..." />
    </div>
  );
};

export const TopChart = () => {
  return <div>Top Chart</div>;
};
