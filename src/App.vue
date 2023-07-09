<script>
import DeveloperCard from "./components/DeveloperCard.vue";
import SearchBar from "./components/SearchBar.vue";
import {store} from "./store"
export default {
  components: {
    DeveloperCard,
    SearchBar,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <SearchBar/>
  <DeveloperCard />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
