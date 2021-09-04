import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
  SingleFormWrapper,
  StyledInput,
  FormButton,
} from './SettingsForms.styles';

const ChangeNameForm = () => {
  return (
    <SingleFormWrapper>
      <Title>Change name</Title>
      <StyledInput placeholder="New first name" />
      <StyledInput placeholder="New last name" />
      <FormButton>Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangeNameForm;
