<script >
export default {
    name: 'DevelopersCard'
}

</script>



<template>
    <div class="card developer-card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <button type="button" class="btn">
                <a href="#" class="card-link">Details</a>
            </button>


            <div class="container-img">
                <img src="../assets/image/webdeveloper.jpg" alt="">
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.developer-card {
    margin: 50px auto 20px;
    padding-top: 50px;
    position: relative;


    .container-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid gray;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .btn {
        background-color: $pink;
        color: $light-green;

    }
}
</style>