import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const mess = [
  {
    id: 1,
    senderID: 1,
    content: 'lorem ipsum 1',
  },
  {
    id: 2,
    senderID: 2,
    content: 'lorem ipsum 2',
  },
  {
    id: 3,
    senderID: 1,
    content: 'lorem ipsum 11',
  },
  {
    id: 4,
    senderID: 2,
    content: 'lorem ipsum 22',
  },
  {
    id: 5,
    senderID: 1,
    content: 'lorem ipsum 11',
  },
  {
    id: 6,
    senderID: 2,
    content: 'lorem ipsum 22',
  },
];

const myFriends = [
  {
    id: 1,
    name: 'Adam',
    surname: 'Kowalski',
  },
  {
    id: 2,
    name: 'Dominik',
    surname: 'Kowalski',
  },
];
const MessagesContext = React.createContext({});

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(myFriends);
  }, []);

  const changeUser = (id) => {
    if (id === 1) {
      setUser({ id, name: 'Adam', surname: 'Kowalski' });
    } else if (id === 2) {
      setUser({ id, name: 'Dominik', surname: 'Kowalski' });
    } else return;
    setMessages(mess);
  };

  return (
    <MessagesContext.Provider value={{ messages, user, changeUser, friends }}>
      {children}
    </MessagesContext.Provider>
  );
};

MessagesProvider.propTypes = {
  children: PropTypes.any,
};

export const useMessages = () => {
  const messages = React.useContext(MessagesContext);

  if (!messages) {
    throw Error('Messages can be used only in MessagesContext');
  }
  return messages;
};
