<script>
import axios from 'axios';
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
    <!-- <div class="card developer-card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ developer.name }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ developer.surname }}</h6>
            <ul class="card-text" v-for="item, index in developer.technologies" :key="index">
                <li>{{ item.name }}</li>
            </ul>
            <button type="button" class="btn">
                <router-link :to="{ name: 'developerDetails', params: { id: developer.id } }"
                    class=" card-link">Details</router-link>
            </button>


            <div class="container-img">
                <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="">
                <img v-else src="../assets/image/webdeveloper.jpg" alt="">
            </div>
        </div>
    </div> -->
    <div class="container ms_container">
        <div class="col">
            <div class="card developer-card">
                <div class="container-image ">
                    <!-- SEZIONE IMMAGINE -->
                    <div class="container-img">
                        <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="">
                        <img v-else src="../assets/image/webdeveloper.jpg" alt="">
                    </div>

                </div>

                <div class="name-vote-tech">
                    <div class="container-name d-flex justify-content-center">
                        <!-- SEZIONE NOME -->
                        <h2 class="title">{{ developer.name }}</h2>
                        <h2 class="subtitle ms-1">{{ developer.surname }}</h2>
                    </div>
                    <div class="container-media d-flex justify-content-center">
                        <!-- SEZIONE MEDIA VOTO E RECENSIONE -->
                        <div class="vote">VOTO</div>
                        <div class="review ms-1">RECENSIONE</div>
                    </div>



                    <!-- SEZIONE TECNOLOGIE -->
                    <div class="tech text-center my-2">
                        <h4>TECNOLOGIE</h4>
                        <div class="cards-container d-flex gap-2 justify-content-center">
                            <div class="card-text" v-for="item, index in developer.technologies" :key="index">
                                <div>{{ item.name }}</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.developer-card {
    margin: 50px auto 20px;
    padding-top: 30px;
    padding-bottom: 30px;
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

    }
}

@media screen and (min-width: 768px) {
    .developer-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

}

@media screen and (min-width: 992px) {
    .developer-card {
        max-width: 700px;
    }
}
</style>