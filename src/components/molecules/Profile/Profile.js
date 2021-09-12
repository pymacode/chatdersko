import { useAuth } from 'hooks/useAuth';
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { Person, Message } from '@material-ui/icons';
import {
  Wrapper,
  UserInfoWrapper,
  FriendsCounter,
  NewMessagesButton,
} from './Profile.styles';
const Profile = () => {
  const auth = useAuth();
  const { friends } = useSelector((state) => state.friends);
  const unreadMessages = useSelector((state) => state.unreadMessages);
  return (
    <Wrapper>
      <UserInfoWrapper>
        <UserInfo user={auth.user} />
      </UserInfoWrapper>
      <FriendsCounter>
        <Person />
        {friends.length}
      </FriendsCounter>
      {unreadMessages.length > 0 ? (
        <NewMessagesButton to="/chat">
          <Message />
          {unreadMessages.length}
        </NewMessagesButton>
      ) : null}
    </Wrapper>
  );
};

export default Profile;
