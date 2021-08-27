import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import AppProvider from 'providers/AppProvider';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Root />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
