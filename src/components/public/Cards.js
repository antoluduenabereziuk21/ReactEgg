import React from 'react'
import  {Card} from './Card'

 export const Cards = ( { mascotas }) =>  {
  /**
   *Debemos pasarle ala Card una mascota(m) y una key que sera el id(lo cual es necesario porque cuando se itera un componente que son diferentes es necesario pasarle una key,de no hacerlo tendremos conflictos)
   */

  const  cardsList = mascotas.map((m) => <Card mascota={m} key={m.id}/> );
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
