import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useGetMessagesMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addMessages } from 'store';

const ChatBoxMessages = styled.div`
  width: 100%;
  height: 75%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${({ theme }) => `${theme.colors.navyRGB}0.8)`};
  //hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //hide scrollbar -- end

  @media screen and (min-width: 1366px) {
    height: 90%;
  }
`;

const MessageBox = styled.div`
  position: relative;
  width: 150px;
  max-width: 150px;
  min-height: 40px;
  border-radius: 15px;
  margin: 5px 15px;
  padding: 5px 10px;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, isSender }) =>
    isSender
      ? `${theme.colors.purpleRGB}0.5)`
      : `${theme.colors.purpleRGB}0.7)`};
  color: ${({ theme, isSender }) =>
    isSender ? 'rgba(255, 255, 255, 0.7)' : theme.colors.navy};
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
`;

const MessageSender = styled.div`
  position: absolute;
  top: -15px;
  left: 10px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.yellowRGB}0.5)`};
`;

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
              <MessageBox key={message.id} isSender>
                {message.content}
              </MessageBox>
            );
          } else {
            return (
              <MessageBox key={message.id}>
                <MessageSender>{activeFriend.name}</MessageSender>
                {message.content}
              </MessageBox>
            );
          }
        })
      ) : (
        <h2>No messages</h2>
      )}
    </ChatBoxMessages>
  );
};

export default ChatMessages;
