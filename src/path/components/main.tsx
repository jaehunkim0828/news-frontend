import React from 'react';

import Sideber from './sideber';
import  Page from './page';
import { HashRouter as Router } from 'react-router-dom';


function Home() {
  return (
    <main>
      <Router>
        <Sideber />
        <Page />
      </Router>
    </main>
  )
}

export default Home;