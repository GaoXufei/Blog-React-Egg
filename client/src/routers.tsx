import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

// app路由总控
export default class Routers extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route component={App} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}