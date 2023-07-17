<script>
import axios from 'axios';
import { store } from "../store";
import DeveloperCard from '../components/DeveloperCard.vue';

export default {
    name: "HomePage",
    components: {
        DeveloperCard
    },
    data() {
        return {
            store,
            technologies: [], // Array di linguaggi
            MenuItems: [
                {
                    label: 'fai una ricerca avanzata',
                    routeName: 'searchDev'
                }
            ],
            MostVoted:[]
        }
    },
    mounted() {
        this.getTechnology();
        this.mostVoted()
    },
    methods: {
        getTechnology() {
            axios.get(`${this.store.apiUrl}/api/technologies`).then((resp) => {
                this.technologies = resp.data.results;
            });
        },
        changePage(techId) {
            // this.$root.$emit('getDeveloper', techId);
            this.$router.push({ name: 'searchDev', params: { id: techId } });
        },
        mostVoted(){
            axios.get(`${this.store.apiUrl}/api/homepage`).then((resp) => {
                this.MostVoted = resp.data.results;
                console.log(this.MostVoted);
            });
        }
    }
}
</script>

<template>
    <div class="jumbo pb-4">
        <div class="jumbo-banner shadow-lg">
            <div class="ms_container">
                <div class="jumbo-top-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">

                                <h1 class="text-light text-center pt-4">Benvenuti in </h1>
                              

                                    <p class="line-1 anim-typewriter">{/DevHelpers}</p>
                             

                                <!-- <p class=" title-jumbo mt-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p> -->



                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
       
        <div class="adv-search mt-4 shadow-lg">
            <div class="adv-search-box d-flex flex-column align-items-center ">


                <h3 class="mb-4 text-center fw-bold text-uppercase p-4">if (Stai cercando un programmatore specializzato per la tua
                    azienda)</h3>
                <!-- <router-link class="btn btn-light text-decoration-none" :to="{ name: MenuItems[0].routeName }">{{
                    MenuItems[0].label }}</router-link> -->

                <!-- <div v-for="technology in technologies" :key="technology.id">
                    <input @click="changePage(technology.id)" id="technology" type="checkbox" :value="technology.id" />
                    <label for="technologies">{{ technology.name }}</label>
                </div> -->

                <div class="row p-4 justify-content-between">
                    <div class="pretty p-icon p-round p-tada col-md-3 mb-2 fs-5 " v-for="technology in technologies"
                        :key="technology.id">
                        <input @click="changePage(technology.id)" id="technology" type="checkbox" :value="technology.id" />
                        <div class="state p-success">
                            <!-- <i class="icon fa-regular fa-heart"></i> -->
                            <i class="icon fa-solid fa-heart"></i>

                            <label for="technologies">{{ technology.name }}</label>
                        </div>
                    </div>

                </div>

                <img class="dev-img w-25" src="src/assets/image/coding_3242257.png" alt="">
            </div>
        </div>

        <div class="container">

            <div class="most-voted ">
                <h2 class="text-center mt-5">Ecco alcuni degli sviluppatori più votati</h2>
                <div class="row">
                    
                        <DeveloperCard v-for="developer in MostVoted" :key="developer.id" :developer="developer" />
                    

                </div>
                
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.jumbo {
    background-color: $light-green;
    // height: 100vh;
    // background-image: url(src/assets/image/8764038.jpg);
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;

    .jumbo-banner {
        width: 100%;
        height: 400px;
        background-image: url(src/assets/image/alyani-yang-WajET_vzPmI-unsplash.jpg);
        background-size: cover;
        background-position: center;
       



       
    }
}

 .title-jumbo {
            text-shadow: 2px 0 10px $bkg-black;
            color: $bkg-light;
            // background: #2E764E;
            // background: radial-gradient(circle farthest-corner at bottom center, white 0%, #FFB199 85%);
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            padding-top: 50px;
        }
.ms-container {
    width: 80%;
    margin: 0 auto;
}
.dev-img {
    
    width: 80%;
    margin: 0 auto
}

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}
body{
  height: calc(100vh - 8em);
  padding: 4em;

 

}
.line-1{
    color: white;
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid white;
    font-size: 48pt;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}
@media screen and (max-width: 375px) {
    .line-1{
        font-size: 24pt;
    }
}
/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(10) 1s 1 normal both,
             blinkTextCursor 450ms steps(10) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 10em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

.adv-search {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    background-color: $bkg-light;
    border-radius: 20px;

    .adv-search-box {
        width: 80%;
        margin: 0 auto;

    }
}
</style>