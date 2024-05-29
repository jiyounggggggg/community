import apiClient from "./apiClient";

export interface BoardData {
  id: number;
  name: number;
  description: number;
}

export const getBoards = async () => {
  const response = await apiClient.get("/boards/");
  return response.data;
};
