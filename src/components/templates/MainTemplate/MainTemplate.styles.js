import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Components = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
