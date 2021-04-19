import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from './pages/Search'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navigation from './pages/Navigation'
import Detail from './pages/Detail'
import PageNotFound from './pages/PageNotFound'

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/detail" component={Detail} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );

}
export default Routes;