<template>
  <footer class="fixed w-full bottom-0 bg-desert-purple pb-6">
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-gray-700 drop-shadow-lg" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 text-center">
          <div class="text-sm text-white font-semibold py-1 drop-shadow-lg">
            Copyright © {{ date }}
            <a
              href="https://testlink.org/"
              class="text-white hover:text-gray-400 text-sm font-semibold py-1"
              >COIPA</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterBar",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
