import React from 'react';
import authContext from '../lib/authContext';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="Home section centered">
      <h1>Home</h1>
      <authContext.Consumer>
        {({ loggedInStatus }) => {
          if (loggedInStatus === 'LOGGED_IN') {
            return (
              <Link className="button is-link" to="/dashboard">
                Go to Dashboard
              </Link>
            );
          }
        }}
      </authContext.Consumer>
    </section>
  );
}

export default Home;
