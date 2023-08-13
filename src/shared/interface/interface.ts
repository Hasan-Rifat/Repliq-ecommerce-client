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
    message: string;
  };
}
