import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, limit }) => {
        const params = new URLSearchParams();

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }

        return {
          url: `/users/get-users?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["allUsers"],
    }),
    getMe: builder.query({
      query: () => {
        return {
          url: `/users/get-me`,
          method: "GET",
        };
      },
      providesTags: ["getMe"],
    }),
    blockUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/block`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allUsers"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users/update-user`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getMe"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useGetMeQuery,
  useUpdateUserMutation,
} = userApi;
