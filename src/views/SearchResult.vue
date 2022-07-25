<template>
  <div class="text-center">
    <h1>These are the providers based off your results...</h1>
    <div>
      <h1>{{ this.providerData.name.stringValue }}</h1>
      <h1>{{ this.providerData.email.stringValue }}</h1>
    </div>
  </div>
</template>
<script>
import { getUser } from "@/firebase";
export default {
  data() {
    return {
      providerData: null,
    };
  },
  created() {
    this.updateProviders();
  },
  methods: {
    async updateProviders() {
      const providers = await getUser();
      this.providerData =
        providers.docs[0]["_document"]["data"]["value"]["mapValue"]["fields"];
    },
  },
};
</script>
