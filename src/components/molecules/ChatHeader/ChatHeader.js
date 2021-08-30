import { useMessages } from 'hooks/useMessages';
import React from 'react';
import styled from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
const ChatBoxHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};
`;
const ChatHeader = () => {
  const { user } = useMessages();
  return (
    <ChatBoxHeader>
      {user ? <UserInfo user={user} /> : <h1>Select friend</h1>}
    </ChatBoxHeader>
  );
};
export default ChatHeader;
