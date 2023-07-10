<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "DeveloperDetails",
    data() {
        return {
            store,
            developer: ''
        }
    },
    mounted() {
        console.log(this.$route);
        const id = this.$route.params.id;
        axios.get(`${store.apiUrl}/api/developer/${id}`).then(resp => {
            console.log(resp);
            this.developer = resp.data.result;
            console.log(this.developer);
        }, error => {
            console.log(error);
            if (error.response.status === 404) {
                this.$router.push({ name: 'NotFound' })
            } else {
                alert('Oops qualcosa è andato storto...')
            }
        });
    },
}
</script>

<template>
    <div class="details">
        <div class="container">
            <div class="ms_container py-3">
                <h1 class="text-center developer-name">{{ `${developer.name} ${developer.surname}` }}</h1>
                <div class="container-img ">
                    <img v-if="developer.photo" :src="`${store.apiUrl}/storage/${developer.photo}`" alt="">
                    <img v-else src="../assets/image/webdeveloper.jpg" alt="">
                </div>
                <div class="email">{{ developer.email }}</div>
                <div class="addres">{{ developer.address }}</div>
                <div class="github">{{ developer.github }}</div>
                <div class="phone">{{ developer.phone }}</div>
                <div class="description">{{ developer.description }}</div>
                <div class="skills">{{ developer.skills }}</div>
                <div class="technologies">
                    <h4>Tecnologie</h4>
                    <ul>
                        <li v-for="technology in developer.technologies">{{ technology.name }}</li>
                    </ul>
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
</style>