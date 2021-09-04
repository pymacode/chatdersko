import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'components/atoms/Circle/Circle';
import { UserInfoWrapper } from './UserInfo.styles';
import Label from 'components/atoms/Label/Label';

const UserInfo = ({ user = {}, onClick, isSmall, isDark }) => {
  return (
    <UserInfoWrapper onClick={onClick} isOnline={user.isOnline}>
      {user.profileImageName !== '' ? (
        <Circle
          imgUrl={`http://localhost:6060/getImage/${user.id}/${user.profileImageName}`}
        />
      ) : (
        <Circle />
      )}
      <Label
        isSmall={isSmall}
        isDark={isDark}
      >{`${user.name} ${user.surname} `}</Label>
    </UserInfoWrapper>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
  isSmall: PropTypes.bool,
  isDark: PropTypes.bool,
};
