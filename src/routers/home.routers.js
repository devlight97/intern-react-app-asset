import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes/home.routes';
import HomeLayout from '../layout/HomeLayout';

class HomeRouter extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  renderRoute() {
    return routes.map(({ path, component: Component, exact }) => <Route exact={exact} key={path} path={path} component={Component} />);
  }

  render() {
    return (
      <HomeLayout>
        <Switch>
          {this.renderRoute()}
        </Switch>
      </HomeLayout>
    );
  }
}

export default HomeRouter;
