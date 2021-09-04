import { Button } from 'components/atoms/RoundedButton/RoundedButton.styles';
import styled from 'styled-components';
import { TitleText } from 'components/atoms/Title/Title.styles';
export const ReadMoreButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export const NewsTitle = styled(TitleText)`
  text-align: center;
  font-weight: normal;
  color: ${({ theme }) => `${theme.colors.yellowRGB}0.8)`};
`;
export const NewsCategory = styled(TitleText)`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
`;

export const NewsContent = styled.div`
  width: 100%;
  height: 100%;
  p {
    width: 100%;
    height: 80%;
    margin: 0;
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.yellow};
  }
  button {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
`;
