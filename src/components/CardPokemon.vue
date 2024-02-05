<script>
import { store } from '../data/store.js';

export default {
    name: 'CardPokemon',
    data: () => ({ store }),
}
</script>

<template>
    <div class="row  row-cols-5">
        <AppLoader v-if="store.isLoading" />
        <div v-else class="col" v-for="pokemon in  store.pokemons ">
            <div class="card mt-2 p-3" :class="pokemon.type1">
                <img :src="pokemon.imageUrl" class="card-img-top" :alt="pokemon.name">
                <div class="card-body pb-0">
                    <ul class="text-center list-unstyled m-0 h6">
                        <li>{{ pokemon.number }}</li>
                        <li class="my-1 fw-bold">{{ pokemon.name }}</li>
                        <li>{{ pokemon.type1 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped >
.row-cols-5 {
    background-color: #565b60;
    padding: 20px;
    height: 75vh;
    overflow-y: scroll;

    .col {

        .card-img-top {
            height: 180px;
            border-radius: 50%;

        }
    }
}

.Water {
    background-color: #def3fd;
}

.Fire {
    background-color: #fddfdf;
}

.Grass {
    background-color: #defde0;
}
</style>