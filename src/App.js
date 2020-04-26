import React from 'react';
import Navbar from './components/Layout/Navbar';
import Test from './components/Test';
import store from './stroe';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Test />
    </Provider>
  );
}

export default App;
