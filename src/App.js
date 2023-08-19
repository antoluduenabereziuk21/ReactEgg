import "./App.css";
import {Routes , Route } from "react-router-dom";
/** Instalado react-router-dom importamos*/
import  { Footer }  from "./components/public/Footer";
import {Main} from "./components/public/Main";
import  { NavBar } from "./components/public/NavBar";
import {Detail} from "./components/public/Detail";
import {UserForm} from "./components/public/UserForm";
/* reactRouterDom nos permite tener un manejo de componente
y links lo cual nos permite renderizar lo que querramos.
Para Ello debemos englobar todas nuestras rutas entre browserRouter 
Mediante Switch vamos a alternar el componente que queremos mostrar, por defecto la ruta principal sera main*/
function App() {
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route exact path={"/"} element={<Main/>}/>
        <Route  path={"/datails/:id"} element={Detail}/>
        <Route  path={"/user-form"} element={UserForm}/>
      </Routes>
      
      
      <Footer/>
    </div>
    
  );
}

export default App;
