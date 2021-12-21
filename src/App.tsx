import React from 'react';
import { Provider } from 'react-redux';

import './path/scss/App.scss';
import Nav from './path/components/nav';
import Main from './path/components/main';
import Footer from './path/components/footer';
import store from './path/store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
