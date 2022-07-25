import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LeadershipView from "@/views/LeadershipView.vue";
import ContactView from "@/views/ContactView.vue";
import ResourceView from "@/views/ResourcesView.vue";
import SearchView from "@/views/SearchView.vue";
import SearchResult from "@/views/SearchResult.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/leadership",
    name: "leadership",
    component: LeadershipView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/resources",
    name: "resources",
    component: ResourceView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/search-result",
    name: "search-result",
    component: SearchResult,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
