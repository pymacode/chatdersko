import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Components } from './MainTemplate.styles';
import Header from 'components/organisms/Header/Header';
import NewsSection from '../NewsSection/NewsSection';
import FriendsList from '../FriendsList/FriendsList';

const MainTemplate = ({ children, loggedUser }) => {
  return (
    <Wrapper>
      <Header loggedUser={loggedUser} />
      <Components>
        <NewsSection />
        {children}
        <FriendsList loggedUser={loggedUser} />
      </Components>
    </Wrapper>
  );
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.any,
  loggedUser: PropTypes.object,
};
