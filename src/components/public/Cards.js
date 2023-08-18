import React from 'react'
import  {Card} from './Card'
/**
 * 
 * podemos mediante props ver los que nos llega
 * console.log(props);
 */
 export const Cards = (props) => {
  //console.log(props);
  return (
    <div className="album py-5 bg-body-tertiary">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             
            </div>
          </div>
        </div>
  )
}

//export default Cards
