import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import LogoutButton from './auth/LogoutButton';
import authContext from '../lib/authContext';

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <authContext.Consumer>
        {({ loggedInStatus }) => {
          return <h1>Status: {loggedInStatus}</h1>;
        }}
      </authContext.Consumer>
      <LogoutButton />
      <hr />
      <Registration redirectPath="/dashboard" />
      <hr />
      <Login redirectPath="/dashboard" />
    </div>
  );
}

export default Home;
