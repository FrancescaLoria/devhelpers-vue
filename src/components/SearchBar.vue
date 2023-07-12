<script>
import axios from 'axios';
import { store } from "../store";
import DeveloperCard from "./DeveloperCard.vue";
import Filters from './Filters.vue';
import filterComment from './filterComment.vue';

export default {
  name: "SearchBar",
  components: {
    DeveloperCard,
    Filters,
    filterComment
  },
  data() {
    return {
      store,
      technologies: [], // Array di linguaggi
      developers: [],  // Array di developer
      developersByVote: [], // Developers filtrati in base alla media voto (>=)
      ids: [],  // Array di id
      idsString: "",  // Sringa con id collegati con &
      developersByComment: [], // Developers filtrati in base al numero di recensioni (>=)

    };
  },
  mounted() {
    this.getTechnology();
    this.getDeveloper(parseInt(this.$route.params.id));
  },
  methods: {
    // Prendi le tecnologie
    getTechnology() {
      axios.get(`${this.store.apiUrl}/api/technologies`).then((resp) => {
        this.technologies = resp.data.results;
      });
    },
    // Prendi i developer
    getDeveloper(id) {
      if (this.ids.includes(id)) {
        const index = this.ids.indexOf(id);
        this.ids.splice(index, 1);
      } else {
        this.ids.push(id);
      }

      this.idsString = this.ids.join('&');

      axios.get(`${this.store.apiUrl}/api/developers/` + this.idsString).then((resp) => {
        console.log(`${this.store.apiUrl}/api/developers/` + this.idsString);
        // console.log("Resp.data.results", resp);
        this.developers = (resp.data.results);
        console.log(this.developers);
      })
    },
    // Filtra per voti
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
    getFilterComment(comment) {
      console.log("Commento", comment);
      // Non funziona bene
      if (comment != '') {
        axios.get(`${this.store.apiUrl}/api/review/` + comment)
          .then((resp) => {
            this.developersByComment = resp.data.results;
            console.log("By comment", this.developersByComment);
          })
      } else {
        this.developersByComment = this.developers;
      }
    },
  },
  computed: {
    // Filtro sui developer
    filteredDevelopers() {
      // Non funziona bene
      if (this.developersByVote != '' || this.developersByComment != '') {
        let filteredDevelopers = [];
        this.developersByVote.forEach(elem => {
          this.developers.forEach(dev => {
            this.developersByComment.forEach(comment => {
              if (dev.id === elem.id && elem.id === comment.id) {
                filteredDevelopers.push(dev);
                console.log(filteredDevelopers);
              }
            })
          })
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
    <input :checked="technology.id == this.$route.params.id" @change="getDeveloper(technology.id)" id="technology"
      type="checkbox" :value="technology.id" />
    <label for="technologies">{{ technology.name }}</label>
  </div>
  <Filters @filterByVote="getFilterVote" />
  <filterComment @filterByComment="getFilterComment" />

  <div class="container">
    <h1 class="title text-center my-4 fw-bold">I nostri programmatori</h1>
 



  <div class="container">
    <div class="ms-container">
      <h3 class="title text-center my-4 fw-bold">Scegli i linguaggi che ti interressano</h3>

      <div class="row p-4 justify-content-between">
        <div class="pretty p-icon p-round p-tada col-md-3 mb-2 fs-5 " v-for="technology in technologies" :key="technology.id">
        <input @change="getDeveloper(technology.id)" id="technology" type="checkbox" :value="technology.id" />
        <div class="state p-success">
          <!-- <i class="icon fa-regular fa-heart"></i> -->
          <i class="icon fa-solid fa-heart"></i>
    
          <label for="technologies">{{ technology.name }}</label>
        </div>
      </div>
  
      </div>
    </div>
    <h3 class="title text-center my-4 fw-bold">Fai una ricerca avanzata:</h3>

    <div class="d-flex justify-content-evenly">
      <Filters @filterByVote="getFilterVote" />
      <filterComment @filterByComment="getFilterComment" />

    </div>
    <h2 class="title text-center my-4 fw-bold">I nostri programmatori</h2>
    <div v-if="filteredDevelopers.length !== 0">

      <div class="row">
        <!-- <div v-if="developersByVote === ''" class="col" v-for="developer in developers" :key="developer.id">
          <DeveloperCard :developer="developer" />
        </div> -->
        <div class="col" v-for="developer in filteredDevelopers" :key="developer.id">
          <DeveloperCard :developer="developer" />
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center">non ci sono programmatori relativi a questa ricerca</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.title {
  color: $dark-green;
}
.ms-container {
  width: 80%;
  margin: 0 auto;
}
</style>
