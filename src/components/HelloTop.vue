<template>
  <section class="grey lighten-5 pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              It-On-Demand Services For Small Business
            </div>
            <div class="flex subheading  font-weight-light">
              As a small business, we understand the complexity of finding proactive & competent IT resources.

              Many small business are constantly developing new products and services, which leads to an overload of it's internal resources.

              We have a global team of expert designers, coders, marketers, consultants and more that are available on demand as you need them.
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
              <!--suppress HtmlUnknownTarget -->
              <v-img
                  alt="USA Based IT & Business Advisors"
                  contain
                  max-height="480px"
                  src="@/assets/it-dedicated-project-manager.jpg"
              >
              </v-img>
              <v-card-title class="justify-center">USA Project Manager
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                Our USA based dedicated project managers works directly with your company using IT-On-Demand services that enables you to pay as need resources. Your project manager is your dedicated point of contact that makes it easy to aquire highly qualified professionals on time and under budget.
                We manage the entire lifescyle process of your IT needs.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <v-img
                  alt="Local Restaurant Marketing"
                  contain
                  max-height="480px"
                  src="@/assets/top-it-talent-pros-cloud-guy.jpg"
              >
              </v-img>
              <v-card-title class="justify-center">
                Remote IT Professionals
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                With 20+ years of IT experience, we have a global network of IT professionals available on-demand as you need them.  Your subscription gives you full unrestricted access to top global talent based on your exact requirements. We manage all your resources on your behalf at one of our global offices.

                <!--Contact us and we can provide two weeks free, you only pay if your satisfied. No risk, no obligation.-->
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card class="elevation-0 transparent">
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Integrated Marketing POS System"
                contain
                max-height="480px"
                src="@/assets/it-on-demand-cloud.jpg"
              >
              </v-img>
              <v-card-title class="justify-center"
                >It-On-Demand&trade; Services
              </v-card-title>
              <v-card-text class="grey--text  text--darken-2 font-weight-light">
                Scalable IT resources in the cloud that reduces costs and increases productivity. Rather you need a single IT professional or a dedicated team, your dedicated resource will work exclusively with your company based on your requirements.  Our IT resources work remote for your company and physically work in one of our global office.
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
  name: "HelloTop.vue"
};
</script>
