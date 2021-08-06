import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Circle from 'components/atoms/Circle/Circle';
import { UserInfoWrapper } from './UserInfo.styles';

const UserInfo = ({ loggedUser }) => {
  return (
    <UserInfoWrapper>
      <Circle />
      <Label>{`${loggedUser.name} ${loggedUser.surname} `}</Label>
    </UserInfoWrapper>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  loggedUser: PropTypes.object,
};
