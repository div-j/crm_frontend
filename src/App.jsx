import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Help from './components/Help';

export default function App() {
  return (
    <div data-theme="autumn">
      <Router>
        <AuthProvider>
          <UserProvider>
            <div >
              <div className="">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/help"
                    element={
                      <ProtectedRoute>
                        <Help />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
          </UserProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}
