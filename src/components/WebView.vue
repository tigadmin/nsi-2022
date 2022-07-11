<template>
  <v-parallax contain dark src="/img/img/web-app-banner222.jpg">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-2 pb-5 font-weight-thin">
          Web & Mobile Apps For Restaurants
        </h1>
        <h4 class="headline pb-5">
          Increase customer satisfaction and provide a better user experience
        </h4>
        <router-link to="/meeting">
          <v-btn
            @click.stop="dialog = !dialog"
            aria-label="Website Pricing"
            class="ma-2"
            color="light-blue darken-4"
            dark
            rounded
          >
            Schedule Your Demo
          </v-btn>
        </router-link>
        <div class="mt-2">
          <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->

          <img
            alt="Restaurant POS Review"
            height="20"
            src="/img/img/top-local-marketing.png"
          />
        </div>

        <p class="font-weight-regular text--grey darken-1">
          24/7 Support | (803) 354-2363
        </p>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "WebView.vue"
};
</script>

<style scoped></style>
