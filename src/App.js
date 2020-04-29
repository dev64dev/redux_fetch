import React from 'react';
import Scenario from './components/Scenario';
import store from './stroe';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Scenario />
    </Provider>
  );
}

export default App;
