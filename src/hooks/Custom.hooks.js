import { useState } from "react";
/**
 * Vamos  crear Nuestro Primer CustomHook
 * 
 * este lo utilizaremos para setear los datos de un
 * formulario.
 * 
 * 
 */

//lo inicamos con inicialState vacio(Objeto{}/JSON)

export const useUserForm = (initialState ={})=> {

    //luego usamos el hook useState para Manejar el form
    const [form, setForm] = useState(initialState);

    /*genereramos la funcion handleChanges que se 
    encargara de escuchar cambios 
    */ 
   //este destructura un objeto target de un input
    const  handleChanges= ({target})=> {
        //para luego destructur, sacar el name y el value
        const {name, value} = target;
        setForm({
            /*
            mediante (...form) spread, vamos a  ir 
            generarando el json(que incialmente esta Vacio)
            en base a [name]:value,usando spread(..form)
            */ 
            ...form,
            [name]:value,
        })
    }
    /**
     * Por ultimo lo que debemos hacer, es return 
     * con el form,el setForm y el handleChanges
     * que ala vez como es un Hook lo que Hemos creado
     * finalizara el ciclo de vida de este hook
     */
    return{
        form,setForm,handleChanges,
    }
}
/**
 * Spread(...Form){
 *  Este Spread lo que hace es decir; Che si formulario 
 * ya tenia valores no te olvides de incluirlos,
 * ya que estamos seteando con setForm el formulario en si
 * Entonces Spread ,recupera datos viejos que esten 
 * en el formulario y mediante [name]:value, los agregamos
 * esto no soporta elemtos duplicados
 * }
 */