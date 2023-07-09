<script>
import axios from 'axios';
import { store } from "../store"
export default {
    name: 'developerCard',
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
    <div class="card">
        <div class=" card-body">
            <h5 class="card-title">{{ developer.name }}</h5>
            <p class="card-text">{{ developer.surname }}</p>
            <ul v-for="item in developer.technologies">
                <li>{{ item.name }}</li>
            </ul>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
</template>

<style></style>