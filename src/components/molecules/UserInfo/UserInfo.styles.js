import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
`;
