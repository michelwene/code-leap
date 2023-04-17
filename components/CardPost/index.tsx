import { Post } from "@/types/Post";
import { CardHeader } from "./CardHeader";
import CardContentInfo from "./CardContent/CardContentInfo";

interface CardProps {
  post: Post;
}

export function CardPost({ post }: CardProps) {
  return (
    <div>
      <CardHeader post={post} />
      <div className="border-l border-b border-r border-[#999999] border-solid rounded-br-2xl rounded-bl-2xl p-6">
        <CardContentInfo
          username={post.username}
          date={post.created_datetime}
        />
      </div>
    </div>
  );
}
