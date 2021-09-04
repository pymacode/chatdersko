import React from 'react';
import styled from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { SingleFriend } from 'components/atoms/FriendsListBox/FriendsListBox';

const StyledSingleFriend = styled(SingleFriend)`
  padding: 0;
  /* background-color: ${({ theme }) => `${theme.colors.purpleRGB}0.8)`}; */
  @media (orientation: landscape) and (max-height: 628px) {
    img {
      display: none;
    }
  }
`;

const ChatBoxHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.yellowRGB}0.2)`};
  background-color: ${({ theme }) => `${theme.colors.navyRGB}0.8)`};
  align-items: center;
  justify-content: center;

  @media (min-width: 1366px) {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    border: none;
    padding-bottom: 5px;
  }
`;
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
