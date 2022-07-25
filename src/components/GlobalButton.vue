<!-- eslint-disable prettier/prettier -->
<template lang="js">
  <button class="bg-transparent hover:bg-desert-purple text-white font-semibold hover:text-white py-2 px-4 border border-desert-purple hover:border-transparent rounded mr-3">
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
};
</script>
<style lang=""></style>
