import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';
import authContext from '../../lib/authContext';

function Registration(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    '',
  );
  const [registrationErrors, setRegistrationErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  function reset() {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setRegistrationErrors(null);
    setLoading(false);
  }

  return (
    <authContext.Consumer>
      {({ handleLogin }) => {
        function handleSubmit(event) {
          event.preventDefault();
          setLoading(true);
          axios
            .post(
              apiUrl('registrations'),
              {
                user: {
                  email: email,
                  password: password,
                  password_confirmation: passwordConfirmation,
                },
              },
              { withCredentials: true },
            )
            .then((response) => {
              if (response.data.status === 'created') {
                handleLogin(response.data.user);
                if (typeof props.onSubmit === 'function') {
                  props.onSubmit();
                }
                reset();
                if (props.redirectPath) {
                  window.location.assign(props.redirectPath);
                }
              } else {
                setRegistrationErrors('Unable to register'); // todo - show errors
                setLoading(false);
              }
            })
            .catch((error) => {
              console.log('registration error', error);
            });
        }

        return (
          <div className="Registration">
            {registrationErrors !== null && (
              <div className="registrationErrors">
                <h1>{registrationErrors}</h1>
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

              <input
                className="input"
                type="password"
                placeholder="Password Confirmation"
                required
                value={passwordConfirmation}
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
              />

              <button
                className={`button is-link ${
                  loading ? 'is-loading' : ''
                }`}
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        );
      }}
    </authContext.Consumer>
  );
}

export default Registration;
