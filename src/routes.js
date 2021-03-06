import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Analytics from './views/Analytics/'
import Toilets from './views/Toilets/'
import Toilet from './views/Toilet/'
import Settings from './views/Settings/'

import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Toilets}/>
      <Route path="toilets" name="Toilets" component={Toilets}/>
      <Route path="toilets/:id" name="Toilet" component={Toilet}/>
      <Route path="analytics" name="Analytics" component={Analytics}/>
      <Route path="settings" name="Settings" component={Settings}/>
    </Route>
    <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>
  </Router>
);
