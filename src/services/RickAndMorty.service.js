import {API_RM} from '../constants/Api.constants';

class RickAndMortyService{

    async getAllCharacters(){
        //por defecto fetch el verbo es GET,por lo cual no
        // es necesario colocarlo
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));

        //Interceptor
        return response.json();
    }

}
//con esta exportacion ya se podra usar el servcio al generarlo
export default new RickAndMortyService();