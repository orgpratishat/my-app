// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const IsAuthenticated = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;
};

export default IsAuthenticated;
