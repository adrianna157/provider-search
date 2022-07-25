<template>
  <div>
    <h1>These are the providers based off your results...</h1>
  </div>
  <tbody>
    <tr v-for="{ id, name, email } in providers" :key="id">
      <td>{{ name }}</td>
      <td>{{ email }}</td>
    </tr>
  </tbody>
</template>
<script>
import { getUser } from "@/firebase";
export default {
  setup() {
    const providers = getUser();
    return { providers };
  },
};
</script>
