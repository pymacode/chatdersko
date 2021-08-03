import React from 'react';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import HeaderButtons from 'components/molecules/HeaderButtons/HeaderButtons';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { HeaderWrapper, RightSide } from './Header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <SearchBar />
      <RightSide>
        <UserInfo />
        <HeaderButtons />
      </RightSide>
    </HeaderWrapper>
  );
};

export default Header;
