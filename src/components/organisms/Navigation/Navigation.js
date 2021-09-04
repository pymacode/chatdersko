import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Home, Message, ExitToApp } from '@material-ui/icons';

const Wrapper = styled.nav`
  z-index: 1000;
  position: absolute;
  top: 25%;
  left: 0px;
  width: 80px;
  height: 50%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-80px)'};
  transition: transform 1s ease-in-out;

  @media (min-width: 1366px) {
    transform: unset;
  }
`;

const NavHandler = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 15px;
  }

  @media (min-width: 1366px) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.purple};
  transform: rotate(-180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  outline: none;

  @media (min-width: 1366px) {
    width: 50px;
    height: 25px;
    border-radius: 15px;
  }
`;
const activeClassName = 'active-link';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 15px;

  &:first-of-type {
    margin-top: 15px;
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.navy};
    background-color: ${({ theme }) => theme.colors.yellow};
    transition: background-color 0.5s ease-in-out;
  }

  @media (min-width: 1366px) {
    width: 50px;
    height: 25px;
    border-radius: 15px;
  }
`;

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
