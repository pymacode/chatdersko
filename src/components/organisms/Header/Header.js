import React from 'react';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import HeaderButtons from 'components/molecules/HeaderButtons/HeaderButtons';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { HeaderWrapper, RightSide } from './Header.styles';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const auth = useAuth();
  return (
    <HeaderWrapper>
      <SearchBar />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/chat">Chat</NavLink>

      <RightSide>
        <UserInfo user={auth.user} />
        <HeaderButtons />
      </RightSide>
    </HeaderWrapper>
  );
};

export default Header;
