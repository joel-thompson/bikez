import React, { useState, useLayoutEffect } from 'react';
import './assets/styles/App.css';
import SqrtExample from './components/SqrtExample';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import apiUrl from './lib/apiUrl';
import authContext from './lib/authContext';

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('UNKNOWN'); // make global
  const [user, setUser] = useState({}); // make global

  function handleLogin(data) {
    setLoggedInStatus('LOGGED_IN');
    setUser(data.user);
  }

  function handleLogout() {
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  }

  const authContextValue = {
    user: user,
    loggedInStatus: loggedInStatus,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
  };

  useLayoutEffect(() => {
    axios
      .get(apiUrl('logged_in'), { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          loggedInStatus !== 'LOGGED_IN'
        ) {
          handleLogin(response.data);
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
    return null;
  }

  return (
    <authContext.Provider value={authContextValue}>
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <Link className="header-link" to="/">
                Home
              </Link>
              <Link className="header-link" to="/sqrt6">
                sqrt6
              </Link>
              <Link className="header-link" to="/sqrt8">
                sqrt8
              </Link>
            </header>

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    loggedInStatus={loggedInStatus}
                  />
                )}
              />

              <Route
                exact
                path="/dashboard"
                render={(props) => (
                  <Dashboard
                    {...props}
                    loggedInStatus={loggedInStatus}
                  />
                )}
              />

              <Route exact path="/sqrt6">
                <SqrtExample number={6} />
              </Route>
              <Route exact path="/sqrt8">
                <SqrtExample number={8} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </authContext.Provider>
  );
}

export default App;
