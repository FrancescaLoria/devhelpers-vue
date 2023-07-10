<script>
import Header from './components/Header/Header.vue';
import { store } from "./store"
export default {
  components: {
    Header
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
