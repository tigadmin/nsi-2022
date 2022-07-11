<template>
  <div class="faq">
    <FaqTop />
    <HelloBot2 />
  </div>
</template>

<script>
// @ is an alias to /src
import FaqTop from "@/components/FaqTop";
import HelloBot2 from "@/components/HelloBot2.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "Faq",
  components: {
    FaqTop,
    HelloBot2
  }
};
</script>
