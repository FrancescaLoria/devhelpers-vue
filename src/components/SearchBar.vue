<script>
import axios from 'axios';
import { store } from "../store";
import DeveloperCard from "./DeveloperCard.vue";
import Filters from './Filters.vue';

export default {
  name: "SearchBar",
  components: {
    DeveloperCard,
    Filters,
  },
  data() {
    return {
      store,
      technologies: [], // Array di linguaggi
      developers: [],  // Array di developer
      developersByVote: [], // Developers filtrati in base alla media voto (>=)
      ids: [],  // Array di id
      idsString: "",  // Sringa con id collegati con &
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
    getFilterVote(vote) {
      console.log("Voto", vote);
      // Non funziona bene
      if (vote != '') {
        axios.get(`${this.store.apiUrl}/api/reviews/` + vote)
          .then((resp) => {
            this.developersByVote = resp.data.results;
            console.log("By vote", this.developersByVote);
          })
      } else {
        this.developersByVote = this.developers;
      }
    },
  },
  computed: {
    filteredDevelopers() {
      // Non funziona bene
      if (this.developersByVote != '') {
        let filteredDevelopers = [];
        this.developersByVote.forEach(elem => {
          this.developers.forEach(dev => {
            if (dev.id === elem.id) {
              filteredDevelopers.push(dev);
              console.log(filteredDevelopers);
            }
          });
        });
        console.log("Filtrati", filteredDevelopers);
        return filteredDevelopers;
      } else {
        return this.developers;
      }
    }
  }
};
</script>

<template>
  <div v-for="technology in technologies" :key="technology.id">
    <input @change="getDeveloper(technology.id)" id="technology" type="checkbox" :value="technology.id" />
    <label for="technologies">{{ technology.name }}</label>
  </div>
  <Filters @filterByVote="getFilterVote" />

  <div class="container">
    <h1 class="title text-center my-4 fw-bold">I nostri programmatori</h1>
    <div class="row">
      <!-- <div v-if="developersByVote === ''" class="col" v-for="developer in developers" :key="developer.id">
        <DeveloperCard :developer="developer" />
      </div> -->
      <div class="col" v-for="developer in filteredDevelopers" :key="developer.id">
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
