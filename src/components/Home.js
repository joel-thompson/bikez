import React from 'react';
import Registration from './auth/Registration';
import Login from './auth/Login';
import LogoutButton from './auth/LogoutButton';

function Home(props) {
  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    props.history.push('/dashboard');
  }

  return (
    <div className="Home">
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <LogoutButton />
      <hr />
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <hr />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}

export default Home;
