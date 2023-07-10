<script>
import DeveloperCard from '../components/DeveloperCard.vue';
import SearchBar from '../components/SearchBar.vue';
export default {
    name: "AdvancedSearch",
    data() {

        return {
            developers: []
        }
    },
    components: {
        DeveloperCard,
        SearchBar
    }
}
</script>

<template>
    <SearchBar />
</template>

<style lang="scss" scoped></style>