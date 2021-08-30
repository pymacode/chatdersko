import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMessages } from 'hooks/useMessages';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.lightBlack};
`;
const SingleFriend = styled.div`
  width: 90%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 10px;
  border-radius: 15px;

  &:first-of-type {
    margin-top: 10px;
  }
`;
const LastMessage = styled.div`
  width: 100%;
  padding-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
`;

const FriendsListBox = () => {
  const { changeUser, friends } = useMessages();
  const { messages } = useMessages();

  const handleUserChange = (id) => {
    changeUser(id);
  };
  return (
    <Wrapper>
      {friends.length > 0 ? (
        friends.map((friend) => (
          <SingleFriend key={friend.id}>
            <UserInfo
              user={friend}
              onClick={() => handleUserChange(friend.id)}
            />
            <LastMessage>last message</LastMessage>
          </SingleFriend>
        ))
      ) : (
        <h4>LOading</h4>
      )}
    </Wrapper>
  );
};

FriendsListBox.propTypes = {
  friend: PropTypes.object,
  lastMessage: PropTypes.string,
  onClick: PropTypes.func,
};

export default FriendsListBox;
