import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Styles/Main.css';
import Template from './Template'

function Entry() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Template}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Entry;
