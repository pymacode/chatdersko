import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { SocketProvider } from 'hooks/useSocket';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <SocketProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </SocketProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.any,
};

export default AppProvider;
