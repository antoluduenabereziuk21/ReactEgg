import React, { useEffect, useState } from 'react'
import RickAndMortyService  from '../../services/RickAndMorty.service'
import  {Card} from './Card';

 export const Cards = ( ) =>  {
 
  /**
   * Usaremos un hook de state,para llamar ala api desde
   * cards en vez desde el main, con la implementacion 
   * de useEffect, que se encargara de escuhar los cambios 
   * activos
   */
  const [mascotas, setMascotas] = useState([]);

  let count = 0;
  
  useEffect(() => {
    
    RickAndMortyService.getAllCharacters()
    .then((data) => {setMascotas(data.results)})
    .catch((err) => {console.log(err.message)});
    console.log("soy el useEffect")
    
    
  },[]);
  console.log("sigo refresacando"+ ( count ++));
  
  const  cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} /> );
  
  
  return (
    <div classNameName="album py-5 bg-body-tertiary">
          <div classNameName="container">
      
            <div classNameName="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cardsList}
            </div>
          </div>
        </div>
  )
}

//export default Cards
