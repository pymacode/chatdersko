import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlack};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
