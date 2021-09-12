import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChatBox } from 'components/organisms/ChatBox/ChatBox';
import FriendsList from 'components/molecules/FriendsList/FriendsList';
const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  max-width: 600px;
  max-height: 1000px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};

  @media (min-width: 1366px) {
    width: 60%;
    height: 80%;
    max-height: 80%;
    flex-direction: row;
  }
`;

const Messages = () => {
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
