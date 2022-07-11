<template>
  <section class="grey lighten-5 pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Small Business IT Marketplace
            </div>
            <div class="flex subheading font-weight-light">
              Net Studios Inc. mission is to improve the way companies buy and manage IT services. We provide small business with a pool of global IT talent managed by a USA project manager that increases productivity and reduces cost. We offers solutions for both large enterprises and small businesses.
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
                alt="Small Business It Services"
                contain
                src="@/assets/subscribe.jpg"
              >
              </v-img>
              <v-card-title class="headline">Buy Subscription</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Your Net Studios subscriptions gives you access to a global team of experts all lead by a USA project manager.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Small Business IT Projects"
                contain
                src="@/assets/post-it-project.jpg"
              >
              </v-img>
              <v-card-title class="headline"
                >Post Your Project
              </v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Give a detailed description of your expectations and what you want delivered when the project is completed.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="USA IT Project Manager"
                contain
                src="@/assets/usa-project-manager.jpg"
              >
              </v-img>
              <v-card-title class="headline">It Experts</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                The NSI team of USA based IT experts will manage your project for you. We are here when you need us and here when you don't.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="grey lighten-5 text-xs-center pt-5 pb-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/how-it-works">
                    <v-btn
                      aria-label="Website Pricing"
                      color="primary"
                      dark
                      rounded
                    >
                      HOW IT WORKS -->
                    </v-btn>
                  </router-link>
                </div>
              </v-layout>
            </v-container>
          </v-flex>
        </div>
      </v-container>
     <!-- <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-row justify="center">
              <v-card class="elevation-0 transparent ma-5">
                <v-img
                  alt="Restaurant Marketing Online Ordering"
                  src="@/assets/info-graphic-icons.png"
                  contain
                  max-width="300px"
                >
                </v-img>
              </v-card>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>-->
    </v-flex>
  </section>
</template>

<script>
export default {
  name: "RestaurantTech3.vue"
};
</script>

<style scoped></style>
