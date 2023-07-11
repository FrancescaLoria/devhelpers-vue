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
    <h1>comments</h1>
    <select name="comment" v-model="countComment" id="comment" @change="$emit('filterByComment', countComment)">
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

</template>

<style lang="scss" scoped></style>