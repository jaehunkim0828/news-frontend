import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Finance from '../pages/finance';

import Home from '../pages/home';
import Industry from '../pages/indu';

import Real from '../pages/realEstate';
import Securities from '../pages/securities';
import Venture from '../pages/venture';

function Page() {
  return (
    <div id='page'>
      <Switch>
        <Route path='/finance'>
          <Finance />
        </Route>
        <Route path='/industry'>
          <Industry />
        </Route>
        <Route path='/real'>
          <Real />
        </Route>
        <Route path='/securities'>
          <Securities />
        </Route>
        <Route path='/venture'>
          <Venture />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Page;