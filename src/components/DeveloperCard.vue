<script>
import axios from 'axios';
import {store} from "../store" 
export default {
    name: 'developerCard',
    data() {
        return {
            developers: [],
            store
        }
    },
    mounted () {
        this.getDeveloper()
    },
    methods: {
        getDeveloper() {
            axios.get(`${this.store.apiUrl}/api/developers`).then((resp) => {
                console.log(resp);
                this.developers = resp.data.results
            })
        }
    }
}
</script>


<template>

<div class="card" v-for="developer in developers">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ developer.name }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul v-for="item in developer.technologies">
        <li>{{ item.name }}</li>
    </ul>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</template>

<style>
</style>