import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelStyle = styled.div`
  width: 100%;
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.navy : theme.colors.yellow};
  text-align: center;
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSize.m : theme.fontSize.xl};
`;

const Label = ({ children, isDark, isSmall }) => {
  return (
    <LabelStyle isDark={isDark} isSmall={isSmall}>
      {children}
    </LabelStyle>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.string,
  isDark: PropTypes.bool,
  isSmall: PropTypes.bool,
};
