import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper.styles';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import axios from 'axios';
import Title from 'components/atoms/Title/Title';
import { useAuth } from 'hooks/useAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const auth = useAuth();
  useEffect(() => {
    axios
      .post('http://localhost:6060/friends', { id: auth.user.id })
      .then((data) => setFriends(data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ViewWrapper>
      <Title isBig>Friends</Title>
      {friends.length > 0
        ? friends.map((item) => (
            <UserInfo
              onClick={() => {
                console.log(item.id);
              }}
              user={item}
              key={item.name}
            />
          ))
        : null}
    </ViewWrapper>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  loggedUser: PropTypes.object,
  sendMessage: PropTypes.func,
  getMessage: PropTypes.func,
  socket: PropTypes.any,
};
