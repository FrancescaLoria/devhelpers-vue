<script>
import DevelopersCard from '../components/DevelopersCard.vue';
export default {
    name: "AdvancedSearch",
    data() {

        return {
            developers: []
        }
    },
    components: {
        DevelopersCard,
    }
}
</script>

<template>
    <div class="container">
        <h1 class="title text-center my-4 fw-bold">I nostri programmatori</h1>
        <div class="row">
            <div class="col" v-for="x in 20">
                <DevelopersCard />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.title {
    color: $dark-green;
}
</style>