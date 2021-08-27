import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const Messages = ({ text }) => {
  return (
    <Wrapper>
      <h1>{text}</h1>
    </Wrapper>
  );
};

Messages.propTypes = {
  text: PropTypes.string,
};
export default Messages;
