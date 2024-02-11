<script>
import SearchBar from './SearchBar.vue';
import { store } from '../data/store';
export default {
    name: 'AppHeader',
    components: { SearchBar },
    data: () => store,
    emits: ['type-change']
}
</script>

<template>
    <header class="container d-flex justify-content-between pt-5">
        <div class="d-flex mb-3">
            <div class="large-ball"></div>
            <div class="small-ball bg-danger"></div>
            <div class="small-ball bg-warning"></div>
            <div class="small-ball bg-success"></div>
        </div>
        <SearchBar deafult-label="All Types" :options="types" @option-change="$emit('type-change', $event)" />
    </header>
</template>

<style lang="scss" >
.large-ball {
    width: 80px;
    height: 80px;
    background-color: #8181ff;
    border-radius: 50%;
    border: 5px solid white;
}

.small-ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid white;
    margin-left: 10px;
}
</style>