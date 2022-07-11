<template>
  <section class="grey lighten-5 pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Typical Web & IT Projects
            </div>
            <div class="blockquote font-italic">
              Below is a short list of the technology that is frequently used in outsourced IT projects.
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <v-container grid-list-md light text-xs-center>
      <v-layout justify-center row wrap>
        <!-- <v-flex md2 xs12>
           <v-card class="elevation-0 transparent">
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
\              <v-img
               alt="Instagram Local Search"
               contain
               src="@/assets/icons/logo-pinterest.png"
             >
             </v-img>
           </v-card>
         </v-flex>-->
        <v-flex xs10>
          <v-card class="elevation-0 transparent hidden-sm-and-down">
            <v-img
                alt="Bing Local Search"
                src="@/assets/it-on-demand-6-small-business.png"
            >
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center column justify-center>
        <div class="text-xs-center pb-5 pt-10">
          <router-link to="/ItMarketplace">
            <v-btn
                aria-label="Small Business It Marketplace"
                color="primary"
                dark
                rounded
            >
              IT-On-Demand Marketplace -->
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Clients.vue"
};
</script>

<style scoped></style>
