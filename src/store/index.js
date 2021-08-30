import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const messagesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6060/',
  }),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessages: builder.mutation({
      query: (body) => ({
        url: 'messages',
        method: 'POST',
        body,
      }),
      providesTags: ['Messages'],
    }),
  }),
});

export const { useGetMessagesMutation } = messagesApi;

export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messagesApi.middleware),
});
