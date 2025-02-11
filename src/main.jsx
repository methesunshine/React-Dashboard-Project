import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.jsx';
import './index.css';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
