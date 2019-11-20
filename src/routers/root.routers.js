
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes/root.routes';


class RootRouters extends Component {
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
      <Switch>
        {/* <Redirect
          exact
          from="/result/news"
          to="/result/news?page=1"
        /> */}
        {this.renderRoute()}
      </Switch>
    );
  }
}

export default RootRouters;
