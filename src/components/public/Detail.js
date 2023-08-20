import React ,{ useEffect, useState }from 'react'
import { Link, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [mascota, setmascota] = useState({});

  const {id} = useParams(); 


  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => setmascota(data))
  },[id])

  console.log(mascota);


  
 const detailCard = {
  width: '80%',
  margin: 'auto',
  background: 'white'
 }

  return (
    <div classNameName="card mb-3" style={{'background': 'gainsboro'}}>
    <div classNameName="row g-0 mt-4 mb-4" style={detailCard}>
      <div classNameName="col-md-3">
        <img src={mascota.image} classNameName="img-fluid rounded-start imgDetalle" alt="img del mascota"/>
      </div>
      <div classNameName="col-md-8 detallemascota">
        <div classNameName="card-body">
          <h5 classNameName="card-title">{mascota.name}</h5>
          <p classNameName="card-text"><small classNameName=""> Specie: {mascota.species}</small></p>
          <p classNameName="card-text"><small classNameName=""> Status: {mascota.status}</small></p>
          <p classNameName="card-text"><small classNameName=""> Gender: {mascota.gender}</small></p>
          <p classNameName="card-text"><small classNameName=""> Created: {mascota.created}</small></p>
        </div>
        <div classNameName="btn-group" style={{'marginLeft': '15px'}}>
              <button
                type="button"
                classNameName="btn btn-sm btn-outline-secondary"
              >
                <Link to={'/'} classNameName="nav-link px-2 text-success">Inicio</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
  )
}

//export default Detail
