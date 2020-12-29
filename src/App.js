import React from 'react';
import { Route } from 'react-router-dom';
import MainComponent from './Components/main/MainComponent';

function App() {
  return (
    <Route path='/' component={MainComponent} exact></Route>
  )
}

export default App;
