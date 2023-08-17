import "./App.css";

/** 
 * Tanto Footer como NavBar son functional components
 * En Cambio main sera Class Component
 */
 //al importar un componente se declara entre llaves
import  { Footer }  from "./components/public/Footer";
import Main from "./components/public/Main";
import  { NavBar } from "./components/public/NavBar";
//app se encargara de englobar componentes para enviar index.js
// y luego a index.html
function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
