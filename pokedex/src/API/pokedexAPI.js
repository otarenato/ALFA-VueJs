import axios from 'axios';

const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

export default {
    getPokemons: (limit, callback) => {
        const urlPokemons = urlBase + limit;
        axios.get(urlPokemons).then((pokes) => {
            if(callback) {
                callback(pokes);
            }
        })
    }
}
