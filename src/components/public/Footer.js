
import React, { useState, useSyncExternalStore } from "react";

export const Footer = () => {
  /** crearemos Nuestro primer Hook
   * para ello escribirmos useState , y luego ctrl+espacio
   *  selecionamos useStateSnippet
   * 
   * const [clicks, setClicks] = useState(0);
   * 
   * este hook esta conformado por 2 partes
   * 
   * cons[una variable, una funcion que afecta al primero]
   * El segundo valor es el Hook ue queremos usar en este 
   * caso es numerico, o podria pasarse una funcion 
   * = useState();
   * 
  */

   const [clicks, setClicks] = useState(0);

  /*utilzaremos estas dos variables pra el el jsx sean 
  usadas y mediante binding lo injectamos dentro del jsx
  <p classNameName="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {companyName}
        </p>
   */

   const year = new Date().getFullYear();
   const companyName = "Mi primerReactProyect";
  /**
   * Llamaremos a un evento click para que la imagen del
   * perrito nos informe cuando se haga click.
   * Mediante el evento de React onClick llamaremos anuestra
   * funcion handleClick mediante Binding en el jsx
   * y dentro de nuestro span incorparemos 
   * la varible "clicks" de nuestro Hook
   */
  const handleClick=()=>{
    /**
     * por ultimo nuestro handle click sera quien
     * implemtara la funcion setClicks he incrementara su 
     * valor
     */
    setClicks(clicks + 1);
  }




  return (
    <div classNameName="container">
      <footer classNameName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        
        <p classNameName="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {companyName} Clicks={clicks}
        </p>

        <span
          onClick={handleClick}
          classNameName="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img classNameName="App-logo" height="52" src="dog.png" alt="" />
        </span>

        <ul classNameName="nav col-md-4 justify-content-end">
          <li classNameName="nav-item">
            <a href="#" classNameName="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li classNameName="nav-item">
            <a href="#" classNameName="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li classNameName="nav-item">
            <a href="#" classNameName="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li classNameName="nav-item">
            <a href="#" classNameName="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li classNameName="nav-item">
            <a href="#" classNameName="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
//y lo exportamos
//export default Footer
