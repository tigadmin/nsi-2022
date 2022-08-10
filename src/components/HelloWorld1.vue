<template>
  <section class="pb-5 pt-5">
    <v-container white grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              IT-On-Demand Services For Small Business</div>
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
            <v-card class="elevation-0 transparent">
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Local Website Development Design"
                contain
                src="@/assets/business-advisors-small.png"
              >
              </v-img>
              <v-card-title class="justify-center"
                >IT Consultants
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                Our USA based project managers are more than business coaches or consultants, we are your partners. With a proven track record of success, we help build the foundation of your company in order to scale your business.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <v-img
                  alt="Digital Marketing Tools"
                  contain
                  src="@/assets/it-consultants-marketing.png"
              >
              </v-img>
              <v-card-title class="justify-center"
              >Business Advisors
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                We provide full-growth marketing strategies from concept to completion for small business. Gain a peace of mind, as we handle all your IT marketing needs, allowing you to focus on running your business.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <v-img
                alt="digital strategies"
                contain
                src="@/assets/it-consultants.png"
              ></v-img>
              <v-card-title class="justify-center"
                >IT Experts
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                Our IT consultants work hand to hand with your business advisor to provide IT-ON- DEMAND services for your small business. We help your small business maximize technology and scale with digital technologies.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </section>
</template>

<script>
export default {
  name: "HelloWorld1.vue"
};
</script>

<style scoped></style>
