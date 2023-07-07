import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Pages/HomePage.vue";
import AdvancedSearch from './Pages/AdvancedSearch.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component:HomePage
        },
        {
            path:'/search',
            name:'search',
            component:AdvancedSearch
        },
    ]
});

export {router};