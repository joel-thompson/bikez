import React from 'react';
import Registration from './Registration';
import Login from './Login';

function AuthModal(props) {
  function loginOrRegistration() {
    const redirectPath = props.redirectPath || '/';

    if (props.registration) {
      return <Registration redirectPath={redirectPath} />;
    } else {
      return <Login redirectPath={redirectPath} />;
    }
  }

  function modalText() {
    return props.registration ? 'Sign Up' : 'Log in';
  }

  function onClose() {
    props.onClose();
  }

  return (
    <div
      className={`AuthModal modal ${props.active ? 'is-active' : ''}`}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{modalText()}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          {loginOrRegistration()}
        </section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  );
}

export default AuthModal;
