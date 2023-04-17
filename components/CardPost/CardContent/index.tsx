interface CardContentProps {
  post: Post;
}

export default function CardContent({ post }: CardContentProps) {
  return (
    <div className="p-6">
      <p className="font-normal text-[16px] leading-[19px] text-left">
        {post.content}
      </p>
    </div>
  );
}
