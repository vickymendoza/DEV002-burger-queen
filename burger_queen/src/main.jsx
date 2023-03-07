import React from 'react';
import ReactDOM from 'react-dom/client'; //herramienta para renderizar
import App from './App.jsx';
import './index.css'


// Forma de renderizar el componente en el DOM o donde se esté ejecutando la aplicanción en React
ReactDOM.createRoot(document.getElementById('root')).render(
  //componente padre
  <div>
    <App />
  </div>

)