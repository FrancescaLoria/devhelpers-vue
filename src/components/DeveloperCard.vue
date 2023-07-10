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
    <div class="card developer-card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ developer.name }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ developer.surname }}</h6>
            <ul class="card-text" v-for="item in developer.technologies">
                <li>{{ item.name }}</li>
            </ul>
            <button type="button" class="btn">
                <router-link :to="{ name: 'developerDetails' }" class=" card-link">Details</router-link>
            </button>


            <div class="container-img">
                <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="">
                <img v-else src="../assets/image/webdeveloper.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.developer-card {
    margin: 50px auto 20px;
    padding-top: 50px;
    position: relative;


    .container-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid gray;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);

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
</style>