import { axiosRequest } from "~/utils/api";

export async function getBoards() {
  return axiosRequest("/boards/");
}

export async function getBoardPosts(boardId: string) {
  return axiosRequest(`/boards/${boardId}/with-posts`);
}