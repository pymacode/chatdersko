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
    saveMessages: builder.mutation({
      query: (body) => ({
        url: 'save-messages',
        method: 'POST',
        body,
      }),
    }),
    getFriends: builder.mutation({
      query: (body) => ({
        url: 'friends',
        method: 'POST',
        body,
      }),
      providesTags: ['Friends'],
    }),
    updateUnreadMessages: builder.mutation({
      query: (body) => ({
        url: 'update-unread',
        method: 'POST',
        body,
      }),
    }),
    acceptFriendRequest: builder.mutation({
      query: (body) => ({
        url: 'accept-friend',
        method: 'POST',
        body,
      }),
    }),
    declineFriendRequest: builder.mutation({
      query: (body) => ({
        url: 'decline-friend',
        method: 'POST',
        body,
      }),
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

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessages: {
      reducer: (state, action) => {
        return (state = action.payload);
      },
    },
    updateMessages: {
      reducer: (state, action) => [
        ...state,
        {
          id: state.length + 1,
          senderID: action.payload.senderID,
          content: action.payload.content,
        },
      ],
    },
  },
});

const unreadMessagesSlice = createSlice({
  name: 'unreadMessages',
  initialState: [],
  reducers: {
    addUnreadMessage: {
      reducer: (state, action) => [...state, action.payload],
    },
    setUnreadMessages: {
      reducer: (state, action) => (state = action.payload),
    },
    removeUnreadMessage: {
      reducer: (state, action) => {
        return state.filter((item) => item.from !== action.payload);
      },
    },
  },
});

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: {
      reducer: (state, action) => (state = action.payload),
    },
    removeUser: {
      reducer: (state) => (state = null),
    },
    removeFriendRequest: {
      reducer: (state, action) => {
        state.invitations = JSON.stringify(
          JSON.parse(state.invitations).filter(
            (inv) => inv.id != action.payload
          )
        );
        return state;
      },
    },
  },
});

export const { addFriends, setActiveFriend, clearState } = friendsSlice.actions;
export const { addMessages, updateMessages } = messagesSlice.actions;
export const { setUser, removeUser, removeFriendRequest } = userSlice.actions;
export const { setUnreadMessages, removeUnreadMessage, addUnreadMessage } =
  unreadMessagesSlice.actions;

export const {
  useGetMessagesMutation,
  useGetFriendsMutation,
  useSaveMessagesMutation,
  useUpdateUnreadMessagesMutation,
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
} = massagingSystemApi;

export const store = configureStore({
  reducer: {
    [massagingSystemApi.reducerPath]: massagingSystemApi.reducer,
    friends: friendsSlice.reducer,
    messages: messagesSlice.reducer,
    user: userSlice.reducer,
    unreadMessages: unreadMessagesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(massagingSystemApi.middleware),
});
