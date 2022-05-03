import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ authenticated, children }) => {
    return authenticated ? children : <Navigate to="/" />;
  }