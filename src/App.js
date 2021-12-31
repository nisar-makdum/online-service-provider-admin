import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/Homepage/Homepage';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/LoginPage/privateRoute';
import RegisteredJanitor from './Components/RegisteredJanitor/RegisteredJanitor';
import ServiceSupport from './Components/ServiceSupport/ServiceSupport';
import Transaction from './Components/Transaction/Transaction';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path='/home'>
            <Homepage />
          </PrivateRoute>
          <PrivateRoute path='/support'>
            <ServiceSupport />
          </PrivateRoute>
          <PrivateRoute path='/register'>
            <RegisteredJanitor />
          </PrivateRoute>
          <PrivateRoute path='/transaction'>
            <Transaction />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
