<script>
export default {
    name: 'Footer',
    data() {
        return {
            MenuItems: [
                {
                    label: '',
                    routeName: 'Home'
                }
            ]
        }
    }
}
</script>

<template>
    <footer class="shadow-lg">
        <div class="container py-3 d-flex">

            <div class="logo w-50 fw-bold ">
                <router-link :to="{ name: MenuItems[0].routeName }" class="nav-link"
                    aria-current="page">DevHelpers</router-link>

            </div>
            <div class="w-50 text-end">

                <h5>Vuoi piú informazioni?</h5>
                
                <h6>Scrivici <a href="">info@devhelpers.com</a></h6>
                <h6>Chiama <a href="">+39 351 8159643</a></h6>
            </div>
        </div>

    </footer>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

footer {
   
    background-color: $bkg-light ;
}
</style>