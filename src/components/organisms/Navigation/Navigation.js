import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.nav`
  z-index: 10000;
  position: absolute;
  top: 80px;
  left: 0px;
  width: 200px;
  height: calc(100% - 80px);
  background-color: ${({ theme }) => theme.colors.strongerDefault};
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-200px)'};
  transition: transform 1s ease-in-out;

  button {
    position: absolute;
    bottom: 10px;
    background-color: ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;

const NavHandler = styled.div`
  position: absolute;
  width: 60px;
  height: 20px;
  right: -40px;
  top: 100px;
  transform: rotate(90deg);
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  width: 70%;
  height: 25px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  outline: none;
  box-shadow: 1px 1px black;
`;
const activeClassName = 'active-link';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  position: relative;
  margin-bottom: 15px;

  &:first-of-type {
    margin-top: 15px;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    width: 30px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.purple};
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();

  const handleNavControl = () => setIsOpen((prevState) => !prevState);
  return (
    <Wrapper isOpen={isOpen}>
      <NavHandler onClick={handleNavControl}>Menu</NavHandler>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/chat">Chat</StyledLink>
      <LogoutButton onClick={auth.signOut}>Sign out</LogoutButton>
    </Wrapper>
  );
};

export default Navigation;
