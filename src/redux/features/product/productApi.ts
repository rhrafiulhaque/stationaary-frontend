import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["allProducts"],
    }),
    getAllProducts: builder.query({
      query: ({ page, limit, searchTerm }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        return {
          url: `/products/all-products?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["allProducts"],
    }),
    getProductById: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
      providesTags: ["allProducts"],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/products/${productId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allProducts"],
    }),

    deleteProducts: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allProducts"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDeleteProductsMutation,
} = productApi;
