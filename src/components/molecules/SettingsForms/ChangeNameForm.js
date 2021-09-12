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
const ChangeNameForm = () => {
  const { register, handleSubmit } = useForm();
  const {
    user: { id },
  } = useAuth();
  const changeName = async ({ newFirstName, newLastName }, e) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/change-name`,
        {
          id,
          newFirstName,
          newLastName,
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
    <SingleFormWrapper onSubmit={handleSubmit(changeName)}>
      <Title>Change email</Title>
      <StyledInput
        name="newFirstName"
        id="newFirstName"
        placeholder="New first name"
        {...register('newFirstName')}
        required
      />
      <StyledInput
        name="newLastName"
        id="newLastName"
        placeholder="New last name"
        {...register('newLastName')}
        required
      />
      <FormButton type="submit">Change</FormButton>
    </SingleFormWrapper>
  );
};

export default ChangeNameForm;
