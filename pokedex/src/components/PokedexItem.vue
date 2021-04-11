<template>
    <div class="pokemonCard">
        <img :src="image" />
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'pokedexitem',
    props: ['name', 'image']
}
</script>

<style lang="scss">
    $border-color: #ff0;
    .pokemonCard {
        border: solid 1px $border-color;
    }
</style>
