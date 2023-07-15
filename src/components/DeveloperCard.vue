<script>
import { store } from "../store"
export default {
    name: 'DeveloperCard',
    props: {
        developer: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card developer-card">
        <div class="left-container">

            <div class="container-image ">
                <!-- SEZIONE IMMAGINE -->
                <div class="container-img">
                    <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="">
                    <img v-else src="../assets/image/webdeveloper.jpg" alt="">
                </div>

            </div>
        </div>

        <div class="name-vote-tech">
            <div class="container-name d-flex justify-content-center">
                <!-- SEZIONE NOME -->
                <h2 class="title">{{ developer.name }}</h2>
                <h2 class="subtitle ms-1">{{ developer.surname }}</h2>
            </div>
            <div class="container-media text-center ">
                <!-- SEZIONE MEDIA VOTO E RECENSIONE -->
                <div class="vote fst-italic fw-bold">MEDIA VOTO :
                    <span v-for="vote, id in developer.avg_vote" :key="id">
                        <i class="fa-solid fa-star" style="color: rgb(239, 205, 37);"></i>
                    </span>
                </div>
                <div class="review fst-italic fw-bold">NUMERO RECENSIONI : <span class="text-primary fw-bold">{{
                    developer.total_review }}</span></div>
            </div>



            <!-- SEZIONE TECNOLOGIE -->
            <div class="tech text-center my-2">
                <h4>TECNOLOGIE</h4>
                <div class="cards-container d-flex flex-wrap gap-2 justify-content-center fst-italic fw-bold">
                    <div class="card-text" v-for="item, index in developer.technologies" :key="index">
                        <div>{{ item.name }}</div>
                    </div>
                </div>

            </div>
        </div>


        <!-- BOTTONE -->
        <div class="cont-btn text-center">

            <button type="button" class="btn fw-bold text-dark my-2">
                <router-link :to="{ name: 'developerDetails', params: { id: developer.id } }"
                    class=" card-link">DETAILS</router-link>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.developer-card {
    width: 100%;
    margin: 30px auto;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;

    .container-img {
        width: 150px;
        height: 150px;
        margin: 10px auto;
        border-radius: 50%;
        border: 2px solid gray;


        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .btn {
        background-color: $pink;
        color: $light-green;
        margin: 0 auto;

        a {
            text-decoration: none;
            color: unset;
        }

    }
}

@media screen and (min-width: 768px) {
    .developer-card {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

@media screen and (min-width: 1400px) {
    .developer-card {
        width: 45%;
    }
}
</style>