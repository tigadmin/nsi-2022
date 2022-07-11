<template>
  <section class="white pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Branded Web & Mobile Apps Included
            </div>
            <div class="flex subheading font-weight-light">
              Restaurant Image provides each advertiser with a Web app, Android,
              and iOS mobile app, which is displayed to users when they click on
              your listing. The apps are branded to your restaurant and contain
              your address, store hours, a map, online ordering capabilities,
              tracking and more.
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
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Mobile Apps"
                contain
                src="@/assets/restaurant-mobile-apps-ri.jpg"
              >
              </v-img>
              <v-card-title class="headline">Mobile Apps</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Integrated mobile apps enable online orders, upsells, customer
                loyalty while encouraging repeat visits.
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
                alt="Mobile Apps POS"
                contain
                src="@/assets/fb-web-apps.jpg"
              >
              </v-img>
              <v-card-title class="headline">Web Apps</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Web Apps, similar to mobile apps, are built for desktop users.
                Providing a reliable, fast & engaging experience.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Mobile Apps POS"
                contain
                src="@/assets/online-ordering-restaurant-web-design.jpg"
              >
              </v-img>
              <v-card-title class="headline">Online Orders</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Customers can easily place online orders, re-orders, view order
                history, collect loyalty points and more.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Digital Marketing Tools"
                contain
                src="@/assets/mobile-restaurant-delivery.jpg"
              >
              </v-img>
              <v-card-title class="headline">Takeout & Delivery</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Customers can place takeout/delivery orders using any mobile
                device. This eliminates the need for calling to place orders.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Website POS"
                contain
                src="@/assets/online-ordering-terminal-restaurant.jpg"
              >
              </v-img>
              <v-card-title class="headline">Touchless Payments</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Offer the convenience of touchless payment options including
                curbside pickup, takeout, and contactless delivery. All payments
                are sent direct to your bank.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <v-img
                alt="Website POS"
                contain
                src="@/assets/mobile-pos-apps.jpg"
              >
              </v-img>
              <v-card-title class="headline">Loyalty & Gift Cards</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Customers earn rewards for purchases and can purchase gift cards
                online to use with online ordering.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="text-xs-center pt-5 pb-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/restaurant-mobile-web-apps">
                    <v-btn
                      aria-label="Restaurant Technology"
                      color="primary"
                      dark
                      rounded
                    >
                      LEARN MORE ABOUT Restaurant Suite™
                    </v-btn>
                  </router-link>
                </div>
              </v-layout>
            </v-container>
          </v-flex>
        </div>
      </v-container>
    </v-flex>
  </section>
</template>

<script>
export default {
  name: "RestaurantTech"
};
</script>

<style scoped></style>
