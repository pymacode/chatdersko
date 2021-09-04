import styled from 'styled-components';
export const ViewWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 25%;
    height: auto;
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid ${({ theme }) => `${theme.colors.purpleRGB}0.3)`};
  }
`;
