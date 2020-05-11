import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
import SqrtExample from './components/SqrtExample'
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header className="App-header">
            <Link className="header-link" to="/">
              Home
            </Link>
            <Link className="header-link" to="/sqrt4">
              sqrt4
            </Link>
            <Link className="header-link" to="/sqrt8">
              sqrt8
            </Link>
          </header>

          <Switch>
            <Route path="/sqrt4">
              <SqrtExample number={4} />
            </Route>
            <Route path="/sqrt8">
              <SqrtExample number={8} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
