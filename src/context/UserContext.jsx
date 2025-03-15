import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(user);
  

  useEffect(() => {
    if (user) {
      fetchUsers();
      fetchStatistics();
    }
  }, [user]);

  const fetchUsers = async (page = 1) => {
    try {
      const response = await axios.get(`https://crm-backend-oytv.onrender.com/api/users?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers(response.data.results);
      
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get('https://crm-backend-oytv.onrender.com/api/users/statistics', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data);
      
      setStatistics(response.data);
    } catch (error) {
      console.error('Failed to fetch statistics', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ users, statistics, loading, fetchUsers, fetchStatistics }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
