import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    element={isLoggedIn ? <Component /> : <Navigate to="/login" />}
  />
);

export default PrivateRoute;
