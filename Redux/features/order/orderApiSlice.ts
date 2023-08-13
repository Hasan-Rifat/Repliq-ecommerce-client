import { apiSlice } from "../api/apiSlice";

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order/",
        method: "POST",
        body: data,
      }),
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: "/order/",
        method: "GET",
      }),
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
    }),
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = OrderApi;
