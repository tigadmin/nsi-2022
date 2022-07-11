<template>
  <div class="restaurant-marketing">
    <RestaurantTech2 />
    <RestaurantTech4 />
    <RestaurantTech3 />
    <RestaurantPos3 />
    <HelloBot2 />
  </div>
</template>

<script>
// @ is an alias to /src
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import RestaurantTech2 from "@/components/RestaurantTech2.vue";
import RestaurantTech4 from "@/components/RestaurantTech4.vue";
import RestaurantTech3 from "@/components/RestaurantTech3.vue";
import HelloBot2 from "@/components/HelloBot2.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "Restaurant-Mobile-Web-Apps",
  components: {
    RestaurantTech4,
    RestaurantTech3,
    RestaurantTech2,
    RestaurantPos3,
    HelloBot2
  }
};
</script>
