import React, { useEffect, useState } from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Posts from './Posts';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import axios from 'axios';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Root = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .post('http://localhost:6060/user', { id: '1' })
      .then((data) => setUser(data.data[0]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <MainTemplate loggedUser={user}>
          <Posts />
        </MainTemplate>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
