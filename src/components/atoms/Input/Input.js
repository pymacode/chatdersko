import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styles';

const Input = ({ name, id, type = 'text' }) => {
  return (
    <StyledInput
      name={name}
      id={id}
      type={type}
      placeholder="Szukaj znajomego"
    />
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};
