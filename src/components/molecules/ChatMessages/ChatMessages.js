import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useGetMessagesMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { addMessages } from 'store';
import {
  ChatBoxMessages,
  MessageBox,
  MessageSender,
  NoMessagesText,
} from './ChatMessages.styles';
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
        <NoMessagesText>Write your first message!</NoMessagesText>
      )}
    </ChatBoxMessages>
  );
};

export default ChatMessages;
