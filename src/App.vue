<script>
import axios from 'axios';
import { store } from './data/store.js'
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import AppMain from './components/AppMain.vue';

export default {
  name: 'MyApp',
  components: { AppMain },
  created() {
    store.isLoading = true;
    axios.get(endpoint).then(res => {
      store.pokemons = res.data.docs
    }).catch(err => {
      console.error(err)
    }).then(() => {
      store.isLoading = false
    })
  }
}
</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
