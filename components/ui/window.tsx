"use client";
import Draggable from "react-draggable";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import {
  WindowSlice,
  hideWindow,
} from "@/app/GlobalRedux/Features/windows/windowSlice";
import { Cross2Icon, SquareIcon } from "@radix-ui/react-icons";
import { OptionView } from "../hocs/optionView";

export const Window = ({
  category,
  opacity,
}: {
  category: keyof WindowSlice;
  opacity: number;
}) => {
  const windowSettings = (value: number) => {
    if (value) return `opacity-1 z-1 `;
    return `opacity-0 z-0 cursor-none hidden`;
  };

  return (
    <Draggable defaultPosition={{ x: 50, y: 0 }} handle=".handle">
      <div className={`${windowSettings(opacity)} flex flex-column`}>
        <div className={`border-2 border-black absolute w-10/12 `}>
          <div className="bg-blue-900 dark:bg-red-900 flex justify-between items-center p-2 border-b-rounded-lg cursor-move handle">
            <div></div>
            <h2 className="text-white">{category}</h2>
            <ButtonGroup category={category} />
          </div>
          <OptionView category={category} />
        </div>
      </div>
    </Draggable>
  );
};

interface ButtonGroupProps {
  category: keyof WindowSlice;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2">
      <Button variant="secondary" size="sm">
        <SquareIcon />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => dispatch(hideWindow({ feature: category }))}
      >
        <Cross2Icon />
      </Button>
    </div>
  );
};
