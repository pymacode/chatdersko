import React from 'react';
import Title from 'components/atoms/Title/Title';
import {
  SingleFormWrapper,
  StyledInput,
  FormButton,
} from './SettingsForms.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import axios from 'axios';
const ChangeEmailForm = () => {
  const { register, handleSubmit } = useForm();
  const {
    user: { id },
  } = useAuth();
  const changeEmail = async ({ currentEmail, newEmail }, e) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/change-email`,
        {
          id,
          currentEmail,
          newEmail,
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
    <SingleFormWrapper onSubmit={handleSubmit(changeEmail)}>
      <Title>Change email</Title>
      <StyledInput
        type="email"
        name="currentEmail"
        id="currentEmail"
        placeholder="Current email"
        {...register('currentEmail')}
        required
      />
      <StyledInput
        type="email"
        name="newEmail"
        id="newEmail"
        placeholder="New email"
        {...register('newEmail')}
        required
      />
      <FormButton type="submit">Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangeEmailForm;
