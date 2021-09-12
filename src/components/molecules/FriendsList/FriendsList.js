import FriendsListBox from 'components/atoms/FriendsListBox/FriendsListBox';
import React from 'react';
import { FriendsListWrapper } from './FriendsList.styles';

const FriendsList = () => {
  return (
    <FriendsListWrapper>
      <FriendsListBox />
    </FriendsListWrapper>
  );
};

export default FriendsList;
