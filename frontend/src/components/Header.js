/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/actions/userActions';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <header>
      <h1>App name</h1>
      { user && <p>
        {`Hello, ${user.name}`}
      </p>}
      <span>
        <p>Sign Out</p>
        <button
          type="button"
          data-testid="signout-btn"
          onClick={ () => handleSignOut() }
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={ 2 }
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
              01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </span>
    </header>
  );
}

export default Header;
