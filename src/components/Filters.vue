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
            <option value="">&#xf00d;</option>
            <option value="1">&#xf005;</option>
            <option value=" 2">
                <span v-for="n in 2">
                    &#xf005;
                </span>
            </option>
            <option value="3">
                <span v-for="n in 3">
                    &#xf005;
                </span>
            </option>
            <option value="4">
                <span v-for="n in 4">
                    &#xf005;
                </span>
            </option>
            <option value="5">
                <span v-for="n in 5">
                    &#xf005;
                </span>
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
select {
    font-family: 'FontAwesome', 'Second Font name';
    color: rgb(239, 205, 37);
}
</style>