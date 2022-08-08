<template>
  <div class="restaurant-marketing">
    <RestaurantTech4 />
    <HelloBot2 />
  </div>
</template>

<script>

import HelloBot2 from "@/components/HelloBot2.vue";
import RestaurantTech4 from "@/components/RestaurantTech4.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "ItMarketplace",
  components: {
    RestaurantTech4,
    HelloBot2
  }
};
</script>
