import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';



export const PrivateRoute = ({ element: Element, redirectTo = '/login' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  if (isRefreshing) {
    return <p>Refreshing user...</p>; // Możesz dostosować to do swoich potrzeb
  }

  return isLoggedIn ? <Element /> : <Navigate to={redirectTo} />;
};
