import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
  SingleFormWrapper,
  StyledInput,
  FormButton,
} from './SettingsForms.styles';

const ChangePasswordForm = () => {
  return (
    <SingleFormWrapper>
      <Title>Change password</Title>
      <StyledInput placeholder="Current password" />
      <StyledInput placeholder="New password" />
      <FormButton>Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangePasswordForm;
