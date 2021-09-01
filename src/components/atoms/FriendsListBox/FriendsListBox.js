import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import { useGetFriendsMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { addFriends, setActiveFriend, store } from 'store';
import { useSocket } from 'hooks/useSocket';
import { removeUnreadMessage } from 'store';
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
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-top: 10px;
  }
`;
const UnreadMessages = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: red;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
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
  const unreadMessages = useSelector((state) => state.unreadMessages);

  return (
    <Wrapper>
      {friends.length > 0 ? (
        friends.map((friend) => (
          <SingleFriend key={friend.id}>
            <UserInfo
              user={friend}
              onClick={() => {
                dispatch(setActiveFriend(friend));
                dispatch(removeUnreadMessage(friend.id));
              }}
            />
            {unreadMessages.length > 0 &&
            unreadMessages[0].from == friend.id ? (
              <UnreadMessages>
                {unreadMessages.filter((x) => x.from == friend.id).length}
              </UnreadMessages>
            ) : null}
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
