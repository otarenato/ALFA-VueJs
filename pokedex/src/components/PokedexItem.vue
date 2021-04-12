<template>
    <div class="item-container">
        <div class="pokemonCard">
            <img :src="image" />
            <p>{{ name }}</p>
            <p>#{{ itemnumber }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pokedexitem',
    props: ['image', 'name', 'itemnumber']
}
</script>

<style lang="scss">
    @import '../assets/styleBase.scss';
    .item-container {
        padding: 5px;
        & .pokemonCard {
            background-color: $bg-item-color;
        }
    }
    
</style>
