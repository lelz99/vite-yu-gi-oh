<script>
import { store } from '../data/store.js';
export default {
    name: 'CardPokemon',
    data: () => ({ store }),
}
</script>

<template>
    <ul>
        <li v-for="pokemon in store.pokemons">
            {{ pokemon.name }}
            <img :src="pokemon.imageUrl" alt="">
        </li>
    </ul>
</template>

<style lang="scss" scoped ></style>