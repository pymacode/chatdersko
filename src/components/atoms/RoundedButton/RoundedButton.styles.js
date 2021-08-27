import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ isBig }) => (isBig ? '200px' : '60px')};
  height: ${({ isBig }) => (isBig ? '40px' : '20px')};
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  color: ${({ theme }) => theme.colors.chatBoxBackground};
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.s};
  font-weight: ${({ isBig }) => (isBig ? '700' : '300')};
`;
