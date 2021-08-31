import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import { useGetFriendsMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { addFriends, setActiveFriend } from 'store';
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
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.default};
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
  const {
    user: { id },
  } = useAuth();
  const [getFriends] = useGetFriendsMutation();
  const { friends } = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    try {
      const { data } = await getFriends({ id });
      dispatch(addFriends(data));
    } catch (e) {
      console.log(e);
    }

    return () => {
      dispatch(addFriends([]));
    };
  }, []);

  const handleUserChange = (friend) => {
    dispatch(setActiveFriend(friend));
  };
  return (
    <Wrapper>
      {friends.length > 0 ? (
        friends.map((friend) => (
          <SingleFriend key={friend.id}>
            <UserInfo user={friend} onClick={() => handleUserChange(friend)} />
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
