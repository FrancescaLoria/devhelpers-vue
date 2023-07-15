<script>
import { store } from "../store";
import axios from "axios";
import ReviewCard from "../components/ReviewCard.vue";
import Message from "../components/Message.vue";
export default {
  name: "DeveloperDetails",
  components: { ReviewCard, Message },
  data() {
    return {
      store,
      developer: "",
      name: '',
      vote: '',
      comment: '',
      reviews: [],
      loading: false,
      messageSend: false,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`${store.apiUrl}/api/developer/${id}`).then(
      (resp) => {
        this.developer = resp.data.result;
      },
      (error) => {
        if (error.response.status === 404) {
          this.$router.push({ name: "NotFound" });
        } else {
          alert("Oops qualcosa è andato storto...");
        }
      }
    );

    this.retrieveDeveloperReview()
  },
  methods: {

    // Funzione per recuperare le recensioni di uno sviluppatore
    retrieveDeveloperReview() {
      axios.get(`${store.apiUrl}/api/developer_reviews/${this.$route.params.id}`).then(resp => {
        this.reviews = resp.data.reviews
      })
    },

    getPostReview() {
      this.loading = true
      const data = {
        name: this.name,
        vote: this.vote,
        comment: this.comment,
        user_id: this.$route.params.id
      }
      // Chiamata per salvare una nuova recensione
      axios.post(`${store.apiUrl}/api/reviews/store`, data).then(() => {
        this.name = '';
        this.vote = '';
        this.comment = '';

        // Chiamata per recuperare le recensioni di uno sviluppatore
        // Eseguo la chiamata per recuperare le recensioni dopo averne salvata una, per evitare il ricaricamento della pagina prima di poterle vedere
        this.retrieveDeveloperReview()
      }).finally(() => {
        this.loading = false
      })

      this.messageSend = true


    }
  }
};
</script>

<template>
  <div class="details">
    <div class="container">
      <div class="ms_container py-3">
        <h1 class="text-center developer-name">
          {{ `${developer.name} ${developer.surname}` }}
        </h1>
        <div class="profile">
          <div class="container-img">
            <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="" />
            <img v-else src="../assets/image/webdeveloper.jpg" alt="" />
          </div>
          <div class="card">
            <div class="text">
              <div class="info">
                <div class="email"><span class="fw-bold">EMAIL:</span>  {{ developer.email }}</div>
                <div class="addres"><span class="fw-bold">INDIRIZZO:</span> {{ developer.address }}</div>
                <div class="github"><span class="fw-bold">GITHUB:</span> {{ developer.github }}</div>
                <div class="phone"><span class="fw-bold">TELEFONO:</span> {{ developer.phone }}</div>
                <div class="description"><span class="fw-bold">DESCRIZIONE:</span>
                   {{ developer.description }}
                </div>
                <div class="skills"><span class="fw-bold">ABILITA':</span> {{ developer.skills }}</div>
              </div>
              <div class="tecnologie">
                <div class="technologies">
                  <h4>TECNOLOGIE</h4>
                  <ul>
                    <li v-for="technology,index in developer.technologies" :key="index">
                      {{ technology.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-btn text-center">
          <Message />
        </div>
      </div>
      <p class="fw-bold text-center my-5">
        Sei soddisfatto del mio lavoro? Lasciami una recensione!
      </p>
      <div class="card text-center">
        <div class="container-btn">
          <form @submit.prevent="getPostReview()">
            <div class="mb-3">
              <label for="name" class="form-label my-3">Nome</label>
              <input type="text" required minlength="1" maxlength="50" class="form-control" id="name" v-model="name" />
            </div>
            <div class="vote my-3">Voto</div>
            <div class="container-radio d-flex gap-2">
              <div class="form-check" v-for="x,index in 5" :key="index">
                <input required class="form-check-input" name="vote-radio" type="radio" v-model="vote" :value="x"
                  :id="'flexRadioDefault' + x">
                <label class="form-check-label" :for="'flexRadioDefault' + x">
                  {{ x }}
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="comment" class="form-label my-3">Lascia un commento</label>
              <textarea required minlength="1" maxlength="500" class="form-control" id="comment" rows="3"
                v-model="comment"></textarea>
            </div>
            <button class="btn text-black fw-bold" type="submit">Invia</button>
          </form>
          <div v-if="loading">Sto inviando</div>
        </div>
        <div class="my-3" v-if="!loading && messageSend">
        Recensione inviata correttamente
      </div>
      </div>
      <h5 class="text-center">Recensioni</h5>
      <div class="reviews-container" v-if="reviews.length">
        <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </div>
      <div class="text-center" v-else>Non ci sono recensioni al momento</div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container {
  padding-top: 50px;
}

.ms_container {
  margin: 0 auto;
  background-color: $light-green;
  width: 85%;
  border-radius: 20px;
}

.developer-name {
  color: $bkg-light;
}

.container-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid gray;
  margin: 0 auto;
  border: 2px solid $bkg-light;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}

.card {
  margin: 20px 50px;
  padding: 25px;
  text-align: center;

  .text {
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
  }

  .container-btn {
    .container-radio {
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}

.btn {
  background-color: $pink;
  color: $light-green;

  a {
    text-decoration: none;
    color: unset;
  }
}

.tecnologie {
  margin-top: 20px;

  ul {
    list-style-type: none;
    padding: unset;
  }
}

// DESKTOP
@media screen and (min-width: 1024px) {
  .ms_container {
    width: 70%;
  }

  .container-img {
    margin: auto 0;
    margin-left: 40px;
  }

  .profile {
    display: flex;
  }

  .text {
    display: flex;
  }
}

//LARGE DISPLAYS
@media screen and (min-width: 1200px) {
  .text {
    .tecnologie {
      margin-top: unset;
    }
  }
}
</style>
