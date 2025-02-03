import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/create-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allOrders"],
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),

    getAllOrders: builder.query({
      query: ({ page, limit }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }

        return {
          url: `/orders/all-orders?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["allOrders"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allOrders"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyOrderQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
