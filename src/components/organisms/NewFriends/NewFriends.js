import React from 'react';
import { Wrapper } from './NewFriends.styles';
import Invitations from '../../molecules/Invitations/Invitations';
import SearchFriend from '../../molecules/SearchFriend/SearchFriend';
const NewFriends = () => {
  return (
    <Wrapper>
      <SearchFriend />
      <Invitations />
    </Wrapper>
  );
};

export default NewFriends;
