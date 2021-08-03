import styled from 'styled-components';
import Circle from 'components/atoms/Circle/Circle';
export const ButtonWrapper = styled(Circle)`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 25px;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;
