<template>
    <div class="container-filter">
        <input type="text" placeholder="Search" v-model="filtro" />
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
    @import '../assets/styleBase.scss';
    .container-filter {
        margin: 0 5px 20px 5px;
        & input {
            width: 100%;
            border: none;
            border-bottom: solid 2px #ccc;
            background-color: $bg-color;
            height: $height-base * 3;
        }
        & input:focus {
            outline: none;
        }
    }
</style>
