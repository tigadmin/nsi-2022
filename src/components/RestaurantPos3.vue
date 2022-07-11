<template>
  <section class="pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Dedicated Single Point Of Contact (USA)</div>
            <div class="flex subheading font-weight-light">
              having the technology and full service marketing team is priceless.
              Today, consumers expect a fast and engaging user experience based
              on what they’re doing at any time, anywhere, and on any device.
              With this new “consumer-driven” model, having the technology and
              full service marketing team is priceless.
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <v-flex xs12>
      <v-container grid-list-md>
        <v-layout align-center row wrap>
          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <v-img
                alt="Restaurant Mobile Apps"
                contain
                src="@/assets/yumapos-restaurant2.jpg"
              >
              </v-img>
              <v-card-title class="justify-center"
                >Web & Mobile Apps
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                We upload your menu and custom brand your apps to match the
                branding of your restaurant. We then integrate online ordering
                and set up your account on our restaurant platform.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <v-img
                alt="Restaurant Branding"
                contain
                src="@/assets/yumapos-restaurant-terminal.jpg"
              >
              </v-img>
              <v-card-title class="justify-center"
                >Online Ordering Terminal
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                We pre-configure your online ordering terminal and install the
                latest software version. Your online ordering terminal pulls in
                all orders from the web, making it easy to manage.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Marketing"
                contain
                src="@/assets/mobile-apps-restaurant.jpg"
              >
              </v-img>
              <v-card-title class="justify-center"
                >Marketing Tools</v-card-title
              >
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                Easily send push notifications, emails and SMS messages to your
                customers. Reward your most loyal customers with loyalty,
                discounts, gift cards, promotions and more.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-layout align-center column justify-center>
      <div class="text-xs-center pb-5 pt-10">
        <router-link to="/how-it-works">
          <v-btn aria-label="Restaurant Marketing" color="primary" dark rounded>
            LEARN HOW IT WORKS
          </v-btn>
        </router-link>
      </div>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: "RestaurantPos3.vue"
};
</script>

<style scoped></style>
