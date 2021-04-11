<template>
    <div>
        <searchfilter v-model="filtro" />
        <div v-for="(pokemon, index) in filtroPokemon" :key="index">
            <pokedexItem 
                v-bind:name="pokemon.name"
                v-bind:image="pokemon.sprites.front_default"
            />
        </div>
    </div>
</template>
<script>
import searchfilter from './SearchFilter';
import pokedexItem from "./PokedexItem";
import pokedexapi from '../API/pokedexAPI';
export default {
    name: 'pokedexlist',
    components: {
        searchfilter,
        pokedexItem
    },
    data: () => {
        return {
            filtro: "",
            pokemons: []
        }
    },
    created() {
        for(var i=0; i<151; i++) {
            pokedexapi.getPokemons(i, pokes => {
                this.pokemons.push(pokes.data);
            })
        }
    },
    computed: {
        filtroPokemon() {
            const lowerCaseFilter = this.filtro.toLowerCase();
            return this.pokemons.filter(
                pokemon => pokemon.name.toLowerCase().includes(lowerCaseFilter)
            )
        }
        
    }
}
</script>

