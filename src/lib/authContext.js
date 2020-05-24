import React from 'react';

const authContext = React.createContext({
  user: {},
  loggedInStatus: 'UNKNOWN',
  handleLogin: null,
  handleLogout: null,
}); // Create a context object

export default authContext;
