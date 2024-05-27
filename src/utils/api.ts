import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

// 댓글
export interface Comment {
    post: number;
    author: string;
    content: string;
    parent: number | undefined;
    created_at: string;
    updated_at: string;
}

// 댓글 조회
export const fetchComments = async (postId: number) => {
    const response = await axios.get(`${API_URL}/comments/?post=${postId}`);
    return response.data;
};

// 댓글 등록
export const createComment = async (content: { post: number; author: string; content: string; parent?: number }) => {
    const response = await axios.post(`${API_URL}/comments/`, content);
    return response.data;
};

// Post
