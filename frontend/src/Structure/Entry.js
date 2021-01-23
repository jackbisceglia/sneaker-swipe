import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Styles/Main.css';
import Template from './Template'

import ShoesContext from '../OtherHooks/ShoesContext';
import VotesContext from '../OtherHooks/VotesContext';


function Entry() {
  const [shoes, setShoes] = useState([]);

  return (
    <ShoesContext.Provider value={{shoes, setShoes}}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Template}/>
        </Switch>
      </BrowserRouter>
    </ShoesContext.Provider>
  );
}

export default Entry;