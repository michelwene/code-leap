import { toast } from "react-toastify";
import { api } from "./api";

type CreatePost = {
  username: string;
  title: string;
  content: string;
};

type UpdatePost = {
  title: string;
  content: string;
};

type Params = {
  page: number;
  limit: number;
};

export class Services {
  public async getPosts(params: Params) {
    try {
      const offset = (params.page - 1) * params.limit;
      const response = await api.get(`?offset=${offset}&limit=${params.limit}`);
      return response.data;
    } catch (err) {
      toast.error("Error getting posts:" + err);
    }
  }

  public async createPost(data: CreatePost) {
    try {
      const response = await api.post("", data);
      toast.success("Post created successfully");
      return response.data;
    } catch (err) {
      toast.error("Error creating post:" + err);
    }
  }

  public async updatePost(id: number, data: UpdatePost) {
    try {
      const response = await api.patch(`/${id}/`, data);
      toast.success("Post updated successfully");
      return response.data;
    } catch (err) {
      toast.error("Error updating post:" + err);
    }
  }

  public async deletePost(id: number) {
    try {
      await api.delete(`/${id}/`);
      toast.success("Post deleted successfully");
    } catch (err) {
      toast.error("Error deleting post:" + err);
    }
  }
}
