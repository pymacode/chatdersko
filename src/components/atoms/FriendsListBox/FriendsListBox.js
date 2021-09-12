import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFriend } from 'store';
import { removeUnreadMessage, store } from 'store';
import { useUpdateUnreadMessagesMutation } from 'store';
import { Wrapper, SingleFriend, UnreadMessages } from './FriendsListBox.styles';
const FriendsListBox = () => {
  const { friends } = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const unreadMessages = useSelector((state) => state.unreadMessages);
  const [updateUnreadMessages] = useUpdateUnreadMessagesMutation();
  const auth = useAuth();
  return (
    <Wrapper>
      {friends.length > 0 ? (
        friends.map((friend) => (
          <SingleFriend key={friend.id}>
            <UserInfo
              isSmall
              user={friend}
              onClick={() => {
                dispatch(setActiveFriend(friend));
                dispatch(removeUnreadMessage(friend.id));
                if (unreadMessages.length > 0) {
                  updateUnreadMessages({
                    id: auth.user.id,
                    messages: store.getState().unreadMessages,
                  });
                }
              }}
            />
            {unreadMessages.length > 0
              ? unreadMessages.map((unreadMessage, index) => {
                  if (unreadMessage.from == friend.id) {
                    return (
                      <UnreadMessages key={index}>
                        {
                          unreadMessages.filter(
                            (mess) => mess.from == friend.id
                          ).length
                        }
                      </UnreadMessages>
                    );
                  }
                })
              : null}
          </SingleFriend>
        ))
      ) : (
        <h4>Loading...</h4>
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
