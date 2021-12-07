import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/Homepage/Homepage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Homepage />
        </Route>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
