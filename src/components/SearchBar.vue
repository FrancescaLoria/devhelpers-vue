<script>
import axios from 'axios';
import { store } from "../store";
import DeveloperCard from "./DeveloperCard.vue";
import Filters from './Filters.vue';
export default {
  name: "SearchBar",
  components: {
    DeveloperCard,
    Filters
  },
  data() {
    return {
      store,
      technologies: [],
      developers: [],
      developerSelected: [],
      ids: [],
      idsString: "",
      developerVote:[],
      filteredDevelopers:[]
      // paramsToString: ""
    };
  },
  mounted() {
    this.getTechnology();
  },
  methods: {
    getTechnology() {
      axios.get(`${this.store.apiUrl}/api/technologies`).then((resp) => {
        this.technologies = resp.data.results;
      });
    },

    getDeveloper(id) {

      if (this.ids.includes(id)) {
        const index = this.ids.indexOf(id);
        this.ids.splice(index, 1);
      } else {
        this.ids.push(id);
      }

      this.idsString = this.ids.join('&');
      console.log(this.idsString);

      axios.get(`${this.store.apiUrl}/api/developers/` + this.idsString).then((resp) => {
        console.log(`${this.store.apiUrl}/api/developers/` + this.idsString);
        console.log("Resp.data.results", resp);
        this.developers = (resp.data.results);
      })
    },
    getFilterVote(vote){
      axios.get(`${this.store.apiUrl}/api/reviews/` + vote)
      .then((resp)=>{
          console.log(resp);
          this.developersVote = resp.data.results
      })
    },

    developerFilter(){

    }
  },
};
</script>

<template>
  <div v-for="technology,index in technologies" :key="index">
    <input @change="getDeveloper(technology.id)" id="technology" type="checkbox" :value="technology.id" />
    <label for="technologies">{{ technology.name }}</label>
  </div>
  <Filters @filterVote ="getFilterVote(selectedVote)"/>
  <!-- <div v-for="developer in developers">
    <DeveloperCard :developer="developer" />
  </div> -->

  <div class="container">
    <h1 class="title text-center my-4 fw-bold">I nostri programmatori</h1>
    <div class="row">
      <div class="col" v-for="developer,index in filteredDevelopers" :key="index">
        <DeveloperCard :developer="developer" />
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
