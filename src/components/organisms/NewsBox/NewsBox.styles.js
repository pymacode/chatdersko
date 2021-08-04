import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';
import styled from 'styled-components';

export const ReadMoreButton = styled(RoundedButton)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const NewsContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  p {
    width: 45%;
    height: 100%;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
  div {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;

    button {
      position: absolute;
      bottom: 5px;
    }
    img {
      width: 90px;
      height: 90px;
    }
  }
`;
