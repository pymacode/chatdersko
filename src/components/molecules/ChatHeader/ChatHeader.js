import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { StyledSingleFriend, ChatBoxHeader } from './ChatHeader.styles';

const ChatHeader = () => {
  const { activeFriend } = useSelector((state) => state.friends);
  return (
    <ChatBoxHeader>
      {activeFriend ? (
        <StyledSingleFriend>
          <UserInfo isSmall user={activeFriend} />
        </StyledSingleFriend>
      ) : (
        <h1>Select friend</h1>
      )}
    </ChatBoxHeader>
  );
};
export default ChatHeader;
