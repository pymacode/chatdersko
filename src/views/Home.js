import UserDashboard from 'components/organisms/UserDashboard/UserDashboard';
import UserSettings from 'components/organisms/UserSettings/UserSettings';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  max-width: 600px;
  max-height: 1000px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;

  @media (min-width: 1366px) {
    width: 60%;
    height: 80%;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <UserSettings />
      <UserDashboard />
    </Wrapper>
  );
};

export default Home;
