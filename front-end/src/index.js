import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WorkoutsContextProvider} from './contexte/WorkoutContext.js'
import {AuthContexteProvide} from './contexte/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContexteProvide>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContexteProvide>
  </React.StrictMode>
);

