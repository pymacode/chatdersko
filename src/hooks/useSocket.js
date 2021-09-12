import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessages, addUnreadMessage } from 'store';
import { store } from 'store';
import { useUpdateUnreadMessagesMutation } from 'store';
import { useSaveMessagesMutation } from 'store';

const SocketContext = React.createContext({});

export const SocketProvider = ({ children }) => {
  const socket = io(`${process.env.REACT_APP_SERVER_URL}`, {
    transports: ['websocket', 'polling'],
  });
  const { activeFriend } = useSelector((state) => state.friends);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [updateUnreadMessages] = useUpdateUnreadMessagesMutation();
  const [saveMessages] = useSaveMessagesMutation();
  const messages = useSelector((state) => state.messages);

  socket.on('newmsg', (data) => {
    const aFriend = store.getState().friends.activeFriend;
    if (aFriend && aFriend.id === data.sender) {
      dispatch(
        updateMessages({
          senderID: data.sender,
          content: data.message,
        })
      );
      scrollDown();
    } else {
      dispatch(addUnreadMessage({ from: data.sender, to: data.reciever }));
      updateUnreadMessages({
        id: data.reciever,
        messages: store.getState().unreadMessages,
      });
    }
  });

  const scrollDown = () => {
    const element = document.querySelector('.messages');
    if (element) {
      setTimeout(() => {
        element.scrollTop = element.scrollHeight;
      }, 100);
    }
  };

  const sendMessage = ({ message }, e) => {
    e.target.reset();
    saveMessages({
      userID: user.id,
      friendID: activeFriend.id,
      messages: JSON.stringify([
        ...messages,
        { id: messages.length + 1, senderID: user.id, content: message },
      ]),
    });
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
    scrollDown();
  };

  return (
    <SocketContext.Provider value={{ socket, sendMessage, scrollDown }}>
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
