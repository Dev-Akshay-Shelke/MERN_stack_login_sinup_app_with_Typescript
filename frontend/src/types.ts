export interface User {
  firstName: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface AuthResponse {
  jwtToken: string;
}
