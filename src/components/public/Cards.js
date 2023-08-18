import React from 'react'
import  {Card} from './Card'
/**
 * 
 * utilizaremos destructuring para recibir lo que nos esta
 * llegando podriamos usar props tambien
 */
 export const Cards = ( { mascotas }) =>  {
  /**
   * generaremos tantos componente  Card como necesitemos
   * mediante la variable cardList ,totamos mascotas que
   * es un Array , le aplicaremos el map para generar otro
   * array , y dentro de map llamamos a una callback
   * Function que toma los elementos bajo la variable m 
   * y devolvera un CardComponent(generando 20 Cartas)
   * Ahora usando el jsx cardList ,lo rederizaremos 
   * mediante binding dentro del div 
   */

  const  cardsList = mascotas.map((m) => <Card/> );
  return (
    <div className="album py-5 bg-body-tertiary">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cardsList}
            </div>
          </div>
        </div>
  )
}

//export default Cards
