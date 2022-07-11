<template>
  <section class="pb-5 pt-3">
    <div class="grey lighten-5 text-xs-center">
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout align-center column justify-center>
            <div class="text-xs-center pb-5 pt-5">
              <router-link to="/restaurant-marketing">
                <v-btn
                  @click.stop="dialog = !dialog"
                  aria-label="Website Pricing"
                  color="primary"
                  dark
                  rounded
                >
                  CREATE YOUR FREE ACCOUNT
                </v-btn>
              </router-link>
            </div>
          </v-layout>
        </v-container>
      </v-flex>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloTech"
};
</script>

<style scoped></style>
