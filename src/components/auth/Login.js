import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';
import authContext from '../../lib/authContext';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState(null);

  return (
    <authContext.Consumer>
      {({ handleLogin }) => {
        function handleSubmit(event) {
          event.preventDefault();
          axios
            .post(
              apiUrl('sessions'),
              {
                user: {
                  email: email,
                  password: password,
                },
              },
              { withCredentials: true },
            )
            .then((response) => {
              if (response.data.logged_in) {
                handleLogin(response.data.user);
                if (typeof props.onSuccessfulLogin === 'function') {
                  props.onSuccessfulLogin();
                }
              } else {
                setLoginErrors('Unable to login');
              }
              console.log('login response', response);
            })
            .catch((error) => {
              console.log('login error', error);
            });
        }

        return (
          <div className="Login">
            {loginErrors !== null && (
              <div className="registrationErrors">
                <h1>{loginErrors}</h1>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button type="submit">Login</button>
            </form>
          </div>
        );
      }}
    </authContext.Consumer>
  );
}

export default Login;
