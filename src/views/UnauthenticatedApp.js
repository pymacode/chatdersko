import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import {
  SignInForm,
  FormTitle,
  LoginInput,
  StyledButton,
  FormContent,
} from './UnauthenticatedApp.styles';
const UnauthenticatedApp = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  return (
    <SignInForm onSubmit={handleSubmit(auth.signIn)}>
      <FormTitle>Chatdersko</FormTitle>
      <FormContent>
        <LoginInput
          placeholder="Email"
          name="email"
          id="email"
          type="email"
          {...register('email')}
        />
        <LoginInput
          placeholder="Password"
          name="password"
          id="password"
          type="password"
          {...register('password')}
        />
        <StyledButton isBig type="submit">
          Sign in
        </StyledButton>
      </FormContent>
    </SignInForm>
  );
};

export default UnauthenticatedApp;

UnauthenticatedApp.propTypes = {
  handleSignIn: PropTypes.func,
  loginError: PropTypes.any,
  token: PropTypes.string,
};
