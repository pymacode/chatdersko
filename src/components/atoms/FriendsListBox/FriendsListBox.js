import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import { useGetFriendsMutation } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { addFriends, setActiveFriend } from 'store';
import { removeUnreadMessage } from 'store';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  //hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //hide scrollbar -- end

  @media (min-width: 1366px) {
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.colors.navy};
    padding-top: 60px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
export const SingleFriend = styled.div`
  position: relative;
  min-width: 130px;
  height: 80%;
  max-height: 50px;
  margin-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  @media (orientation: landscape) and (max-height: 628px) {
    img {
      display: none;
    }
  }
  @media (min-width: 1366px) {
    margin: 0;
    margin-top: 10px;
  }
`;
const scale = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(0.8)
  }
  
`;
const UnreadMessages = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${scale} 1.5s forwards;
`;

const FriendsListBox = () => {
  const { friends } = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const unreadMessages = useSelector((state) => state.unreadMessages);

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
              }}
            />
            {unreadMessages.length > 0
              ? unreadMessages.map((unreadMessage, index) => {
                  if (unreadMessage.from == friend.id) {
                    return (
                      <UnreadMessages key={index}>
                        {
                          unreadMessages.filter((x) => x.from == friend.id)
                            .length
                        }
                      </UnreadMessages>
                    );
                  }
                })
              : null}
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
