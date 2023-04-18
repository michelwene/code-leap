import { Post } from "@/types/Post";

export interface CardContentDescriptionProps {
  content: string;
}

export interface CardContentInfoProps {
  username: string;
  date: Date;
}

export interface CardContentProps {
  post: Post;
}

export interface CardHeaderProps {
  post: Post;
  refetch: () => void;
}

export interface CardProps {
  post: Post;
  refetch: () => void;
}
