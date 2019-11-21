import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes/result.routes';
import ResultLayout from '../layout/ResultLayout';

class ResultRouters extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  renderRoute() {
    return routes.map(({ path, component: Component, exact }) =>
      <Route
        exact={exact}
        key={path}
        path={path}
        render={props => <Component {...props} />}
      />);
  }

  render() {
    return (
      <ResultLayout {...this.props}>
        <Switch>
          {this.renderRoute()}
        </Switch>
      </ResultLayout>
    );
  }
}

export default ResultRouters;
