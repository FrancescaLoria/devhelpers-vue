<script>
export default {
    name: "NotFound"
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5">Questa pagina non esiste</h2>
        <router-link class="btn btn-primary" :to="{ name: 'Home' }">Home</router-link>
    </div>
</template>


<style lang="scss" scoped></style>