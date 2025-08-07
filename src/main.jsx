import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Nota: La extensión del archivo es .jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals ya no es necesario en Vite, puedes eliminarlo
// Si quieres medir el rendimiento, puedes agregar un paquete similar o usar la extensión de navegador React Dev Tools.