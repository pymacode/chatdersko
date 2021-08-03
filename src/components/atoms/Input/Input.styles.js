import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  padding-left: 36px;
  border: none;
  border-radius: 25px;
  outline: none;
  color: ${({ theme }) => theme.colors.veryLightGrey};
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
