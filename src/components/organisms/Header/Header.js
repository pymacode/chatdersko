import React from 'react';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { HeaderWrapper } from './Header.styles';
import { useAuth } from 'hooks/useAuth';
import Title from 'components/atoms/Title/Title';

const Header = () => {
  const auth = useAuth();
  return (
    <HeaderWrapper>
      <SearchBar />
      <Title>Chatdersko</Title>
      <UserInfo isSmall user={auth.user} />
    </HeaderWrapper>
  );
};

export default Header;
