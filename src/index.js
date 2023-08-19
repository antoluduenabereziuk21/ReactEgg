import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
/** 
 * aqui agregaremos el browser router para que nuestra app ademas de stricmode
 * este sometida browserRouter
*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


