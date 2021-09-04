import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
  SingleFormWrapper,
  StyledInput,
  FormButton,
} from './SettingsForms.styles';

const ChangeEmailForm = () => {
  return (
    <SingleFormWrapper>
      <Title>Change email</Title>
      <StyledInput placeholder="Current email" />
      <StyledInput placeholder="New email" />
      <FormButton>Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangeEmailForm;
