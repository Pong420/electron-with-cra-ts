import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Home } from './page/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
