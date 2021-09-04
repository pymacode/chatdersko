import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Messages from './Chat';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
const AuthenticatedApp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <MainTemplate>
      <Switch>
        <Route path="/chat">
          <Messages />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default AuthenticatedApp;

AuthenticatedApp.propTypes = {
  loggedUser: PropTypes.object,
  sendMessage: PropTypes.func,
  getMessage: PropTypes.func,
  socket: PropTypes.any,
};
