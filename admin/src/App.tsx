import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutContainer from './layout';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route component={LayoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default (App);
