import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children }) => {
  return <span>{children}</span>;
};

export default Label;

Label.propTypes = {
  children: PropTypes.string,
};
