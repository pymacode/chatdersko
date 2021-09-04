import React from 'react';
import { Wrapper } from './SettingsForms.styles';
import ChangeAvatarForm from './ChangeAvatarForm';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';
import ChangeNameForm from './ChangeNameForm';

const SettingsForms = () => {
  return (
    <Wrapper>
      <ChangeAvatarForm />
      <ChangePasswordForm />
      <ChangeEmailForm />
      <ChangeNameForm />
    </Wrapper>
  );
};

export default SettingsForms;
