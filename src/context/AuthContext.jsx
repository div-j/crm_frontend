import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data with the token
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user data', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login/`, { email, password });
      localStorage.setItem('token', response.data.access);
      fetchUserData(response.data.access);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to login');
      console.error('Failed to login', error);
    }
  };

  const signup = async (email, password, name, company, phoneNumber, country) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/`, {
        email,
        password,
        name,
        company,
        phone_number: phoneNumber,
        country,
        status: "Active",
      });
      toast.success('Signed up successfully');
      navigate("/login");
    } catch (error) {
      toast.error('Failed to signup');
      console.error("Failed to signup", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
