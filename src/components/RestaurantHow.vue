<template>
  <section class="pb-5 pt-5">
    <div class="text-xs-center">
      <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <div class="text-xs-center ma-5 pt-5 pb-5">
              <div class="flex display-1 font-weight-light pb-3">
                How It Works
              </div>
              <div class="flex subheading font-weight-light">
                Net Studios Inc. is a marketplace that provides small businesses with a dedicated business advisor, IT director, and USA based project manager to outsource projects —including web development, graphic design, software, writing, and more —all from our certified global pool of talent.
              </div>
            </div>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Search Engine Marketing Mobile Apps"
                contain
                src="@/assets/create-account.jpg"
              >
              </v-img>
              <v-card-title class="headline">Create Account</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Start the process by registering and creating a buyer account.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Direct Mailers Mail"
                contain
                src="@/assets/restaurant-app3.jpg"
              >
              </v-img>
              <v-card-title class="headline">Project Manager</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Select your dedicated USA based IT project manager.
              </v-card-text>
              <!--<v-card-actions>
                                            <router-link to="/localwebsitedesign/"><v-btn aria-label="local websites"  color="teal">Local Websites</v-btn></router-link>
                                          </v-card-actions>-->
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Customer Places Order"
                contain
                src="@/assets/restaurant-chef-order.jpg"
              >
              </v-img>
              <v-card-title class="headline">Post Project</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Define your project for posting to the marketplace.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Customer Places Order"
                contain
                src="@/assets/order-complete.jpeg"
              >
              </v-img>
              <v-card-title class="headline">Subscription</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Purchase a block of time required to get your project done right.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="text-xs-center pt-5 pb-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/small-business-IT-OnDemand-Faq">
                    <v-btn
                      aria-label="Small Business IT On DEMAND"
                      color="primary"
                      dark
                      rounded
                    >
                      VIEW FAQ's -->
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
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "RestaurantHow.vue"
};
</script>

<style scoped></style>
