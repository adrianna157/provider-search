<template lang="js">

  <div class='bg-desert-purple text-white text-right leading-10 drop-shadow-lg'>
    <nav>
      <router-link class="mr-5 drop-shadow-lg" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
  <hr class="border-b-1 border-gray-700 drop-shadow-lg" />

</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/",
        },
        {
          id: 1,
          text: "Search Now",
          page: "/search",
        },
        {
          id: 2,
          text: "About",
          page: "/about",
        },
        {
          id: 3,
          text: "Leadership",
          page: "/leadership",
        },
        {
          id: 4,
          text: "Contact",
          page: "/contact",
        },
        {
          id: 5,
          text: "Resources",
          page: "/resources",
        },
      ],
    };
  },
};
</script>
