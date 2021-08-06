import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper.styles';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import axios from 'axios';
import Title from 'components/atoms/Title/Title';

const FriendsList = ({ loggedUser }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:6060/friends', { id: loggedUser.id })
      .then((data) => setFriends(data.data))
      .catch((e) => console.log(e));
  }, [loggedUser]);

  return (
    <ViewWrapper>
      <Title isBig>Friends</Title>
      {friends.length > 0
        ? friends.map((item) => <UserInfo loggedUser={item} key={item.name} />)
        : null}
    </ViewWrapper>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  loggedUser: PropTypes.object,
};
