import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './CircleButton.styles';

const CircleButton = ({ children, onClick }) => {
  return (
    <ButtonWrapper as="button" onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default CircleButton;

CircleButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
};
