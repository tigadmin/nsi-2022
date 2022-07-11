<template>
  <v-parallax contain dark src="/img/img/pricing-pos.jpg">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-2 pb-5 font-weight-thin">
          Web And Mobile Apps Included
        </h1>
        <h4 class="headline pb-5">
          No Commission | No Hidden Fees | No Middle Man
        </h4>
        <router-link to="/restaurant-website-mobile">
          <v-btn
            @click.stop="dialog = !dialog"
            aria-label="Website Pricing"
            class="ma-2"
            color="light-blue darken-4"
            dark
            rounded
          >
            Learn More
          </v-btn>
        </router-link>
        <div class="mt-2">
          <img
            alt="Restaurant POS Review"
            height="20"
            src="/img/img/top-local-marketing.png"
          />
        </div>

        <p class="font-weight-regular text--grey darken-1">
          Call Now | (864) 990-1059
        </p>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss" scoped></style>
