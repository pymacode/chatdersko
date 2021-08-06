import styled from 'styled-components';

export const TitleText = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 700;
  font-size: ${({ isBig }) =>
    isBig
      ? ({ theme }) => theme.fontSize.xxl
      : ({ theme }) => theme.fontSize.l};
`;
