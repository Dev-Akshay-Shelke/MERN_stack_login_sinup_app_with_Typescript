import axios from "axios";
import { Product } from "../types";

const API_URL = "http://localhost:8000/api/products";

export const getProducts = async (
  page: number,
  limit: number = 10
): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
