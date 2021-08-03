import React from 'react';
import Label from 'components/atoms/Label/Label';
import Circle from 'components/atoms/Circle/Circle';
import { UserInfoWrapper } from './UserInfo.styles';

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <Circle />
      <Label>Abdul Ahuamanad</Label>
    </UserInfoWrapper>
  );
};

export default UserInfo;
