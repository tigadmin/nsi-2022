<template>
  <v-parallax contain dark src="@/assets/pricing-pos.jpg">
    <v-layout align-center row wrap>
      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 pb-5 font-weight-thin">
            Remote IT Experts For Small Business
          </h1>
          <h4 class="headline pb-5">
            Includes Designated USA Based Project Manager
          </h4>
          <router-link to="/get-started">
            <v-btn
              @click.stop="dialog = !dialog"
              aria-label="Website Pricing"
              class="ma-2"
              color="light-blue darken-4"
              dark
              rounded
            >
              POST YOUR PROJECT -->
            </v-btn>
          </router-link>
          <div class="mt-2">
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <img
              alt="Restaurant POS Review"
              height="20"
              src="@/assets/top-local-marketing.png"
            />
          </div>

          <p class="font-weight-regular text--grey darken-1">
            Call Now | (803) 509-0090 or check pricing.
          </p>
        </v-col>
      </v-row>
    </v-layout>
  </v-parallax>
</template>
