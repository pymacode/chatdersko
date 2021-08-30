import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Input.styles';

const Input = React.forwardRef(
  (
    {
      isTextarea,
      name,
      id,
      type = 'text',
      placeholder = 'Szukaj znajomego',
      ...props
    },
    ref
  ) =>
    isTextarea ? (
      <StyledInput
        isTextarea={isTextarea}
        as="textarea"
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="OFF"
        {...props}
      />
    ) : (
      <StyledInput
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="OFF"
        {...props}
      />
    )
);

Input.displayName = 'Input';

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isTextarea: PropTypes.bool,
};
