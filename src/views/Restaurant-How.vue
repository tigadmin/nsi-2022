<template>
  <div class="restaurant-marketing">
    <RestaurantHow />
    <RestaurantHow2 />
    <HelloBot2 />
  </div>
</template>

<script>
import RestaurantHow from "@/components/RestaurantHow.vue";
import RestaurantHow2 from "@/components/RestaurantHow2.vue";
import HelloBot2 from "@/components/HelloBot2.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "How-It-Works",
  components: {
    RestaurantHow,
    RestaurantHow2,
    HelloBot2
  }
};
</script>
