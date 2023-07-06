<script>
export default {
    name: 'Header'
}

</script>



<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col sm-6">
                    <a href="http://127.0.0.1:8000/login">LOGIN</a>
                </div>
                <div class="col sm-6">
                    <a href="http://127.0.0.1:8000/register">REGISTER</a>
                </div>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
header {
    height: 60px;
    background-color: aqua;
}
</style>