import { Post } from "@/types/Post";
import { CardHeader } from "./CardHeader";
import CardContentInfo from "./CardContent/CardContentInfo";
import CardContentDescription from "./CardContent/CardContentDescription";
import { CardProps } from "./types";

export function CardPost({ post, refetch }: CardProps) {
  return (
    <div>
      <CardHeader post={post} refetch={refetch} />
      <div className="border-l border-b border-r border-[#999999] border-solid rounded-br-2xl rounded-bl-2xl p-6">
        <CardContentInfo
          username={post.username}
          date={post.created_datetime}
        />
        <CardContentDescription content={post.content} />
      </div>
    </div>
  );
}
