export interface Item {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ApiResponse {
  data?: {
    message: string | undefined;
  };
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface IUserState {
  user: {
    email: string;
    role: string;
    token: string;
  };
}

export interface IUser {
  email: string;
  role: string;
  token: string;
}
