import React from 'react';
import styled from 'styled-components';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useAuth } from 'hooks/useAuth';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Root = () => {
  const auth = useAuth();
  return <>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default Root;
