import { apiSlice } from "./apiSlice";

export const peopleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: ({ page = 1 }) => ({
        url: `/people?page=${page + 1}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApiSlice;
