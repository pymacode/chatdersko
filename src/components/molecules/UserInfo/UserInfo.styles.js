import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  width: 80%;
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
  }
`;
