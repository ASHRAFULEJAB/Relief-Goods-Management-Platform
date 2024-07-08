// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000",
//     credentials: "include",

//     // http://localhost:5000
//     // https://assignment-6-backend-relief-goods.vercel.app
//   }),
//   tagTypes: ["supplies", "reliefs"],
//   endpoints: () => ({}),
// });

// // export const {
// //   useGetSuppliesQuery,
// //   useGetReliefsQuery,
// //   useGetSingleReliefQuery,
// //   useAddSuppliesMutation,
// //   useDeleteSupplyMutation,
// //   useUpdateSupplyMutation,
// // } = baseApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-6-backend-relief-goods.vercel.app",
    credentials: "include",
  }),
  tagTypes: ["supplies", "reliefs", "projects"],
  endpoints: () => ({}),
});
