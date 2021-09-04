import NewFriends from 'components/molecules/NewFriends/NewFriends';
import Profile from 'components/molecules/Profile/Profile';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const UserDashboard = () => {
  return (
    <Wrapper>
      <Profile />
      <NewFriends />
    </Wrapper>
  );
};

export default UserDashboard;
