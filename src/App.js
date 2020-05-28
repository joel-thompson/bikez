import React, { useState, useLayoutEffect } from 'react';
import './assets/styles/App.scss';
import SqrtExample from './components/SqrtExample';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import apiUrl from './lib/apiUrl';
import authContext from './lib/authContext';
import Loading from './components/Loading';
import Posts from './components/Posts';
import TopNavBar from './components/TopNavBar';

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('UNKNOWN');
  const [user, setUser] = useState({});

  function handleLogin(user) {
    setLoggedInStatus('LOGGED_IN');
    setUser(user);
  }

  function handleLogout() {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  }

  useLayoutEffect(() => {
    axios
      .get(apiUrl('logged_in'), { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          loggedInStatus !== 'LOGGED_IN'
        ) {
          handleLogin(response.data.user);
        } else if (
          !response.data.logged_in &&
          loggedInStatus !== 'NOT_LOGGED_IN'
        ) {
          handleLogout();
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }, [loggedInStatus]);

  function appNotReady() {
    return loggedInStatus === 'UNKNOWN';
  }

  if (appNotReady()) {
    return <Loading />;
  }

  return (
    <authContext.Provider
      value={{ user, loggedInStatus, handleLogin, handleLogout }}
    >
      <div className="App">
        <Router>
          <TopNavBar />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/posts" component={Posts} />

            <Route exact path="/sqrt6">
              <SqrtExample number={6} />
            </Route>
            <Route exact path="/sqrt8">
              <SqrtExample number={8} />
            </Route>
          </Switch>
        </Router>
      </div>
    </authContext.Provider>
  );
}

export default App;
