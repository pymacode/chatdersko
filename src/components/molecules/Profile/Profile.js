import { useAuth } from 'hooks/useAuth';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector, useDispatch } from 'react-redux';
import { addFriends } from 'store';
import { useGetFriendsMutation } from 'store';
import { Person, Message } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
`;
const UserInfoWrapper = styled.div`
  width: 100%;
  height: 25%;
`;
const FriendsCounter = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewMessageAnimation = keyframes`
    0%{
        transform: rotate(0);
        
    }
    10%{
        transform: rotate(10deg);    }
    20%{
        transform: rotate(-10deg);    }
    30%{
        transform: rotate(10deg);    }
    40%{
        transform: rotate(-10deg);    }
    50%{
        transform: rotate(10deg);    }
    60%{
        transform: rotate(-10deg);    }
    70%{
        transform: rotate(10deg);    }
    80%{
        transform: rotate(-10deg);    }
    90%{
        transform: rotate(10deg);    }
    100%{
        transform: rotate(0deg);    }
`;
const NewMessagesButton = styled(NavLink)`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.yellow};
  animation: ${({ isUnread }) =>
    isUnread ? `${NewMessageAnimation} 2.5s 1 ease-in-out` : 'unset'};
`;

const Profile = () => {
  const auth = useAuth();
  const { friends } = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const [getFriends] = useGetFriendsMutation();

  React.useEffect(async () => {
    try {
      const { data } = await getFriends({ id: auth.user.id });
      dispatch(addFriends(data));
    } catch (e) {
      console.log(e);
    }
    return () => {
      dispatch(addFriends([]));
    };
  }, []);

  return (
    <Wrapper>
      <UserInfoWrapper>
        <UserInfo user={auth.user} />
      </UserInfoWrapper>
      <FriendsCounter>
        <Person />
        {friends.length}
      </FriendsCounter>
      <NewMessagesButton to="/chat">
        <Message />
        {5}
      </NewMessagesButton>
    </Wrapper>
  );
};

export default Profile;
