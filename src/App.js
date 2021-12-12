import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/Homepage/Homepage';
import RegisteredJanitor from './Components/RegisteredJanitor/RegisteredJanitor';
import ServiceSupport from './Components/ServiceSupport/ServiceSupport';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Homepage />
        </Route>
        <Route path='/support'>
          <ServiceSupport/>
        </Route>
        <Route path='/register'>
          <RegisteredJanitor/>
        </Route>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
