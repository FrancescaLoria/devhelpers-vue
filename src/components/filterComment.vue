<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'filterComment',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="rev-vote text-center">

        <h4>Numero di recensioni</h4>
        <select class="form-select form-select-md " name="comment" v-model="store.selectedComment" id="comment"
            @change="$emit('filterByComment', store.selectedComment)">
            <option value="">All</option>
            <option value="desc">Dal meno recensito</option>
            <option value="asc">Dal piú recensito</option>

        </select>
        <!-- <input type="range" min="0" max="10" name="comment" v-model="countComment" id="comment" @change="$emit('filterByComment', countComment)"> -->

    </div>
</template>

<style lang="scss" scoped></style>