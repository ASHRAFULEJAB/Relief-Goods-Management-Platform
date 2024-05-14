import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-6-backend-relief-goods.vercel.app",

    // http://localhost:5000
    // https://assignment-6-backend-relief-goods.vercel.app
  }),
  tagTypes: ["supplies", "reliefs"],
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
    getReliefs: builder.query({
      query: () => ({
        url: "/relief-goods",
      }),
      providesTags: ["reliefs"],
    }),
    getSingleRelief: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/relief-goods/${id}`,
          method: "GET",
        };
      },
      providesTags: ["reliefs"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetReliefsQuery,
  useGetSingleReliefQuery,
  useAddSuppliesMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = baseApi;
