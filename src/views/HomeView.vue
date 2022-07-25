<template>
  <div class="home">
    <router-view />
    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "app",
  components: {
    NavigationBar,
  },
};
</script>
