<template>
  <section class="grey lighten-5 pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Your Restaurant Seen Everywhere Online
            </div>
            <div class="flex subheading font-weight-light">
              We drive customers from the Web to your restaurant—whether your
              restaurant has a Web site or not. We precisely target consumers
              online who are located in your neighborhood, and connect customers
              who are most likely to purchase.
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout align-center row wrap>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="digital strategies"
                contain
                src="@/assets/search-engine-marketing.jpg"
              >
              </v-img>
              <v-card-title class="headline">Local Connect&trade;</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Connect with local customers across all digital channels
                including Google Local, Bing Local and local media sites.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="digital strategies"
                contain
                src="@/assets/restaurant-image-social.jpg"
              >
              </v-img>
              <v-card-title class="headline"
                >Social Connect&trade;
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                We market your restaurant to local customers using Facebook,
                Pinterest, Instagram and other top social media platforms.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Digital Marketing"
                contain
                src="@/assets/restaurant-image-mailer.jpg"
              >
              </v-img>
              <v-card-title class="headline">Mail Connect&trade;</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Maximize your visibility with targeted postcard mailers sent
                direct to neighborhoods in your local area.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img alt="Mobile Apps" contain src="@/assets/media-connect.jpg">
              </v-img>
              <v-card-title class="headline">Media Connect&trade;</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                We target local customers on news media sites based on
                demographics, proximity, radius, and behavior that keeps your
                brand front and center.
              </v-card-text>

              <!--<v-card-actions>
                            <router-link to="/localwebsitedesign/"><v-btn aria-label="local websites"  color="teal">Local Websites</v-btn></router-link>
                          </v-card-actions>-->
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="digital strategies"
                contain
                src="@/assets/local-citations.jpg"
              >
              </v-img>
              <v-card-title class="headline"
                >Citation Connect&trade;</v-card-title
              >
              <v-card-text class="subheading grey--text text--darken-1">
                When someone in your local area searches for your restaurant or
                a restaurant like yours, your Local Ad is displayed prominently.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Payment Solutions"
                contain
                src="@/assets/restaurant-suite-marketing.jpg"
              >
              </v-img>
              <v-card-title class="headline"
                >Restaurant Suite&trade;
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                A single platform to manage your digital locations, including
                online sales, analytics, trends, transactions and more.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout align-center column justify-center>
          <div class="text-xs-center pb-5 pt-5">
            <router-link to="/how-it-works">
              <v-btn
                aria-label="Restaurant How it Works"
                color="primary"
                dark
                rounded
              >
                Learn How It Works
              </v-btn>
            </router-link>
          </div>
        </v-layout>
      </v-container>
    </v-flex>
  </section>
</template>

<script>
export default {
  name: "RestaurantPos1.vue"
};
</script>

<style scoped></style>
