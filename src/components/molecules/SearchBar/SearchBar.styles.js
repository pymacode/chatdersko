import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  width: 320px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    width: 36px;
    height: 36px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
