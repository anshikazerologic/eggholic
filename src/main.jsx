import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';



const rootElement = document.getElementById('root');
const appContent = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// This handles the transition from Static HTML to Live React
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, appContent);
} else {
  ReactDOM.createRoot(rootElement).render(appContent);
}