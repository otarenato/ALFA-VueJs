import axios from 'axios';

const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=';

export default {
    getPokemons: (limit, callback) => {
        const urlPokemons = urlBase + limit;
        axios.get(urlPokemons).then((pokes) => {
            if(callback) {
                callback(pokes);
            }
        })
    },
    getImagePokemon: (url, callback) => {
        axios.get(url).then((response) => {
            if(callback) {
                callback(response);
            }
        })
    }
}
