<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="container">
        <div class="d-flex mb-3">
            <div class="large-ball"></div>
            <div class="small-ball bg-danger"></div>
            <div class="small-ball bg-warning"></div>
            <div class="small-ball bg-success"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped >
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