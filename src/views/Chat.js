import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChatBox } from 'components/organisms/ChatBox/ChatBox';
import FriendsList from 'components/molecules/FriendsList/FriendsList';
const Wrapper = styled.div`
  width: 50%;
  height: 80%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Messages = ({ text }) => {
  return (
    <Wrapper>
      <FriendsList />
      <ChatBox />
    </Wrapper>
  );
};

Messages.propTypes = {
  text: PropTypes.string,
};
export default Messages;
