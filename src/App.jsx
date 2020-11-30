import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Top } from './pages/Top';
import { Search } from './pages/Search';
import { Watch } from './pages/Watch';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/react-tube/" component={Top} />
        <Route exact path="/react-tube/Search" component={Search} />
        <Route exact path="/react-tube/Watch" component={Watch} />
      </Switch>
    </Router>
  )
}
