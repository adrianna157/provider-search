<!-- eslint-disable prettier/prettier -->
<template lang="js">
  <button @click="change" class="bg-transparent hover:bg-desert-purple text-white font-semibold hover:text-white py-2 px-4 border border-desert-purple hover:border-transparent rounded mr-3 drop-shadow-lg">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "GlobalButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    change() {
      if (this.text === "Search Now") {
        this.$router.push({ name: "search" });
      }
      if (this.text === "Read More") {
        this.$router.push({ name: "about" });
      }
    },
  },
};
</script>
<style lang=""></style>
