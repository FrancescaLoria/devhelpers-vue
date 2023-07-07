<script>
export default {
    name: "AdvancedSearch",
    data(){
        return{

        }
    }
}
</script>

<template>
    <h1>hello</h1>
    <router-link :to="{name: singleDev[0].routeName, params:{name:DeveloperName}}">{{ singleDev[0].label }}</router-link>
</template>

<style lang="scss" scoped>

</style>