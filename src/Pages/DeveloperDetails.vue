<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "DeveloperDetails",
  data() {
    return {
      store,
      developer: "",
      name: '',
      vote: [],
      comment: ''
    };
  },
  mounted() {
    console.log(this.$route);
    const id = this.$route.params.id;
    axios.get(`${store.apiUrl}/api/developer/${id}`).then(
      (resp) => {
        console.log(resp);
        this.developer = resp.data.result;
        console.log(this.developer);
      },
      (error) => {
        console.log(error);
        if (error.response.status === 404) {
          this.$router.push({ name: "NotFound" });
        } else {
          alert("Oops qualcosa è andato storto...");
        }
      }
    );
  },
  methods: {
    getPostReview() {
      const data = {
        name: this.name,
        vote: this.vote,
        comment: this.comment
      }
      axios.post(`${store.apiUrl}/api/reviews/store`, data).then(resp => {
        console.log(resp);
      })
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
                <div class="email">EMAIL: {{ developer.email }}</div>
                <div class="addres">INDIRIZZO: {{ developer.address }}</div>
                <div class="github">GITHUB: {{ developer.github }}</div>
                <div class="phone">TELEFONO: {{ developer.phone }}</div>
                <div class="description">
                  DESCRIZIONE: {{ developer.description }}
                </div>
                <div class="skills">ABILITA': {{ developer.skills }}</div>
              </div>
              <div class="tecnologie">
                <div class="technologies">
                  <h4>Tecnologie</h4>
                  <ul>
                    <li v-for="technology in developer.technologies">
                      {{ technology.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-btn text-center">
          <button class="btn text-black fw-bold">
            <a href="">CONTATTAMI</a>
          </button>
        </div>
      </div>
      <p class="fw-bold text-center my-5">
        Sei soddisfatto del mio lavoro? Lasciami una recensione!
      </p>
      <div class="card text-center">
        <div class="container-btn">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
          <div class="mb-3">
            <label for="vote" class="form-label">Lascia un voto</label>
            <input type="number" class="form-control " id="vote" min="1" max="5" v-model="vote" />
          </div>
          <div class="mb-3">
            <label for="comment" class="form-label">Lascia un commento</label>
            <textarea class="form-control" id="comment" rows="3" v-model="comment"></textarea>
          </div>
          <button class="btn text-black fw-bold" type="submit" @click="getPostReview()">Invia</button>
        </div>
      </div>
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
