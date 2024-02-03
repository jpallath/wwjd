import { Button } from "./button";
import { Cross2Icon, SquareIcon } from "@radix-ui/react-icons";

export const Window = ({ category }: { category: string }) => {
  return (
    <section className="border-2">
      <div className="bg-blue-900 dark:bg-red-900 flex justify-between items-center p-2 rounded-lg">
        <div></div>
        <h2 className="text-white">{category}</h2>
        <ButtonGroup />
      </div>
    </section>
  );
};

export const ButtonGroup = () => {
  return (
    <div className="flex gap-2">
      <Button variant="secondary" size="sm">
        <SquareIcon />
      </Button>
      <Button variant="secondary" size="sm">
        <Cross2Icon />
      </Button>
    </div>
  );
};

// export const TableContents = () => {
//   return (
//     <table className="table-auto border w-full">
//       <thead>
//         <tr>
//           <th>Header 1</th>
//           <th>Header 2</th>
//           <th>Header 3</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="text-center">Data 1</td>
//           <td className="text-center">Data 2</td>
//           <td className="text-center">Data 3</td>
//         </tr>
//         <tr>
//           <td className="text-center">Data 4</td>
//           <td className="text-center">Data 5</td>
//           <td className="text-center">Data 6</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };
