import React from 'react';
import Title from 'components/atoms/Title/Title';
import { useForm } from 'react-hook-form';
import {
  SingleFormWrapper,
  StyledInput,
  FormButton,
} from './SettingsForms.styles';
import { useAuth } from 'hooks/useAuth';
import axios from 'axios';

const ChangePasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const {
    user: { id },
  } = useAuth();
  const changePassword = async ({ currentPassword, newPassword }, e) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/change-password`,
        {
          id,
          currentPassword,
          newPassword,
        }
      );
      if (res.status === 200) {
        alert('Success!');
      } else {
        alert('Something went wrong!');
      }
      e.target.reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SingleFormWrapper onSubmit={handleSubmit(changePassword)}>
      <Title>Change password</Title>
      <StyledInput
        type="password"
        name="currentPassword"
        id="currentPassword"
        placeholder="Current password"
        {...register('currentPassword')}
        required
      />
      <StyledInput
        type="password"
        name="newPassword"
        id="newPassword"
        placeholder="New password"
        {...register('newPassword')}
        required
      />
      <FormButton type="submit">Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangePasswordForm;
