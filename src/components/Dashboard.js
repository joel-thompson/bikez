import React from 'react';
import authContext from '../lib/authContext';

function Dashboard() {
  return (
    <section className="Dashboard section centered">
      <h1>Dashboard</h1>
      <authContext.Consumer>
        {({ user, loggedInStatus }) => {
          return (
            <div>
              <h1>Status: {loggedInStatus}</h1>
              <h1>User Email: {user.email}</h1>
            </div>
          );
        }}
      </authContext.Consumer>
    </section>
  );
}

export default Dashboard;
