export type FormDataCreatePost = {
  title: string;
  content: string;
};

export interface FormCreatePostProps {
  refetch: () => void;
}
