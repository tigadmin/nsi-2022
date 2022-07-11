<template>
  <div class="restaurant-marketing">
    <HelloWorld1 />
    <RestaurantTech />
    <RestaurantTech3 />
    <RestaurantPos3 />
    <HelloBot2 />
  </div>
</template>

<script>
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import RestaurantTech from "@/components/RestaurantTech.vue";
import RestaurantTech3 from "@/components/RestaurantTech3.vue";
import HelloBot2 from "@/components/HelloBot2.vue";
import HelloWorld1 from "@/components/HelloWorld1";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "it-on-demand",
  components: {
    HelloWorld1,
    RestaurantTech,
    RestaurantTech3,
    RestaurantPos3,
    HelloBot2
  }
};
</script>
