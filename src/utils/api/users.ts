import axios from "axios";
import apiClient from "./apiClient";

export interface User {
  id: number;
  username: string;
  email: string;
  phone_number: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

// 신규사용자 등록
export const createUser = async (data: {
  email: string;
  username: string;
  password: string;
  phone_number?: string;
}) => {
  const response = await axios.post(`${API_URL}/users/`, data);
  return response.data;
};

// 로그인
export const login = async (data: { username: string; password: string }) => {
  const response = await apiClient.post(`${API_URL}/token/`, data);
  return response.data;
};

// 사용자 정보 가져오기
export const fetchCurrentUser = async (token: string) => {
  try {
    const response = await apiClient.get("users/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

// 사용자 정보 가져오기
export const getUserProfile = async (token: string) => {
  const response = await apiClient.get("/users/me/", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const response = await apiClient.post("token/refresh/", {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};
