import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Pages/HomePage.vue";
import AdvancedSearch from "./Pages/AdvancedSearch.vue";
import DeveloperDetails from "./Pages/DeveloperDetails.vue";
import NotFound from "./Pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/search/:id",
      name: "searchDev",
      component: AdvancedSearch,
    },
    {
      path: "/details/:id",
      name: "developerDetails",
      component: DeveloperDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
