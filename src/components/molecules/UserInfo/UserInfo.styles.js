import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  width: ${({ isSmall }) => (isSmall ? '30%' : '100%')};
  height: 80px;
  display: flex;
  align-items: center;
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSize.m : theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  span {
    text-align: center;
    color: ${({ theme }) => theme.colors.lightBlack};
    position: absolute;
    left: ${({ isSmall }) => (isSmall ? '65%' : '55px')};
  }

  div {
    position: absolute;
    left: ${({ isSmall }) => (isSmall ? '50%' : '3px')};
    border: 2px solid;
    border-color: ${({ isOnline, theme }) =>
      isOnline ? theme.colors.success : theme.colors.black};
  }
`;
