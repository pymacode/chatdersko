import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useAuth } from 'hooks/useAuth';
import { useSocket } from 'hooks/useSocket';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Root = () => {
  const sendMessage = () => {};
  const auth = useAuth();
  let getMessage = () => {};
  return <>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default Root;
