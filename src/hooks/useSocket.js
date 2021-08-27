import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';

const SocketContext = React.createContext({});

export const SocketProvider = ({ children }) => {
  const socket = io('http://localhost:6060');

  const sendMessage = (message) => {
    socket.emit('msg', message);
  };

  const updateMessage = (updateMessages) => {
    socket.on('newmsg', (data) => {
      updateMessages(data);
      console.log('getting message');
    });
  };

  return (
    <SocketContext.Provider value={{ socket, sendMessage, updateMessage }}>
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
