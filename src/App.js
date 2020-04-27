import React from 'react';
import Scenario from './components/Scenario';
import store from './stroe';
import { Provider } from 'react-redux';
import { Container,  } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Scenario />
      </Container>
    </Provider>
  );
}

export default App;
