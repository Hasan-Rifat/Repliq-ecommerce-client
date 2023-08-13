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
    baseUrl:
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_LOCAL
        : process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const authToken = getToken(); // Get the token from your Redux store

      if (authToken) {
        const token = authToken.replace(/['"]/g, "");
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

// authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.am9obkBleGFtcGxlMS5jb20.lyxPymSqC1jgZKMoucYmOsL28oROzLL4_Y4AHxsZ0rE',
// authorization: 'Bearer "eyJhbGciOiJIUzI1NiJ9.aGFzYW5yaWZhdEBnbWFpbC5jb20.W4PwbjV9aWpU2qgefOUSK43LBoWsqnShdxigHFa4NKw"',
// 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36 Edg/115.0.1901.203',
