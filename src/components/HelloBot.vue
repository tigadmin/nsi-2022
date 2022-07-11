<template>
  <!--suppress HtmlUnknownTarget -->
  <v-parallax contain dark src="/img/img/pricing-pos.jpg">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-2 pb-5 font-weight-thin">
          Take Back Control Of Your Online Ordering
        </h1>
        <h4 class="headline pb-5">
          No Commission | No Hidden Fees | No Middle Man
        </h4>
        <router-link to="/online-ordering-restaurants">
          <v-btn
            @click.stop="dialog = !dialog"
            aria-label="Website Pricing"
            class="ma-2"
            color="light-blue darken-4"
            dark
            roundedededed
          >
            Learn More
          </v-btn>
        </router-link>
        <div class="mt-2">
          <!--suppress HtmlUnknownTarget -->
          <img
            alt="Restaurant POS Review"
            height="20"
            src="/img/img/top-local-marketing.png"
          />
        </div>

        <p class="font-weight-regular text--grey darken-1">
          Call Now | (803) 354-2363
        </p>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss" scoped></style>
