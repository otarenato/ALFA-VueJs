<template>
  <div id="app">
    <pokedexlist />
  </div>
</template>

<script>
import pokedexlist from "./components/PokedexList";

export default {
  name: 'App',
  components: {
    pokedexlist
  }
}
</script>

<style lang="scss">
  @import "./assets/styleBase.scss";
  #app {
    font-family: $font-base;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


