<template>
    <div>
        <searchfilter v-model="filtro" />
        <div class="poke-wrapper">
            <div v-for="(pokemon, index) in filtroPokemon" :key="index">
                <pokedexItem 
                    v-bind:name="pokemon.name"
                    v-bind:image="pokemon.image"
                    v-bind:itemnumber="pokemon.id"
                />
            </div>
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
        pokedexapi.getPokemons('151', pokes => {
            var array = [];
            pokes.data.results.forEach(element => {
                pokedexapi.getImagePokemon(element.url, item => {
                    var obj = {
                        id: item.data.id,
                        name: item.data.name,
                        image: item.data.sprites.front_default
                    }
                    array.push(obj);
                    array = array.sort((a, b) => { return a.id - b.id })
                })
            });
            this.pokemons = array;
        })
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

<style lang="sass">
    .poke-wrapper
        display: grid;
        grid-template-columns: repeat(6, 1fr);
</style>

