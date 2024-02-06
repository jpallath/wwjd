import { WindowSlice } from "@/app/GlobalRedux/Features/windows/windowSlice";
import { Music } from "../ui/music/music";

interface OptionViewProps {
  category: keyof WindowSlice;
}
export const OptionView: React.FC<OptionViewProps> = ({ category }) => {
  const showCategory = (category: keyof WindowSlice) => {
    switch (category) {
      case "blog":
        return <div> blog</div>;
      case "comics":
        return <div> comics</div>;
      case "internet":
        return <div> internet</div>;
      case "movies":
        return <div> movies</div>;
      default:
        return <Music />;
    }
  };
  return (
    <div className={`bg-background border-2 border-b-rounded-lg `}>
      {showCategory(category)}
    </div>
  );
};
