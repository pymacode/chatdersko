import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Circle from 'components/atoms/Circle/Circle';
import { UserInfoWrapper } from './UserInfo.styles';

const UserInfo = ({ user = {}, onClick, isSmall }) => {
  return (
    <UserInfoWrapper
      onClick={onClick}
      isSmall={isSmall}
      isOnline={user.isOnline}
    >
      <Circle />
      <Label>{`${user.name} ${user.surname} `}</Label>
    </UserInfoWrapper>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
  isSmall: PropTypes.bool,
};
