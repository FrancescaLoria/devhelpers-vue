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
    <h1>hello</h1>
    <div class="card-container" v-for="developer in developers">
        <router-link :to="{ name: 'developerDetails', params: { id: developer.id } }">
            <DevelopersCard />
        </router-link>
    </div>
</template>

<style lang="scss" scoped></style>