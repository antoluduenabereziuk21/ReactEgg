import React from "react";
import {Link} from 'react-router-dom'
/**
 * 
 * dentro de card atraperamos la mascota mediante destrugturing
 * 
 */
export const Card = ({mascota}) => {
/**
   cambiaremos el pedido ala api,del didMount, a un Hook
   que en este caso sera UseEffect , que lo que hace es estar escuahdno activamente cambios
   */

  return (
    <div classNameName="col">
      <div classNameName="card shadow-sm">
        <img
          width="100%"
          src={mascota.image}
          alt="image Rick&Morty"
        />
        <h3 classNameName="mb-0  text-dark">{mascota.name}</h3>
        <div classNameName="card-body">
          <p classNameName="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div classNameName="d-flex justify-content-between align-items-center">
            <div classNameName="btn-group">
              <button
                type="button"
                classNameName="btn btn-sm btn-outline-secondary"
              >
               <Link to={`/details/${mascota.id}` }classNameName="nav-link">
                Detalle
               </Link>
              </button>
              <button
                type="button"
                classNameName="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small classNameName="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

//export default Card;
