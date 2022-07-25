<template lang="js">

  <div class='bg-desert-purple text-white text-right leading-10'>
    <nav>
      <router-link class="mr-5" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>

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
          text: "About",
          page: "/about",
        },
        {
          id: 2,
          text: "Leadership",
          page: "/leadership",
        },
        {
          id: 3,
          text: "Contact",
          page: "/contact",
        },
        {
          id: 4,
          text: "Resources",
          page: "/resources",
        },
      ],
    };
  },
};
</script>
