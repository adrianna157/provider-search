<script setup>
// import { useLoadProviders } from "@/firebase";
import { getUser } from "@/firebase";
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
// import { ProfileCard } from "./ProfileCard.vue";
import Fuse from "fuse.js";

const router = useRouter();
const input = ref("");
let providers = [];

const queryResult = computed(() => {
  const fuse = new Fuse(providers, {
    keys: ["firstName", "lastName", "city", "name"],
  });
  return fuse.search(input.value);
});

onMounted(() => {
  const getProviders = async () => {
    providers = await getUser();
  };

  getProviders();
});

const search = () => {
  router.push({ name: "search-result" });
};
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <div class="flex border-2 border-gray-200 rounded">
      <input
        v-model="input"
        type="text"
        class="px-4 py-2 w-96"
        placeholder="Search For Provider..."
      />
      <button @click="search()" class="px-4 text-white bg-gray-600 border-l">
        Search
      </button>
    </div>

    <div class="flex flex-row mt-4 space-x-5">
      <div
        class="drop-shadow-lg"
        v-for="(provider, index) in queryResult"
        :key="index"
      >
        <figure
          class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-violet-300"
        >
          <img
            class="w-24 h-24 md:w-48 md:h-auto rounded-xl mx-auto"
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yJTIwYW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="doctor"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-yellow-700">
                {{ provider.item.lastName }}, {{ provider.item.firstName }}
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                {{ provider.item.city }}, {{ provider.item.state }}
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>

    <div v-if="input && !queryResult.length">
      <p>Could Not Find</p>
    </div>
  </div>
</template>
