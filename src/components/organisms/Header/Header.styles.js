import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border-bottom: 3px solid ${({ theme }) => `${theme.colors.navyRGB}0.5)`};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => `${theme.colors.purpleRGB}0.7)`};
  }

  @media (min-width: 1366px) {
    h1 {
      text-align: left;
      padding-left: 30px;
    }
  }
`;

export const HeaderUserInfo = styled.div`
  width: 30%;
`;
