import IconButton from "@/components/IconButton";
import { Post } from "@/types/Post";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
interface CardHeaderProps {
  post: Post;
}

export function CardHeader({ post }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-[#7695EC] p-6 rounded-tr-2xl rounded-tl-2xl gap-4">
      <div>
        <h3 className="font-bold text-[22px] leading-[26px] text-white">
          {post.title}
        </h3>
      </div>
      <div className="flex gap-6">
        <IconButton
          icon={<MdDeleteForever className="text-[30px] text-white" />}
        />
        <IconButton icon={<TiEdit className="text-[30px] text-white" />} />
      </div>
    </div>
  );
}
