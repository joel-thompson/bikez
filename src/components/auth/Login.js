import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';
import authContext from '../../lib/authContext';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <authContext.Consumer>
      {({ handleLogin }) => {
        function handleSubmit(event) {
          event.preventDefault();
          setLoading(true);
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
                setLoading(false);
                if (typeof props.onSubmit === 'function') {
                  props.onSubmit();
                }
                setRedirectPath(props.redirectPath);
              } else {
                setLoginErrors('Unable to login'); // todo - show errors
                setLoading(false);
              }
              console.log('login response', response);
            })
            .catch((error) => {
              console.log('login error', error);
            });
        }

        if (redirectPath) {
          return <Redirect to={redirectPath} />;
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
                className="input"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                className={`button is-link ${
                  loading ? 'is-loading' : ''
                }`}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        );
      }}
    </authContext.Consumer>
  );
}

export default Login;
