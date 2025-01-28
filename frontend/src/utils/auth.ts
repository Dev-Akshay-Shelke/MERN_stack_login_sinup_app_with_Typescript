import axios from "axios";
import { AuthResponse, User } from "../types";

const API_URL = "http://localhost:8000/api/auth";

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (
  user: User,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/signup`, {
    ...user,
    password,
  });
  return response.data;
};

export const logout = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
