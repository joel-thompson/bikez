import React from 'react';
import axios from 'axios';
import apiUrl from '../../lib/apiUrl';

function LogoutButton(props) {
  function handleLogoutClick() {
    axios
      .delete(apiUrl('logout'), { withCredentials: true })
      .then((_response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  return (
    <button className="LogoutButton" onClick={handleLogoutClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
