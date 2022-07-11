<template>
  <v-app light>
    <v-responsive>
      <section class="white pb-5">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="text-xs-center pb-4">
                <div class="flex display-1 font-weight-light">
                  Register for our upcoming webinar!
                </div>
                <h3>How To Drive Customers From the Web To Your Doorstep</h3>
                <div class="flex subheading font-weight-light text-xs-left">
                  Digital transformations are forcing restaurants to change
                  their business model and requiring these restaurants to adapt
                  to a new "consumer driven" model. Today, consumers expect fast
                  and engaging content based on what they’re doing at anytime,
                  anywhere, and on any device. With this new “consumer driven”
                  model, your restaurant must embrace technology and have the
                  tools to manage the process in order to deliver an unmatched
                  customer experience.
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="white pb-5">
        <v-container grid-list-md text-xs-center>
          <v-layout justify-center row wrap>
            <v-flex xs10>
              <v-card>
                <v-form
                  accept-charset="utf-8"
                  action="https://oversearch.org/form/submit?formId=12"
                  autocomplete="false"
                  class="ma-5 pt-3 pb-3"
                  data-mautic-form="restaurantimage"
                  enctype="multipart/form-data"
                  id="mauticform_restaurantimage"
                  lazy-validation
                  method="post"
                  ref="form"
                  role="form"
                  v-model="valid"
                >
                  <v-text-field
                    :counter="20"
                    :rules="nameRules"
                    data-validate="first_name"
                    data-validation-type="text"
                    id="mauticform_restaurantimage_first_name"
                    label="First Name"
                    required
                    v-model="first_name"
                  ></v-text-field>
                  <v-text-field
                    :counter="20"
                    :rules="nameRules"
                    data-validate="last_name"
                    data-validation-type="text"
                    id="mauticform_restaurantimage_last_name"
                    label="Last Name"
                    required
                    v-model="last_name"
                  ></v-text-field>

                  <v-text-field
                    :rules="emailRules"
                    data-validate="email_address"
                    data-validation-type="email"
                    id="mauticform_restaurantimage_email_address"
                    label="E-mail"
                    required
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    :counter="20"
                    :rules="phoneRules"
                    data-validate="phone_number"
                    data-validation-type="tel"
                    for="mauticform_input_restaurantimage_phone_number"
                    id="mauticform_restaurantimage_phone_number"
                    label="Phone Number"
                    required
                    v-model="phone_number"
                  ></v-text-field>

                  <v-checkbox
                    :rules="[v => !!v || 'I am not a robot!']"
                    label="I am not a robot"
                    required
                    v-model="checkbox"
                  ></v-checkbox>

                  <v-btn
                    :disabled="!valid"
                    @click="validate"
                    color="success"
                    id="mauticform_input_restaurantimage_submit"
                    name="mauticform[submit]"
                    type="submit"
                    value=""
                  >
                    Signup For Webinar
                  </v-btn>

                  <input
                    id="mauticform_restaurantimage_id"
                    name="mauticform[formId]"
                    type="hidden"
                    value="12"
                  />
                  <input
                    id="mauticform_restaurantimage_return"
                    name="mauticform[return]"
                    type="hidden"
                    value=""
                  />
                  <input
                    id="mauticform_restaurantimage_name"
                    name="mauticform[formName]"
                    type="hidden"
                    value="restaurantimage"
                  />
                </v-form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-responsive>
  </v-app>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data: () => ({
    valid: true,
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
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
