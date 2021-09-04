import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSocket } from './useSocket';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from 'store';
import { setUser, removeUser } from 'store';
const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user);
  const token = sessionStorage.getItem('token');
  const userID = sessionStorage.getItem('userID');
  const { socket } = useSocket();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || !userID) return;
    (async () => {
      try {
        const response = await axios.post('http://localhost:6060/user', {
          id: `${userID}`,
        });
        dispatch(setUser(response.data[0]));
        socket.emit('user-refresh', response.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:6060/login', {
        email,
        password,
      });
      dispatch(setUser(response.data[0]));
      sessionStorage.setItem('token', response.data[0].token);
      sessionStorage.setItem('userID', response.data[0].id);
      axios.post('http://localhost:6060/update-user', {
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
      .post('http://localhost:6060/update-user', {
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
