import IconButton from "../IconButton";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  page: number;
  totalPages: number;
}

export function Pagination({
  nextPage,
  prevPage,
  page,
  totalPages,
}: PaginationProps) {
  return (
    <div className="w-full flex justify-center items-center mt-6">
      <div className="flex gap-6">
        <IconButton
          onClick={prevPage}
          disabled={page === 1}
          icon={
            <AiOutlineLeft
              className={`text-2xl hover:bg-gray-50 active:bg-gray-200 rounded-full p-2 h-10 w-10 ${
                page === 1 ? "opacity-50 pointer-events-none" : ""
              }`}
            />
          }
        />
        <IconButton
          onClick={nextPage}
          icon={
            <AiOutlineRight
              className={`text-2xl hover:bg-gray-50 active:bg-gray-200 rounded-full p-2 h-10 w-10 ${
                totalPages === page ? "opacity-50 pointer-events-none" : ""
              }`}
            />
          }
        />
      </div>
    </div>
  );
}
