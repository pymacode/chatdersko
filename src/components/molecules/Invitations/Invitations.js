import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
  removeFriendRequest,
  store,
} from 'store';
import { Done, Clear } from '@material-ui/icons';
import UserInfo from '../UserInfo/UserInfo';
import {
  InvitationsWrapper,
  InvitationCard,
  UserInfoWrapper,
  RoundedButton,
} from './Invitations.styles';
const Invitations = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const invitations = JSON.parse(user.invitations);
  const [acceptFriend] = useAcceptFriendRequestMutation();
  const [declineFriend] = useDeclineFriendRequestMutation();
  const addNewFriend = (id) => {
    acceptFriend({ userID: user.id, friendID: id });
    dispatch(removeFriendRequest(id));
    declineFriend({
      userID: user.id,
      invitations: store.getState().user.invitations,
    });
  };
  const removeInvitation = (id) => {
    dispatch(removeFriendRequest(id));
    declineFriend({
      userID: user.id,
      invitations: store.getState().user.invitations,
    });
  };

  return (
    <InvitationsWrapper>
      {invitations.length > 0
        ? invitations.map((invitation) => (
            <InvitationCard key={invitation.id}>
              <UserInfoWrapper>
                <UserInfo isSmall user={invitation} />
              </UserInfoWrapper>
              <RoundedButton onClick={() => addNewFriend(invitation.id)}>
                <Done />
              </RoundedButton>
              <RoundedButton
                isDecline
                onClick={() => removeInvitation(invitation.id)}
              >
                <Clear />
              </RoundedButton>
            </InvitationCard>
          ))
        : null}
    </InvitationsWrapper>
  );
};

export default Invitations;
