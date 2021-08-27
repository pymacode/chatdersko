import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  width: ${({ isSmall }) => (isSmall ? '30%' : '80%')};
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  span {
    text-align: center;
  }

  div {
    position: absolute;
    left: 5px;
    border: 3px solid;
    border-color: ${({ isOnline }) => (isOnline ? 'green' : 'grey')};
  }
`;
