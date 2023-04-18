import { Post } from "@/types/Post";

export interface ModalEditPostProps {
  isOpen: boolean;
  handleClose: () => void;
  post: Post;
  refetch: () => void;
}

export type formEditPost = {
  title: string;
  content: string;
};
