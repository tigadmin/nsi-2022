<!--suppress ALL -->
<template>
  <section class="pb-5">
    <v-layout align-center class="my-5" column wrap>
      <v-flex sm8 xs10>
        <div class="text-xs-center pb-4">
          <div class="flex display-1 font-weight-light">24/7 Support</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout align-center row wrap>
            <v-flex xs12>
              <v-card>
                <v-card-title primary-title>
                  <iframe
                    allowfullscreen
                    height="300"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2796658865987!2d-82.37073328476309!3d34.87432298039027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582e12e602c2bb%3A0xc9f329f85692945d!2s1541+Wade+Hampton+Blvd%2C+Greenville%2C+SC+29609!5e0!3m2!1sen!2sus!4v1543000918688"
                    style="border:0"
                    width="100%"
                  ></iframe>
                </v-card-title>

                <v-card-title primary-title>
                  <span>
                    <spacer></spacer>
                    <router-link to="/ticket">
                      <v-btn
                        @click.stop="dialog = !dialog"
                        aria-label="24/7 Customer Support"
                        class="ml-3"
                        color="blue"
                        dark
                        flat
                        justify="end"
                        rounded
                      >
                        SUBMIT TICKET</v-btn
                      >
                    </router-link>
                    <spacer></spacer>
                    <router-link to="/consult">
                      <v-btn
                        @click.stop="dialog = !dialog"
                        aria-label="REQUEST MEETING"
                        class="ml-3"
                        color="blue"
                        dark
                        flat
                        justify="end"
                        rounded
                        >SCHEDULE MEETING</v-btn
                      >
                    </router-link>
                    <!--<spacer></spacer>
                      <router-link to="/consult">
                        <v-btn
                          class="ml-3"
                          @click.stop="dialog = !dialog"
                          aria-label="Knowledge BASE"
                          color="blue"
                          justify="end"
                          dark
                          flat
                          rounded
                        >
                          KNOWLEDGE BASE</v-btn
                        >
                      </router-link>-->
                  </span>
                </v-card-title>
                <div class="text-xs-left">
                  <v-list>
                    <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                    <v-list-tile-content class="ma-5"
                      ><b>Submit Ticket: </b> Current customers who need fastest
                      response, please submit a support ticket or call us
                      direct.
                    </v-list-tile-content>
                  </v-list>
                </div>
                <div class="text-xs-left">
                  <v-list>
                    <v-list-tile-content class="ma-5"
                      ><b>USA Corporate: </b> 1541-D Wade Hampton blvd.
                      Greenville, SC 29609
                    </v-list-tile-content>
                  </v-list>
                </div>
                <div class="text-xs-left">
                  <v-list>
                    <v-list-tile-content class="ma-5"
                      ><b>Telephone: </b> (803) 261-5110
                    </v-list-tile-content>
                  </v-list>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data: () => ({
    valid: true,
    lname: "",
    lnameRules: [v => !!v || "Last Name is required"],
    company: "",
    companyRules: [v => !!v || "Company is required"],
    phone: "",
    phoneRules: [v => !!v || "Phone is required"],
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
