<template>
    <div class="container-filter">
        <input class="filter" type="text" placeholder="Filtrar Pokemon" v-model="filtro" />
    </div>
</template>

<script>
export default {
    name: 'SearchFilter',
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    computed: {
        filtro: {
            get() {
                return this.value;
            },
            set(updated) {
                this.$emit("input", updated);
            }
        }
    }
}
</script>

<style lang="scss">
    .container-filter {
        margin: 0 0 20px 0;
    }
    .filter {
        width: 100%;
        border: none;
        border-bottom: solid 2px #ccc;
    }
</style>
