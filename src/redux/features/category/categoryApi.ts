import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/categories/create-category",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["allCategories"],
    }),
    getAllCategories: builder.query({
      query: ({ page, limit }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }

        return {
          url: `/categories/all-categories?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["allCategories"],
    }),
    updateCategory: builder.mutation({
      query: ({ catId, data }) => ({
        url: `/categories/${catId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allCategories"],
    }),

    deleteCategory: builder.mutation({
      query: (catId) => ({
        url: `/categories/${catId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allCategories"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
