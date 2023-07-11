<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'Filters',
    data() {
        return {
            selectedVote: '',
            store,
        }
    },
}
</script>

<template>
    <select name="vote" v-model="selectedVote" id="vote" @change="$emit('filterByVote', selectedVote)">
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</template>

<style lang="scss" scoped></style>