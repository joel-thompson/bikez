import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../../lib/apiUrl"

function Registration(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [registrationErrors, setRegistrationErrors] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    axios.post(apiUrl("registrations"), {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }
    },
    { withCredentials: true }).then(response => {
      if (response.data.status === "created") {
        props.handleSuccessfulAuth(response.data)
      } else {
        setRegistrationErrors("Unable to register")
      }
    }).catch(error => {
      console.log("registration error", error)
    })
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
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

         <input 
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

         <input 
            type="password"
            placeholder="Password Confirmation"
            required
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
          />

          <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;