import React from 'react';
import styled from 'styled-components';
import ChatHeader from 'components/molecules/ChatHeader/ChatHeader';
import ChatForm from 'components/molecules/ChatForm/ChatForm';
import ChatMessages from 'components/molecules/ChatMessages/ChatMessages';
import { useSelector } from 'react-redux';
import { useSocket } from 'hooks/useSocket';

const ChatBoxWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatBox = () => {
  const { activeFriend } = useSelector((state) => state.friends);
  const { scrollDown } = useSocket();
  React.useEffect(() => {
    scrollDown();
  }, [activeFriend]);
  return (
    <>
      {activeFriend ? (
        <ChatBoxWrapper>
          <ChatHeader />
          <ChatMessages />
          <ChatForm />
        </ChatBoxWrapper>
      ) : null}
    </>
  );
};
