import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContestProvider } from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContestProvider>
    <App />
    </ContestProvider>
  </React.StrictMode>
);
