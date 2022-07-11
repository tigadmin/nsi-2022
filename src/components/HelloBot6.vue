<template>
  <!--suppress HtmlUnknownTarget -->
  <v-parallax contain dark src="@/assets/pricing-pos.jpg">
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-2 pb-5 font-weight-thin">Restaurant Insiders</h1>
        <h4 class="headline pb-5">
          Access to the latest technology for your restaurant needs
        </h4>
        <router-link to="/marketing">
          <v-btn
            @click.stop="dialog = !dialog"
            aria-label="Website Pricing"
            class="ma-2"
            color="light-blue darken-4"
            dark
            rounded
          >
            Read More...
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
          Call Now | (864) 990-1059
        </p>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss" scoped></style>
