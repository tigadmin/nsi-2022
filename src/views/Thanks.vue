<template>
  <v-app light>
    <div>
      <v-card light>
        <v-responsive>
          <section class="white pb-5 pt-5">
            <v-layout align-center class="my-5" column wrap>
              <v-flex sm8 xs10>
                <div class="text-xs-center pb-4">
                  <div class="flex display-1 font-weight-light">
                    Thank You For Your Interest
                  </div>
                  <v-flex xs12>
                    <div class="flex subheading font-weight-light">
                      We will get back to you within 24 hours.
                    </div>
                  </v-flex>
                </div>
              </v-flex>
            </v-layout>
          </section>
        </v-responsive>
      </v-card>
    </div>
  </v-app>
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
