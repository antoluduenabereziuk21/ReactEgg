/*Usando rec(De la Extencion ES7) nos auto creara la clase Main que extediende de Component
La diferencia entre Un componente y una clase es que esta ultima tiene un ciclo de vida y lleva un par de pasos pra ser efectiva la implementacion
*/
import React, { Component } from 'react'
import Cards from './Cards';




export class Main extends Component {
    /* en primer lugar el montaje se da por medio de un constructor, en la primera instanciacion se de atrevez de este contructor
    */
    constructor(props){
        /**
         * Cada Vez que usamos un constructor 
         * debemos hacer uso de los props
         * y Heredar mediante super que 
         * llama ala clase padres y pasamos
         *  estos props
         */
        super(props);
        console.log("Hi from constructor");
    };
    /**
     * componentDidMount sera quien luego de creado la
     * clase, se encargara de actualizar la informacion
     * que nos interece
     */
    componentDidMount(){
        console.log("Hi from componentDidMount");
    }
  render() {
    console.log("Hi from render");
    return (
        <div>
        <main>

        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album example</h1>
              <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
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

