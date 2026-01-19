import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext.jsx';
import App from './App.jsx';
import './index.css';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>          {/* Router must be on top */}
    <AppContextProvider>   {/* Context can use useNavigate now */}
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
