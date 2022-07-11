<template>
  <section class="pb-5 pt-5">
    <div class="grey lighten-5 text-xs-center">
      <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <div class="text-xs-center ma-5 pt-5 pb-5">
              <div class="flex display-1 font-weight-light pb-3">
                7 Steps For Success
              </div>
              <div class="flex subheading font-weight-light">
                Your all-inclusive fully managed digital marketing company
                specifically designed for restaurants.
              </div>
            </div>
          </v-flex>
          <v-flex md6 xs12>
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/consultation1.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 1: Create Your Account
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                The first step is to create your account. Registration is FREE
                and allows our USA project managers to start the onboarding process.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md6 xs12>
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/consultation.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 2: Select Your Project Manager
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                A USA based project manager will help you define your deliverables and manage your project on your behalf while working with our internal team of top global talent.
                Your designated project manager will work with you for the lifetime of the project.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md6 xs12>
            <!--suppress HtmlUnknownTarget -->
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/team-training-pos.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 3: Purchase Subscription
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Projects are performed on "Time and materials" standards. You must purchase a subscription and "block of time". Any unused blocks of time are rolled over to the next month. Your subscription covers your USA based project manager and access to our marketplace. Blocks of time covers the cost of the professionals working on your project.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md6 xs12>
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/consultation4.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 4: Define Your Project
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Our USA project manager will analyze your requirements and will provide an action plan based on your budget.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md6 xs12>
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/mock-training.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 5: Upload Project Requirements
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Upload your files, diagrams, directions, logos, and any other required information that maybe needed for your project.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md6 xs12>
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/marketing-pos-cloud.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 6: Approve Terms & Milestones
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                After you approve the milestones, deliverables and project terms, your project manager then schedules your project to be listed on the marketplace.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md6 xs12>
            <v-img
              aspect-ratio="1"
              contain
              max-height="260px"
              src="@/assets/consultation8.svg"
            ></v-img>
          </v-flex>
          <v-flex md6 pb-5 xs12>
            <v-card justify-center>
              <v-card-title class="headline"
                >STEP 7: Sit Back & Relax
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Your project manager will work on your behalf and keep you informed on updates, changes, and milestones of your project.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center column justify-center>
          <div class="text-xs-center pb-5 pt-5">
            <router-link to="/small-business-IT-OnDemand-Faq">
              <v-btn
                aria-label="Restaurant Technology"
                color="primary"
                dark
                rounded
              >
                Frequently Asked Questions
              </v-btn>
            </router-link>
          </div>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "RestaurantHow2.vue"
};
</script>

<style scoped></style>
