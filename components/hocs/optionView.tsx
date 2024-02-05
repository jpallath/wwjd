import { WindowSlice } from "@/app/GlobalRedux/Features/windows/windowSlice";

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
        return <div>music</div>;
    }
  };
  return (
    <div className={`border-2 bg-white border-black border-b-rounded-lg`}>
      {showCategory(category)}
    </div>
  );
};
