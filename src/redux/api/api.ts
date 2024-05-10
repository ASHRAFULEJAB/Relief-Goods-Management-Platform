import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["supplies"],
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    addSupplies: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/create-supply",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (options) => {
        console.log(options);
        return {
          url: `/supplies/${options?.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: (options) => {
        console.log("inside base api", options);
        return {
          url: `/supplies/${options?.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useAddSuppliesMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = baseApi;
