import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

// 댓글 조회
export const fetchComments = async (postId: number) => {
    const response = await axios.get(`${API_URL}/comments/?post=${postId}`);
    return response.data;
};

// 댓글 등록
export const createComment = async (content: { post: number; author: number; content: string; parent?: number }) => {
    const response = await axios.post(`${API_URL}/comments/`, content);
    return response.data;
};
