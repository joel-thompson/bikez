import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
    </div>
  );
}

export default Dashboard;
