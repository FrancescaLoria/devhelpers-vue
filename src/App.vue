<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import { store } from "./store"
export default {
  components: {
    Header,
    Footer
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
  <Footer />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
