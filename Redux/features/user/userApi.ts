import { apiSlice } from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        if (result) {
          localStorage.setItem("token", result.data?.token);
        }
      },
    }),
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {},
    }),

    getAllUser: builder.query({
      query: () => ({
        url: "user/",
        method: "GET",
      }),
    }),

    getSingleUser: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
        method: "GET",
      }),
    }),

    userUpdate: builder.mutation({
      query: ({ email, data }) => ({
        url: `/user/${email}`,
        method: "PUT",
        body: data,
      }),
    }),
    userDelete: builder.mutation({
      query: (email) => ({
        url: `/user/${email}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUserUpdateMutation,
  useUserDeleteMutation,
} = userApi;
