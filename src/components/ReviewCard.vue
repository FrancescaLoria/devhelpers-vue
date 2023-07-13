<template>
    <div id="review-card">
        <div class="card my-4">
            <div class="card-body">
                <h5 class="card-title">Cliente: {{ review.name }}</h5>
                <p class="card-text">Voto: <i v-for="(star, index) in review.vote" :key="index" class="fa-solid fa-star"
                        style="color: #efcd25"></i></p>
                <div>Commento:</div>
                <p class="card-text">{{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewCard",
    props: { review: { type: Object, required: true } },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.fa-star {
    color: yellow;

}
</style>