import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const NewFriends = () => {
  return <Wrapper></Wrapper>;
};

export default NewFriends;
