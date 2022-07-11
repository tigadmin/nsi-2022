<template>
  <div>
    <RestaurantPricingbk />
  </div>
</template>

<script>
// @ is an alias to /src
import RestaurantPricingbk from "@/components/RestaurantPricingbk.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "ItOnDemand Pricing",
  title: "Small Business: Full Service",
  components: {
    RestaurantPricingbk
  }
};
</script>
