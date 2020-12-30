import React from 'react';
import { Route } from 'react-router-dom';
import KawardsComponent from './Components/kawards/KawardsComponent';
import MainComponent from './Components/main/MainComponent';

function App() {
  return (
    <>
      <Route path='/' component={MainComponent} exact></Route>
      <Route path='/kawards' component={KawardsComponent}></Route>
    </> 
  );
}

export default App;
