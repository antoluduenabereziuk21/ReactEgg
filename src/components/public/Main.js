
import React, { Component } from 'react'
import {Cards} from './Cards';

export className Main extends Component {
    
    constructor(props){
        
        super(props);
        /**usaremos el Hook State, como lo llamaremos desde
         * el constructor ,debenos asiganarle un valor inicial
         * que en principio sera una array vacio
       
        this.state = {mascotas:[]};
         */
        
    };
   
    componentDidMount(){
        /**
         * desde didMount llamaremos a nuestro servicio,porque desde aqui?
         * por el echo que didMount se ejecutara luego que el componente
         * se haya cargado

        mediante el setState incluiremos la data.result a nuestro state que lo iniciamos como un //array vacio, para luego renderizarlo en nuestras cartas
        
        RickAndMortyService.getAllCharacters()
        .then((data) => {this.setState({mascotas: data.results});})
        .catch((err) => {console.log(err)});

        <Cards mascotas={this.state.mascotas}/>
        */
    }
  render() {
    
    return (
        <div>
        <main>

        <section classNameName="py-5 text-center container">
          <div classNameName="row py-lg-5">
            <div classNameName="col-lg-6 col-md-8 mx-auto">
              <h1 classNameName="fw-light">Album example</h1>
              <p classNameName="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
                <a href="#" classNameName="btn btn-primary my-2">Main call to action</a>
                <a href="#" classNameName="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>
      <Cards/>
      </main>
      </div>
    )
  }
}
export default Main

