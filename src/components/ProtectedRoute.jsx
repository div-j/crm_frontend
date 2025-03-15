import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import AuthContext from '../context/AuthContext';
import { LuLoaderCircle } from 'react-icons/lu';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="h-screen flex items-center justify-center "><LuLoaderCircle size={50} className="text-primary animate-spin" />
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
