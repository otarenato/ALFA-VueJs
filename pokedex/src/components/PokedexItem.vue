<template>
    <div class="item-container">
        <div class="pokemonCard">
            <div>
                <img :src="image" />
            </div>
            <div class="content-name">
                <div><p>{{ name }}</p></div>
                <div><p>#{{ itemnumber }}</p></div>
            </div>
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
            padding: 15px;
            background-color: $bg-item-color;
            & .content-name {
                display:flex;
                justify-content: space-between;
                & div > p {
                    margin: 0;
                    font-size: 90%;
                }
            }
        }
    }
    
</style>
