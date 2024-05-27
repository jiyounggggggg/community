import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

// 신규사용자 등록 
export const createUser = async (data: { email: string; username: string; password: string; phone_number?: string }) => {
    const response = await axios.post(`${API_URL}/users/`, data);
    return response.data;
};

