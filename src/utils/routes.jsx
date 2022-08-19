import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Components/Main';
import ModalAddStory from '../Components/ModalAddStory';


export default () => (
  <Switch>
    <Route exact path='/'>
      <Main />
    </Route>
    <Route exact path='/story'>
      <ModalAddStory />
    </Route>
  </Switch>

)

