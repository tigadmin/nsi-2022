<template>
  <div class="restaurant-marketing">
    <HelloWorld1 />
    <HelloBot2 />
  </div>
</template>

<script>

import HelloBot2 from "@/components/HelloBot2.vue";
import HelloWorld1 from "@/components/HelloWorld1";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "restaurantmarketing",
  components: {
    HelloWorld1,
    HelloBot2
  }
};
</script>
