<script>
export default{
    name: "HomePage",
    data(){
        return{
            MenuItems:[
                {
                    label:'fai una ricerca avanzata',
                    routeName: 'search'
                }
            ]
        }
    }
}
</script>

<template>
    <h1>ciao</h1>
    <router-link :to="{name: MenuItems[0].routeName}">{{ MenuItems[0].label }}</router-link>
</template>

<style lang="scss" scoped>

</style>