<template>
  <div class="hidden-sm-and-down">
    <router-link to="/restaurant-pos-quote-pricing">
      <v-alert
        :fullscreen="$vuetify.breakpoint.xsOnly"
        border="left"
        class="hidden-sm-and-down ma-0"
        color="blue darken-3"
        dark
        dense
        dismissible
        elevation="2"
        icon="notifications_none"
        prominent
        transition="scale-transition"
        v-model="alert"
      >
        <small>May 6, 2020, 13:25</small>
        <span class="pl-2"
          ><small
            ><b>YUMAPOS</b>, CoronaVirus Solutions For Your Restaurant - Learn
            More
          </small>
        </span>
      </v-alert>
    </router-link>
  </div>
</template>
<!--suppress JSUnusedGlobalSymbols -->
<script>
export default {
  name: "Alert"
};
</script>

<style scoped></style>
