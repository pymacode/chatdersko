import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessages } from 'store';

const SocketContext = React.createContext({});

export const SocketProvider = ({ children }) => {
  const socket = io('http://localhost:6060');
  const messages = useSelector((state) => state.messages);
  const { activeFriend } = useSelector((state) => state.friends);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendMessage = ({ message }, e) => {
    socket.emit('msg', {
      sender: user.id,
      reciever: activeFriend.id,
      message,
    });
    dispatch(
      updateMessages({
        senderID: user.id,
        content: message,
      })
    );
    e.target.reset();
  };

  socket.on('newmsg', (data) => {
    console.log(data);
    dispatch(
      updateMessages({
        senderID: data.sender,
        content: data.message,
      })
    );
  });
  // TODO -> Save messages to DataBase after recive. ( server or client side - think about it);

  return (
    <SocketContext.Provider value={{ socket, sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.any,
};

export const useSocket = () => {
  const socket = useContext(SocketContext);

  if (!socket) {
    throw Error('Socket needs to be used inside SocketContext');
  }
  return socket;
};
