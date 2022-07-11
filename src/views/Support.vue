<template>
  <div class="support">
    <SupportForm />
    <HelloBot2 />
  </div>
</template>

<script>
// @ is an alias to /src
import SupportForm from "@/components/SupportForm.vue";
import HelloBot2 from "@/components/HelloBot2.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "support",
  components: {
    SupportForm,
    HelloBot2
  }
};
</script>
