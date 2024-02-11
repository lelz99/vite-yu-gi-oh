<script>
export default {
    name: 'SearchBar',
    data: () => ({
        selectedOption: ''
    }),
    props: {
        deafultLabel: String,
        options: Array,
    },
    emits: ['option-change']
}
</script>

<template>
    <div>
        <select v-model="selectedOption" @change="$emit('option-change', selectedOption)">
            <option value="">{{ deafultLabel }}</option>
            <option v-for="option in options" :key="option.id" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<style lang="scss" >
select {
    height: 30px;
}
</style>