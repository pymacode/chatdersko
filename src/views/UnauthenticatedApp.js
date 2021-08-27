import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Input from 'components/atoms/Input/Input';
import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth';
const LoginInput = styled(Input)`
  width: 80%;
`;

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '300px',
        margin: 'auto',
        backgroundColor: '#373737',
        borderRadius: '25px',
      }}
    >
      <h1 style={{ color: 'white' }}>Chatdersko</h1>
      <div
        style={{
          width: '100%',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
        <RoundedButton isBig type="submit">
          Sign in
        </RoundedButton>
      </div>
    </form>
  );
};

export default UnauthenticatedApp;

UnauthenticatedApp.propTypes = {
  handleSignIn: PropTypes.func,
  loginError: PropTypes.any,
  token: PropTypes.string,
};
