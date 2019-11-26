/* eslint-disable no-restricted-globals */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes/root.routes';
import notificationService from '../services/notification.services';

// import { socketNotification } from '../services/sockets/socket.notification';


class RootRouters extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  async componentDidMount() {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
    }

    if (Notification.permission !== 'granted') Notification.requestPermission();

    notificationService.subscribe();
  }

  renderRoute() {
    return routes.map(({ path, component: Component, exact }) =>
      <Route
        exact={exact}
        key={path}
        path={path}
        component={Component}
      />);
  }

  render() {
    return (
      <Switch>
        {this.renderRoute()}
      </Switch>
    );
  }
}

export default RootRouters;
