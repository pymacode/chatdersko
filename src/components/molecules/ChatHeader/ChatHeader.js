import React from 'react';
import styled from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
const ChatBoxHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};
`;
const ChatHeader = () => {
  const { activeFriend } = useSelector((state) => state.friends);
  return (
    <ChatBoxHeader>
      {activeFriend ? <UserInfo user={activeFriend} /> : <h1>Select friend</h1>}
    </ChatBoxHeader>
  );
};
export default ChatHeader;
