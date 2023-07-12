<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'filteComment',
    data() {
        return {
            countComment: '',
            store,
        }
    },
}
</script>

<template>
    <div class="rev-vote text-center">

        <h4>Numero di recensioni</h4>
        <select class="form-select form-select-md " name="comment" v-model="countComment" id="comment" @change="$emit('filterByComment', countComment)">
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <!-- <input type="range" min="0" max="10" name="comment" v-model="countComment" id="comment" @change="$emit('filterByComment', countComment)"> -->

    </div>

</template>

<style lang="scss" scoped></style>