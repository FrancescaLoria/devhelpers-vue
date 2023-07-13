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
        <div class="container py-3">

            <div class="logo fw-bold ">
                <router-link :to="{ name: MenuItems[0].routeName }" class="nav-link"
                    aria-current="page">DevHelpers</router-link>

            </div>
        </div>

    </footer>
</template>


<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

footer {
    height: 60px;
    background-color: $bkg-light ;
}
</style>