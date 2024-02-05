<script>
import CardPokemon from './CardPokemon.vue';
import AppHeader from './AppHeader.vue';
export default {
    name: 'AppMain',
    components: { AppHeader, CardPokemon }
}
</script>

<template>
    <AppHeader />
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