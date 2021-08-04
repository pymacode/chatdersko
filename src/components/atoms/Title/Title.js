import React from 'react';
import PropTypes from 'prop-types';
import { TitleText } from './Title.styles';
const Title = ({ children, isBig = false }) => (
  <TitleText isBig={isBig}>{children}</TitleText>
);

export default Title;

Title.propTypes = {
  children: PropTypes.string,
  isBig: PropTypes.bool,
};
