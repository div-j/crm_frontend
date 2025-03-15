import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <App />
        <Toaster />
      </UserProvider>
    </AuthProvider>
    </BrowserRouter>

  </StrictMode>,
)
