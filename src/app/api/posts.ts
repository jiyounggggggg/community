import { axiosRequest } from "~/utils/api";
import type { PostData } from "~/types/posts";

export async function createPost(data: PostData, token: string) {
    return axiosRequest(`/posts/`, {
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export async function getPosts(boardId: number) {
    return axiosRequest(`/posts/?boardId=${boardId}`);
}

export async function getPost(postId: number) {
    return axiosRequest(`/posts/${postId}/`);
}