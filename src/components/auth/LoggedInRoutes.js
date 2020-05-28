import React from 'react';
import authContext from '../../lib/authContext';
import { Redirect } from 'react-router-dom';

function LoggedInRoutes({ children }) {
  return (
    <authContext.Consumer>
      {({ loggedInStatus }) => {
        if (loggedInStatus !== 'LOGGED_IN') {
          return <Redirect to="/" />;
        }

        return <div className="LoggedInRoutes">{children}</div>;
      }}
    </authContext.Consumer>
  );
}

export default LoggedInRoutes;
