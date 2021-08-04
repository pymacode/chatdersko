import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 20px;
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  color: ${({ theme }) => theme.colors.chatBoxBackground};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
