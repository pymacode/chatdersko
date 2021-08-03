import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './CircleButton.styles';

const CircleButton = ({ children }) => {
  return <ButtonWrapper as="button">{children}</ButtonWrapper>;
};

export default CircleButton;

CircleButton.propTypes = {
  children: PropTypes.object,
};
