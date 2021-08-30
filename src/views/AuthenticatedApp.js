import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Messages from './Chat';
import { Switch, Route } from 'react-router-dom';
const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route path="/chat">
          <Messages text="chat" />
        </Route>
        <Route path="/">
          <h1>You are at /</h1>
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
