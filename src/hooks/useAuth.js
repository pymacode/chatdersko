import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSocket } from './useSocket';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, setUnreadMessages, addFriends } from 'store';
import { setUser, removeUser } from 'store';
import { useGetFriendsMutation } from 'store';
const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.user);
  const token = sessionStorage.getItem('token');
  const userID = sessionStorage.getItem('userID');
  const { socket } = useSocket();
  const [getFriends] = useGetFriendsMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || !userID) return;
    (async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/user`,
          {
            id: `${userID}`,
          }
        );
        const { data } = await getFriends({ id: response.data[0].id });
        dispatch(addFriends(data));
        dispatch(setUser(response.data[0]));
        if (response.data[0].unreadMessages) {
          dispatch(
            setUnreadMessages(JSON.parse(response.data[0].unreadMessages))
          );
        }
        socket.emit('user-refresh', response.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          email,
          password,
        }
      );
      const { data } = await getFriends({ id: response.data[0].id });
      dispatch(addFriends(data));
      dispatch(setUser(response.data[0]));
      if (response.data[0].unreadMessages) {
        dispatch(
          setUnreadMessages(JSON.parse(response.data[0].unreadMessages))
        );
      }
      sessionStorage.setItem('token', response.data[0].token);
      sessionStorage.setItem('userID', response.data[0].id);
      axios.post(`${process.env.REACT_APP_SERVER_URL}/update-user`, {
        id: response.data[0].id,
        isOnline: true,
        socket: socket.id,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const signOut = async () => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/update-user`, {
        id: user.id,
        isOnline: false,
        socket: 'null',
      })
      .then(() => {
        dispatch(removeUser());
        dispatch(clearState({ friends: [], activeFriend: null }));
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userID');
      });
  };
  return (
    <AuthContext.Provider value={{ user, socket, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
