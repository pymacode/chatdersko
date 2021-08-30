import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Components } from './MainTemplate.styles';
import Header from 'components/organisms/Header/Header';
import NewsSection from '../NewsSection/NewsSection';
import Navigation from 'components/organisms/Navigation/Navigation';
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Components>
        {children}
        <NewsSection />
      </Components>
    </Wrapper>
  );
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.any,
};
