/**
 * aqui alojermos los datos de una api
 */

export const API_RM={

    URL:"https://rickandmortyapi.com/api",
    
    CHARACTERS : function(){
        return `${this.URL}/character`
    },
    CHARACTER_BY_ID : function(id){
        return `${this.URL}/character/${id}`
    }
}
    