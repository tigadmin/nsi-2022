<template>
  <section class="lighten-5 pb-5 pt-5">
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout align-center column justify-center>
          <div class="text-xs-center pb-5 pt-10">
            <router-link to="/small-business-consultants">
              <v-btn
                  aria-label="Restaurant Marketing"
                  color="primary"
                  dark
                  rounded
              >
                VIEW IT-ON-DEMAND SERVICES
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
  name: "HelloTop"
};
</script>
