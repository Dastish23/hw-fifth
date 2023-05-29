import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Count from './State';
import Change from './Effect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Count />
    <Change />
  </React.StrictMode>
);
