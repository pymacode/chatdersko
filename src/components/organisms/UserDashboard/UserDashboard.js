import NewFriends from 'components/organisms/NewFriends/NewFriends';
import Profile from 'components/molecules/Profile/Profile';
import React from 'react';
import { Wrapper } from './UserDashboard.styles';
const UserDashboard = () => {
  return (
    <Wrapper>
      <Profile />
      <NewFriends />
    </Wrapper>
  );
};

export default UserDashboard;
