import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { HomePage } from './page/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
