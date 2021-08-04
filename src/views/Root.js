import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Posts from './Posts';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <MainTemplate>
          <Posts />
        </MainTemplate>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
