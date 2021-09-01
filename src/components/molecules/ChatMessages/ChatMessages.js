import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';
import React from 'react';
import { useGetMessagesMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addMessages } from 'store';

const ChatBoxMessages = styled.div`
  width: 100%;
  height: 80%;
  max-height: 700px;
  padding-top: 10px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};
  border-right: 3px solid ${({ theme }) => theme.colors.white};
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.default};

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
    isSender ? theme.colors.black : theme.colors.white};
  color: ${({ theme, isSender }) =>
    isSender ? theme.colors.white : theme.colors.black};
  margin: 5px 15px;
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
`;

const Message = ({ children, isSender }) => {
  return <MessageBox isSender={isSender}>{children}</MessageBox>;
};

const ChatMessages = () => {
  const messages = useSelector((state) => state.messages);
  const { activeFriend } = useSelector((state) => state.friends);
  const auth = useAuth();
  const [getMessages] = useGetMessagesMutation();
  const dispatch = useDispatch();

  React.useEffect(async () => {
    try {
      if (!activeFriend) return;
      const { data } = await getMessages({
        userID: auth.user.id,
        friendID: activeFriend.id,
      });
      if (data.length > 0) {
        dispatch(addMessages(JSON.parse(data[0].messages)));
      } else {
        dispatch(addMessages([]));
      }
    } catch (e) {
      console.log(e);
    }

    return () => {
      dispatch(addMessages([]));
    };
  }, [activeFriend]);

  return (
    <ChatBoxMessages className="messages">
      {messages.length > 0 ? (
        messages.map((message) => {
          if (message.senderID === auth.user.id) {
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
