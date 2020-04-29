import React from 'react';
import Scenario from './components/Scenario';
import store from './stroe';
import { Provider } from 'react-redux';
import { Container, AppBar } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppBar position='static'>Scenario</AppBar>
      <Container>
        <Scenario />
      </Container>
    </Provider>
  );
}

export default App;
