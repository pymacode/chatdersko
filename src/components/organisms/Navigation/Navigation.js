import React, { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Home, Message, ExitToApp } from '@material-ui/icons';
import {
  NavHandler,
  Wrapper,
  StyledLink,
  LogoutButton,
} from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();

  const handleNavControl = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <NavHandler onClick={handleNavControl}>
        <div />
        <div />
        <div />
      </NavHandler>
      <Wrapper isOpen={isOpen}>
        <StyledLink exact to="/" onClick={handleNavControl}>
          <Home />
        </StyledLink>
        <StyledLink to="/chat" onClick={handleNavControl}>
          <Message />
        </StyledLink>
        <LogoutButton onClick={auth.signOut}>
          <ExitToApp />
        </LogoutButton>
      </Wrapper>
    </>
  );
};

export default Navigation;
