<template>
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
                LEARN MORE
              </v-btn>
            </router-link>
          </div>
        </v-layout>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "HelloTech"
};
</script>

<style scoped></style>
