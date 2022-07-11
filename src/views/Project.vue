<template>
  <div class="project">
    <HelloProject />
    <HubProject />
  </div>
</template>

<script>

import HelloProject from "@/components/HelloProject";
import HubProject from "@/components/HubProject";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "Project",
  components: {
    HubProject,
    HelloProject,
  }
};
</script>
