import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute exact path="/home" component={Home} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
