<script>
export default {
    name: "HomePage",
    data() {
        return {
            MenuItems: [
                {
                    label: 'fai una ricerca avanzata',
                    routeName: 'search'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="jumbo">
        <div class="jumbo-banner">
            <div class="ms_container">
                <div class="jumbo-top-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">

                                <h2 class="w-50 title-jumbo text-uppercase fw-bold">Cerchi il programmatore perfetto per la tua azienda?
                                </h2>

                                <p class=" title-jumbo mt-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                
                            </div>

                        </div>

                    </div>

                </div>


            </div>


        </div>
        <div class="adv-search">
            <div class="adv-search-box d-flex flex-column align-items-center">


                <h5 class="text-white mb-4 text-center fw-light">Stai cercando un programmatore specializzato per la tua
                    azienda??</h5>
                <router-link class="btn btn-light text-decoration-none" :to="{ name: MenuItems[0].routeName }">{{
                    MenuItems[0].label }}</router-link>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.jumbo {
    height: 100vh;
    background-image: url(src/assets/image/8764038.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    .jumbo-banner {
        width: 100%;
        height: 400px;
        background-image: url(src/assets/image/brooke-cagle-ICTKcvnXx_8-unsplash-1.jpg);
        background-size: cover;



        .title-jumbo {
            text-shadow:  2px 0 10px $bkg-black;
            color: $bkg-light;
            // background: #2E764E;
            // background: radial-gradient(circle farthest-corner at bottom center, white 0%, #FFB199 85%);
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
            padding-top: 50px;
        }
    }
}




.adv-search {
    padding: 20px;

    background-color: black;

    .adv-search-box {
        width: 60%;
        margin: 0 auto;

    }
}

</style>