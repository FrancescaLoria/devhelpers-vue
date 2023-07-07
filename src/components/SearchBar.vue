<script>
import { store } from "../store";
export default {
  name: "SearchBar",
  data() {
    return {
      store,
      technologies: [
        "Laravel",
        "PHP",
        "Javascript",
        "Vue",
        "React",
        "Angular",
        "Java",
        "Python",
        "C",
        "HTML",
        "Bootstrap",
      ],
    };
  },
  methods: {
    getTechnology() {
      axios.get(`${this.store.apiUrl}/api/developers`).then((resp) => {
        this.developers = resp.data.results;
      });
    },
    filter(event) {
      console.log(event.target);
      alert(event.target.checked);
    },
  },
};
</script>

<template>
  <form action="" class="dropdown">
    <div v-for="technology in technologies">
      <input
        id="technologies"
        type="checkbox"
        :value="technology"
        v-model="store.technologySelect"
      />
      <label for="technologies">{{ technology }}</label>
    </div>
  </form>
</template>

<style></style>
