import { baseApi } from "../../api/baseApi";
const supplyApi = baseApi.injectEndpoints({
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
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
    deleteProject: builder.mutation({
      query: (options) => {
        return {
          url: `/projects/${options?.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["projects"],
    }),
    updateProject: builder.mutation({
      query: (options) => {
        return {
          url: `/projects/${options?.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["projects"],
    }),
  }),
});
export const {
  useGetProjectsQuery,
  useGetSuppliesQuery,
  useGetReliefsQuery,
  useGetSingleReliefQuery,
  useAddSuppliesMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = supplyApi;
