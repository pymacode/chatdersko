import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import HeaderButtons from 'components/molecules/HeaderButtons/HeaderButtons';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { HeaderWrapper, RightSide } from './Header.styles';

const Header = ({ loggedUser }) => {
  return (
    <HeaderWrapper>
      <SearchBar />
      <RightSide>
        <UserInfo loggedUser={loggedUser} />
        <HeaderButtons />
      </RightSide>
    </HeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  loggedUser: PropTypes.object,
};
