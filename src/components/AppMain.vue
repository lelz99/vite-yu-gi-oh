<script>
import CardPokemon from './CardPokemon.vue';
export default {
    name: 'AppMain',
    components: { CardPokemon }
}
</script>

<template>
    <main class="container">
        <CardPokemon />
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #dedede;
    padding: 40px;
    border-radius: 25px;
}
</style>