import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './RoundedButton.styles';
const RoundedButton = ({ children, isBig }) => {
  return <Button isBig={isBig}>{children}</Button>;
};

export default RoundedButton;

RoundedButton.propTypes = {
  children: PropTypes.string,
  isBig: PropTypes.bool,
};
