import FriendsListBox from 'components/atoms/FriendsListBox/FriendsListBox';
import React from 'react';
import styled from 'styled-components';
const FriendsListWrapper = styled.div`
  width: 30%;
  height: 100%;
`;

const FriendsList = () => {
  return (
    <FriendsListWrapper>
      <FriendsListBox />
    </FriendsListWrapper>
  );
};

export default FriendsList;
