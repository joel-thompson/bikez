import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import LogoutButton from './auth/LogoutButton';
import authContext from '../lib/authContext';

function Home(props) {
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
      <Registration
        onSuccessfulAuth={() => {
          props.history.push('/dashboard');
        }}
      />
      <hr />
      <Login
        onSuccessfulLogin={() => {
          props.history.push('/dashboard');
        }}
      />
    </div>
  );
}

export default Home;
