<template>
  <section class="pb-5 pt-5">
    <div class="text-xs-center">
      <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <div class="text-xs-center ma-5 pt-5 pb-5">
              <div class="flex display-1 font-weight-light pb-3">
                All Inclusive Digital & Print Marketing
              </div>
              <div class="flex subheading font-weight-light">
                The Restaurant Image platform offers you a unique opportunity of
                local advertising within a 10-mile radius of your restaurant.
              </div>
            </div>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Restaurant Search Engine Marketing"
                contain
                src="/img/sem-restaurant-marketing-advertising.jpg"
              >
              </v-img>
              <v-card-title class="headline">Search Marketing</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                When consumers in your local area or neighborhood go to a search
                engine and search for a local restaurant, your restaurant ad is
                displayed.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Restaurant Direct Mailers Mail"
                contain
                src="/restaurant/restaurant-direct-mail-dmm.jpg"
              >
              </v-img>
              <v-card-title class="headline">Print Marketing</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Attract new customers in the neighborhoods around your
                restaurant with highly targeted personalized cards. Custom
                designed cards mailed twice per month.
              </v-card-text>
              <!--<v-card-actions>
                                            <router-link to="/localwebsitedesign/"><v-btn aria-label="local websites"  color="teal">Local Websites</v-btn></router-link>
                                          </v-card-actions>-->
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Customer Places Order"
                contain
                src="rounded"
              >
              </v-img>
              <v-card-title class="headline">Social Marketing</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Today, consumers expect a fast and engaging user experience
                based on what they’re doing at any time, anywhere, and on any
                device.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="pt-5 pb-5 text-xs-center">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout justify-center row wrap>
                <v-flex md2 xs12>
                  <v-card class="elevation-0 transparent">
                    <!--suppress HtmlUnknownTarget -->
                    <v-img
                      alt="Facebook Marketing For Restaurants"
                      contain
                      src="@/assets/icons/logo-facebook.png"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex md2 xs12>
                  <v-card class="elevation-0 transparent hidden-sm-and-down">
                    <!--suppress HtmlUnknownTarget -->
                    <v-img
                      alt="Google Local Search"
                      contain
                      src="@/assets/icons/logo-google.png"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex md2 xs12>
                  <v-card class="elevation-0 transparent hidden-sm-and-down">
                    <v-img
                      alt="Instagram Local Search"
                      contain
                      src="@/assets/icons/logo-instagram.png"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex md2 xs12>
                  <v-card class="elevation-0 transparent hidden-sm-and-down">
                    <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
                    <v-img
                      alt="Instagram Local Search"
                      contain
                      src="@/assets/icons/logo-pinterest.png"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex md2 xs12>
                  <v-card class="elevation-0 transparent hidden-sm-and-down">
                    <v-img
                      alt="Bing Local Search"
                      contain
                      src="@/assets/icons/logo-bing.png"
                    >
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/get-started">
                    <v-btn
                      @click.stop="dialog = !dialog"
                      aria-label="Website Pricing"
                      color="primary"
                      dark
                      round
                    >
                      CREATE YOUR FREE ACCOUNT
                    </v-btn>
                  </router-link>
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
