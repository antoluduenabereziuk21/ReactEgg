import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//guardamos el ReactDOM.create root
const root = ReactDOM.createRoot(document.getElementById('root'));
//luego mediante el metodo render renderizaremos nuesrto componente App.js, he inyecta el contenido al index.html sin necidad de recargar la pagina
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


