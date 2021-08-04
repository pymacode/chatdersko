import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ContentWrapper.styles';
const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;

ContentWrapper.propTypes = {
  children: PropTypes.any,
};
