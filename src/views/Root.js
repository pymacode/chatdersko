import React from 'react';
import Circle from 'components/atoms/Circle/Circle';
import Input from 'components/atoms/Input/Input';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from 'components/organisms/Header/Header';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.lightBlack}; */
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        {/* <Circle>
          <img src={defaultAvatarUrl} alt="Profile img" />
        </Circle>
        <CircleButton>
          <Message />
        </CircleButton>
        <CircleButton>
          <ArrowDownward />
        </CircleButton> */}
        {/* <Input name="name" id="name" /> */}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
