import { useMessages } from 'hooks/useMessages';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const ChatBoxMessages = styled.div`
  width: 100%;
  max-height: 80%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};
  overflow-y: scroll;

  //hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //hide scrollbar -- end
`;

const MessageBox = styled.div`
  max-width: 270px;
  min-width: 270px;
  min-height: 70px;
  border-radius: 15px;
  padding: 5px 10px;
  background-color: ${({ theme, isSender }) =>
    isSender ? theme.colors.grey : theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  margin: 5px 15px;
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
`;

const Message = ({ children, isSender }) => {
  return <MessageBox isSender={isSender}>{children}</MessageBox>;
};

const ChatMessages = () => {
  const { messages, user } = useMessages();
  return (
    <ChatBoxMessages>
      {messages.length > 0 ? (
        messages.map((message) => {
          if (message.senderID === user.id) {
            return (
              <Message key={message.id} isSender>
                {message.content}
              </Message>
            );
          } else {
            return <Message key={message.id}>{message.content}</Message>;
          }
        })
      ) : (
        <h2>No messages</h2>
      )}
    </ChatBoxMessages>
  );
};

Message.propTypes = {
  children: PropTypes.any,
  isSender: PropTypes.any,
};

export default ChatMessages;
