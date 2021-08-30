import React from 'react';
import styled from 'styled-components';
import ChatHeader from 'components/molecules/ChatHeader/ChatHeader';
import ChatForm from 'components/molecules/ChatForm/ChatForm';
import ChatMessages from 'components/molecules/ChatMessages/ChatMessages';
import { useMessages } from 'hooks/useMessages';

const ChatBoxWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatBox = () => {
  const { user } = useMessages();
  return (
    <>
      {user ? (
        <ChatBoxWrapper>
          <ChatHeader />
          <ChatMessages />
          <ChatForm />
        </ChatBoxWrapper>
      ) : null}
    </>
  );
};
