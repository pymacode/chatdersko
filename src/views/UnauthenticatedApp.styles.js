import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const LoginInput = styled(Input)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.purple};

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.purple};
  }
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.navy};
  cursor: pointer;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FormTitle = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
`;
