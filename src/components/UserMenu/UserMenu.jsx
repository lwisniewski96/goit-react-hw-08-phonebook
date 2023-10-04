// UserMenu.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoggedIn, logoutUser } from '../../redux/auth/authSlice';

const UserMenu = ({ username }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Wywołaj operację wylogowania
    dispatch(logoutUser());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>{username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default UserMenu;
