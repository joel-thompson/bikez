import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";
import apiUrl from "../lib/apiUrl"

function Home(props) {

  function handleSuccessfulAuth(data) {
    props.handleLogin(data)
    props.history.push("/dashboard")
  }

  function handleLogoutClick() {
    axios.delete(apiUrl("logout"), { withCredentials: true }).then(_response => {
      props.handleLogout()
    }).catch(error => {
      console.log("logout error", error)
    })
  }

  return (
    <div className="Home">
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <button onClick={handleLogoutClick}>Logout</button>
      <hr/>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <hr/>
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}

export default Home;
