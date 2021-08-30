import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${({ isTextarea }) => (isTextarea ? '400px' : '300px')};
  height: ${({ isTextarea }) => (isTextarea ? '100px' : '50px')};
  padding: 10px;
  padding-left: 36px;
  border: none;
  border-radius: 25px;
  outline: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;
`;
