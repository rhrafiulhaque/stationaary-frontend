import { baseApi } from "../../api/baseApi";

const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBrand: builder.mutation({
      query: (brand) => ({
        url: "/brands/create-brand",
        method: "POST",
        body: brand,
      }),
      invalidatesTags: ["allBrands"],
    }),
    getAllBrands: builder.query({
      query: ({ page, limit }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }

        return {
          url: `/brands/all-brands?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["allBrands"],
    }),
    updateBrand: builder.mutation({
      query: ({ brandId, data }) => ({
        url: `/brands/${brandId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allBrands"],
    }),

    deleteBrand: builder.mutation({
      query: (brandId) => ({
        url: `/brands/${brandId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allBrands"],
    }),
  }),
});

export const {
  useAddBrandMutation,
  useGetAllBrandsQuery,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandApi;
