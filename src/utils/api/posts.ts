import apiClient from "./apiClient";

export interface PostData {
  id: number;
  board: number;
  title: string;
  content: string;
  created_by: number;
  comment_count: number;
}

export const createPost = async (data: PostData, token: string) => {
  const response = await apiClient.post("/posts/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getPosts = async (boardId: number) => {
  // const response = await apiClient.get(`/boards/${boardId}/posts/`);
  const response = await apiClient.get("/posts/");
  return response.data;
};

export const getPost = async (postId: number) => {
  const response = await apiClient.get(`/posts/${postId}/`);
  return response.data;
};
