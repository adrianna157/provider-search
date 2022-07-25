<template>
  <div class="columns-2 gap-0">
    <img
      class="relative h-large w-large top-0 drop-shadow-lg"
      src="@/assets/bachelor.jpeg"
    />
    <div class="bg-desert-orange h-large text-center">
      <h1
        class="text-white text-welcome font-['welcome'] font-bold pt-36 drop-shadow-lg"
      >
        Welcome To Central Oregon's Independent Provider Search
      </h1>
      <h1 class="text-white font-['georgia'] text-large pt-10 drop-shadow-lg">
        Find a Provider You Can Trust
      </h1>
      <div class="grid-rows-2 mt-5">
        <GlobalButton text="Search Now" />
        <GlobalButton text="Read More" />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalButton from "@/components/GlobalButton.vue";

export default {
  name: "app",
  components: {
    GlobalButton,
  },
};
</script>
<style></style>
