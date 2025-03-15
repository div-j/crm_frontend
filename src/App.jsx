import React from 'react';
import {  Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

import ProtectedRoute from './components/ProtectedRoute';
import Help from './components/Help';

export default function App() {
  return (
    <div data-theme="autumn">
  
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
          </div>

  );
}
