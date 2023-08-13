import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AuthHeaders {
  Authorization?: string;
}

const getToken = (): string | null => {
  // Replace this with your actual method of getting the token
  return localStorage.getItem("token");
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_API_URL,
    prepareHeaders: (headers) => {
      const authToken = getToken(); // Get the token from your Redux store
      if (authToken) {
        headers.set("Authorization", `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
