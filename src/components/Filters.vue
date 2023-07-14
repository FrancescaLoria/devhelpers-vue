<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'Filters',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="rev-vote text-center mb-3">

        <h4>Voti</h4>
        <select class="form-select form-select-md " name="vote" v-model="store.selectedVote" id="vote"
            @change="$emit('filterByVote', store.selectedVote)">
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>