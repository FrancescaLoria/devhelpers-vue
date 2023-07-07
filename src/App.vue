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
  <h2 class="m-4">HELLO VITA DE MERD</h2>
  <h5>ciao sono Paola</h5>
  <SearchBar/>
  <DeveloperCard />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
