import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

/**
 * here I import react dom, than I create the root using react dom. 
 * React dom's create root method helps us to create the root variable.
 * And then we can use the root variable to render the page.
 * The create root method requires a node element as a parameter.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App /> {/* This is the component that react displays on the main page, it is enveloped by strict mode.  */}
  </React.StrictMode>
);

