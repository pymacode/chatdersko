import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './RoundedButton.styles';
const RoundedButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default RoundedButton;

RoundedButton.propTypes = {
  children: PropTypes.string,
};
