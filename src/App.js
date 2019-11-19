import React from 'react';
import RootRouters from './routers/root.routers';
import { Provider } from 'react-redux';
import store from './redux/root-store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <RootRouters />
      </Router>
    </Provider>
  );
}

export default App;
