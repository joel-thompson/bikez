import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';
import authContext from '../../lib/authContext';

function LogoutButton({ onLogout }) {
  const [loading, setLoading] = useState(false);

  return (
    <authContext.Consumer>
      {({ loggedInStatus, handleLogout }) => {
        function handleLogoutClick() {
          setLoading(true);
          axios
            .delete(apiUrl('logout'), { withCredentials: true })
            .then((_response) => {
              setLoading(false);
              if (typeof onLogout === 'function') {
                onLogout();
              }
              handleLogout(); // should be last to prevent state issues
            })
            .catch((error) => {
              console.log('logout error', error);
            });
        }

        return (
          <button
            disabled={loggedInStatus === 'NOT_LOGGED_IN'}
            className={`LogoutButton button is-link ${
              loading ? 'is-loading' : ''
            }`}
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        );
      }}
    </authContext.Consumer>
  );
}

export default LogoutButton;
