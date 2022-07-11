<template>
  <section class="pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center ma-5 pt-5 pb-5">
            <div class="flex display-1 font-weight-light pb-3">
              Increase Restaurant Sales & Get More Customers
            </div>
            <div class="flex subheading font-weight-light">
              Due to COVID-19, your company is most likely scrambling to figure
              out how to survive. You may feel overwhelmed, but you’re in the
              right place.
              <b>We developed Restaurant Suite&trade;to solve this problem</b> -
              and we know first hand the dilemma many restaurants face and more
              importantly the solution to the problem.
            </div>
          </div>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <!--suppress HtmlUnknownTarget -->
            <v-img
              alt="Local Restaurant Marketing"
              contain
              src="@/assets/local-restaurant-restuarant-marketing.jpg"
            >
            </v-img>
            <v-card-title class="justify-center">
              Marketing Expertise
            </v-card-title>
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              As a full-service marketing agency - with 20+ years of experience,
              we understand the digital marketing channels and there purpose in
              the new consumer-driven restaurant model. We know how they should
              be used and when they should work in tandem with one another.
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Integrated Marketing POS System"
              contain
              src="@/assets/restaurant-online-ordering.jpg"
            >
            </v-img>
            <v-card-title class="justify-center"
              >Restaurant Suite&trade;
            </v-card-title>
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              Make it easy for your customers to place online orders with your
              custom branded web and mobile apps. Online orders are synced to a
              dedicated in-store terminal.
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Customer Engagement"
              contain
              src="@/assets/restaurant-targeting.jpg"
            >
            </v-img>
            <v-card-title class="justify-center"
              >Engage More Customers
            </v-card-title>
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              Keep your customers engaged with push notifications, SMS
              messaging, email marketing, order notifications, online loyalty,
              and more.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HelloTop.vue"
};
</script>
