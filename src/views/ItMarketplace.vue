<template>
  <div class="restaurant-marketing">
    <RestaurantTech3 />
    <HelloBot2 />
  </div>
</template>

<script>

import HelloBot2 from "@/components/HelloBot2.vue";
import RestaurantTech3 from "@/components/RestaurantTech3.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "ItMarketplace",
  components: {
    RestaurantTech3,
    HelloBot2
  }
};
</script>
