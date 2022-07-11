<template>
  <div class="startri">
    <StartRi />
  </div>
</template>

<script>
// @ is an alias to /src
import StartRi from "@/components/StartRi";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "startri",
  components: {
    StartRi
  }
};
</script>
