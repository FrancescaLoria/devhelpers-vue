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
      developersByComment: [],
      loading: false // Developers filtrati in base al numero di recensioni (>=)

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
      
      this.loading = true
      axios.get(`${this.store.apiUrl}/api/developers/` + this.idsString).then((resp) => {
        console.log(`${this.store.apiUrl}/api/developers/` + this.idsString);
        // console.log("Resp.data.results", resp);
        this.developers = (resp.data.results);
        console.log("developers per tecnologia", this.developers);
      }).finally(() => {
        this.loading = false
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
      let filteredDevelopers = [];
      if (this.developersByVote != '' && this.developersByComment != '') {
        this.developersByVote.forEach(elem => {
          console.log(elem);
          this.developersByComment.forEach(comment => {
            console.log(comment);
            this.developers.forEach(dev => {
              console.log(comment);
              if (elem.id === comment.id === dev.id) {
                filteredDevelopers.push(dev);
              }
              console.log("Filtrati", filteredDevelopers);

              // this.developersByComment.forEach(comment => {
              // })
            })
          })
        });
      } else if (this.developersByVote == '' && this.developersByComment == '') {
        console.log(this.developersByComment);
        console.log(this.developersByVote);
        filteredDevelopers = this.developers;
      } else if (this.developersByComment != '') {
        if (this.idsString != '') {
          this.developersByComment.forEach(comment => {
            this.developers.forEach(dev => {
              if (dev.id === comment.id) {
                filteredDevelopers.push(dev);
              }
            })
          });
        } else {
          filteredDevelopers = this.developersByComment;
        }
        console.log("Filtrati", filteredDevelopers);
        // this.developersByComment = '';
        // return filteredDevelopers;
      } else if (this.developersByVote != '') {
        console.log("ids", this.ids);
        console.log("idsString", this.idsString);

        if (this.idsString != '') {
          this.developersByVote.forEach(elem => {
            this.developers.forEach(dev => {
              if (dev.id === elem.id) {
                filteredDevelopers.push(dev);
              }
              // this.developersByComment.forEach(comment => {
              // })
            })
          });
        } else {
          filteredDevelopers = this.developersByVote;
        }
        console.log("Filtrati", filteredDevelopers);
        // this.developersByVote = '';
      }
      return filteredDevelopers;
    }
  }
};
</script>

<template>
  <!-- <div v-for="technology in technologies" :key="technology.id">
    <input :checked="technology.id == this.$route.params.id" @change="getDeveloper(technology.id)" id="technology"
      type="checkbox" :value="technology.id" />
    <label for="technologies">{{ technology.name }}</label>
  </div>
  <Filters @filterByVote="getFilterVote" />
  <filterComment @filterByComment="getFilterComment" />

  <div class="container">
    <h1 class="title text-center my-4 fw-bold">I nostri programmatori</h1> -->
 



  <div class="container">
    <div class="ms-container">
      <h3 class="title text-center my-4 fw-bold">Scegli i linguaggi che ti interressano</h3>

      <div class="row p-4 justify-content-between">
        <div class="pretty p-icon p-round p-tada col-md-3 mb-2 fs-5 " v-for="technology in technologies" :key="technology.id">
        <input :checked="technology.id == this.$route.params.id" @change="getDeveloper(technology.id)" id="technology" type="checkbox" :value="technology.id" />
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
  </div>
  <div class="dev-space">

    <div class="container p-4">
  
      <div  v-if="filteredDevelopers.length !== 0">
        
        <div class="text-center text-white" v-if="loading">Caricamento ...</div>
        <div class="row " v-if="!loading">
          <!-- <div v-if="developersByVote === ''" class="col" v-for="developer in developers" :key="developer.id">
            <DeveloperCard :developer="developer" />
          </div> -->
          <div class="col" v-for="developer in filteredDevelopers" :key="developer.id">
            <DeveloperCard :developer="developer"/>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">non ci sono programmatori relativi a questa ricerca</p>
      </div>
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
 .dev-space {
    background-color: $light-green;
  }
</style>
