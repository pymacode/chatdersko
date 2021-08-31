import {
  configureStore,
  getDefaultMiddleware,
  createSlice,
} from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const massagingSystemApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:6060/',
  }),
  tagTypes: ['Messages', 'Friends'],
  endpoints: (builder) => ({
    getMessages: builder.mutation({
      query: (body) => ({
        url: 'messages',
        method: 'POST',
        body,
      }),
      providesTags: ['Messages'],
    }),
    getFriends: builder.mutation({
      query: (body) => ({
        url: 'friends',
        method: 'POST',
        body,
      }),
      providesTags: ['Friends'],
    }),
  }),
});

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    activeFriend: null,
  },
  reducers: {
    addFriends: {
      reducer: (state, action) => {
        state.friends = action.payload;
      },
    },
    setActiveFriend: {
      reducer: (state, action) => {
        state.activeFriend = action.payload;
      },
    },
    clearState: {
      reducer: (state, action) => {
        return (state = action.payload);
      },
    },
  },
});

export const { addFriends, setActiveFriend, clearState } = friendsSlice.actions;

export const { useGetMessagesMutation, useGetFriendsMutation } =
  massagingSystemApi;

export const store = configureStore({
  reducer: {
    [massagingSystemApi.reducerPath]: massagingSystemApi.reducer,
    friends: friendsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(massagingSystemApi.middleware),
});
