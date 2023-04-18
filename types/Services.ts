export type CreatePost = {
  username: string;
  title: string;
  content: string;
};

export type UpdatePost = {
  title: string;
  content: string;
};

export type Params = {
  page: number;
  limit: number;
};
