<script>
import axios from 'axios';
import { store } from './data/store.js'
import { apiUri } from './data';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'MyApp',
  components: { AppMain, AppHeader },
  methods: {
    fetchPokemon(endpoint = apiUri) {
      store.isLoading = true;
      axios.get(endpoint).then(res => {
        store.pokemons = res.data.docs
      }).catch(err => {
        console.error(err)
      }).then(() => {
        store.isLoading = false
      });
    },
    fetchTypes() {
      store.isLoading = true;
      axios.get(apiUri + '/types1')
        .then(res => {
          store.types = res.data.map((type, i) => {
            return {
              id: i + 1,
              label: type,
              value: type,
            }
          })
        })
        .catch(err => { console.error(err) })
        .then(() => { store.isLoading = false })
    },
    filterPokemon(type) {
      const endpoint = type ? `${apiUri}?eq[type1]=${type}` : apiUri
      this.fetchPokemon(endpoint)
    }
  },
  created() {
    this.fetchPokemon()
    this.fetchTypes()
  },
}
</script>

<template>
  <AppHeader @type-change="filterPokemon" />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
