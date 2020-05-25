import React from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';
import authContext from '../../lib/authContext';

function LogoutButton(props) {
  return (
    <authContext.Consumer>
      {({ loggedInStatus, handleLogout }) => {
        function handleLogoutClick() {
          axios
            .delete(apiUrl('logout'), { withCredentials: true })
            .then((_response) => {
              handleLogout();
            })
            .catch((error) => {
              console.log('logout error', error);
            });
        }

        return (
          <button
            disabled={loggedInStatus === 'NOT_LOGGED_IN'}
            className="LogoutButton"
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
