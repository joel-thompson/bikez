import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './auth/AuthModal';
import authContext from '../lib/authContext';
import LogoutButton from './auth/LogoutButton';

function TopNavBar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isRegistrationModal, setisRegistrationModal] = useState(
    true,
  );

  function handleBurgerClick() {
    setBurgerIsOpen(!burgerIsOpen);
  }

  function loginClick() {
    setShowAuthModal(true);
    setisRegistrationModal(false);
  }

  function signUpClick() {
    setShowAuthModal(true);
    setisRegistrationModal(true);
  }

  function closeModal() {
    setShowAuthModal(false);
  }

  return (
    <div className="TopNavBar">
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <div
            role="button"
            className={`navbar-burger ${
              burgerIsOpen ? 'is-active' : ''
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="topnavbar-menu"
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div
          className={`navbar-menu ${burgerIsOpen ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <authContext.Consumer>
                {({ loggedInStatus }) => {
                  if (loggedInStatus === 'LOGGED_IN') {
                    return (
                      <div className="buttons">
                        <LogoutButton />
                      </div>
                    );
                  } else {
                    return (
                      <div className="buttons">
                        <div
                          className="button is-link"
                          onClick={signUpClick}
                        >
                          <strong>Sign up</strong>
                        </div>
                        <div
                          className="button is-link is-light"
                          onClick={loginClick}
                        >
                          Log in
                        </div>
                      </div>
                    );
                  }
                }}
              </authContext.Consumer>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        active={showAuthModal}
        registration={isRegistrationModal}
        onClose={closeModal}
        redirectPath="/dashboard"
      />
    </div>
  );
}

export default TopNavBar;
