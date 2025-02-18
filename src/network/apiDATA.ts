import { ResponseUsers } from "@/models/responseUsers";
import { baseURL_DATA } from "@/utils/baseURLs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiDATA = createApi({
  reducerPath: "apiDATA",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL_DATA,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ResponseUsers, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: `/randomusers?page=${page}&limit=${limit}`,
        method: "GET",
        headers: { accept: "application/json" },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = apiDATA;
