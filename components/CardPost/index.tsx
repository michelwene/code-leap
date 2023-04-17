import { Post } from "@/types/Post";
import { CardHeader } from "./CardHeader";

interface CardProps {
  post: Post;
}

export function CardPost({ post }: CardProps) {
  return (
    <div>
      <CardHeader post={post} />
      <div className="border-l border-b border-r border-[#999999] border-solid rounded-br-2xl rounded-bl-2xl p-6">
        asd
      </div>
    </div>
  );
}
