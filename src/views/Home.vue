<template>
  <div class="home">
    <HelloWorld />
    <HelloTop />
    <HelloTop2 />
    <Clients />
    <HelloBot2 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// @ is an alias to /src
import HelloTop from "@/components/HelloTop.vue";
import HelloTop2 from "@/components/HelloTop2.vue";
import HelloBot2 from "@/components/HelloBot2.vue";
import Clients from "@/components/Clients.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Clients,
    HelloTop,
    HelloTop2,
    HelloBot2
  }
};
</script>
