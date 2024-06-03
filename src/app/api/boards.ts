import { axiosRequest } from "~/utils/api";

export async function getBoards() {
  return axiosRequest("/boards/");
}
