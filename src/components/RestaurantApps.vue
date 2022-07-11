<template>
  <section class="pb-5 pt-5">
    <div class="text-xs-center">
      <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <div class="text-xs-center ma-5 pt-5 pb-5">
              <div class="flex display-1 font-weight-light pb-3">
                Web & Mobile Apps Included With Online Ordering
              </div>
              <div class="flex subheading font-weight-light">
                Your customers can order takeout online, schedule orders ahead,
                place delivery orders, collect loyality points, purchase gift
                cards & more. We market your restaurant, upload your menu,
                configure your web & mobile apps and custom design it all for
                free!
              </div>
            </div>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Websites Mobile Apps"
                contain
                src="img/restaurant/web-apps.png"
              >
              </v-img>
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline text-xs-center">Web Apps</div>
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 subheading">
                Web Apps, incorporate the latest technology that delivers an
                "app-like" user experience with smooth scrolling, fast load
                times, displays properly across all devices, and even work
                offline.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Integrated Marketing POS System"
                contain
                src="img/restaurant/web-mobile-apps.png"
              >
              </v-img>
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline text-xs-center">Mobile Apps</div>
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 subheading">
                Mobile apps are downloaded from the Google Play Store or Apple
                Store. These mobile apps work in conjunction with web apps that
                delivers a unique experience on the devices your customers
                prefer.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Integrated Marketing POS System"
                contain
                src="img/restaurant/online-ordering-terminal-restaurant.png"
              >
              </v-img>
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline text-xs-center">Online Ordering</div>
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 subheading">
                Online orders are synced from the web and mobile apps into a
                dedicated online ordering terminal that sits at your "TOGO"
                station. Your staff and customers recieve real-time online order
                notifications.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="text-xs-center pt-5 pb-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/get-started">
                    <v-btn
                      @click.stop="dialog = !dialog"
                      aria-label="Website Pricing"
                      color="primary"
                      dark
                      rounded
                    >
                      CREATE YOUR FREE ACCOUNT
                    </v-btn>
                  </router-link>
                </div>
                <div class="mt-2">
                  <span
                    class="font-weight-light font-italic text--grey lighten-5"
                  >
                    * Web & mobile apps are included with all packages
                  </span>
                </div>
              </v-layout>
            </v-container>
          </v-flex>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "RestaurantMarketing.vue"
};
</script>

<style scoped></style>
