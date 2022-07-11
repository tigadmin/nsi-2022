<template>
  <section class="pb-5">
    <v-container grid-list-xl>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <v-card class="elevation-0">
            <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
            <v-card-content class="justify-center"></v-card-content>
          </v-card>
          <v-card class="pa-lg-5 pt-5 pb-5">
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              <h2>Schedule Consultation</h2>
            </v-card-text>
            <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
            <v-card-content class="justify-center">
              <v-form
                action="https://oversearch.org/index.php/form/submit?formId=4"
                autocomplete="false"
                data-mautic-form="yumaposscheduleconsultation"
                enctype="multipart/form-data"
                id="mauticform_yumaposscheduleconsultation"
                lazy-validation
                method="post"
                ref="form"
                role="form"
                v-model="valid"
              >
                <div
                  class="mauticform-message"
                  id="mauticform_yumaposscheduleconsultation_message"
                ></div>
                <v-text-field
                  :counter="10"
                  :rules="nameRules"
                  for="mauticform_input_yumaposscheduleconsultation_first_name"
                  id="mauticform_input_yumaposscheduleconsultation_first_name"
                  label="First Name"
                  name="mauticform[first_name]"
                  required
                  type="text"
                  v-model="name"
                  value=""
                ></v-text-field>
                <v-text-field
                  :counter="10"
                  :rules="lnameRules"
                  for="mauticform_input_yumaposscheduleconsultation_first_name"
                  id="mauticform_input_yumaposscheduleconsultation_last_name"
                  label="Last Name"
                  name="mauticform[last_name]"
                  required
                  type="text"
                  v-model="lname"
                  value=""
                ></v-text-field>
                <v-text-field
                  :counter="10"
                  :rules="companyRules"
                  id="mauticform_input_yumaposscheduleconsultation_company"
                  label="Company"
                  name="mauticform[company]"
                  required
                  type="text"
                  v-model="company"
                  value=""
                ></v-text-field>
                <v-text-field
                  :counter="10"
                  :rules="phoneRules"
                  class="mauticform-input"
                  data-validate="phone"
                  data-validation-type="tel"
                  id="mauticform_input_yumaposscheduleconsultation_phone"
                  label="Phone"
                  name="mauticform[phone]"
                  type="tel"
                  v-model="phone"
                  value=""
                ></v-text-field>

                <v-text-field
                  :rules="emailRules"
                  for="mauticform_input_yumaposscheduleconsultation_email"
                  id="mauticform_input_yumaposscheduleconsultation_email"
                  label="Email"
                  name="mauticform[email]"
                  required
                  type="email"
                  v-model="email"
                  value=""
                ></v-text-field>

                <v-btn
                  :disabled="!valid"
                  @click="validate"
                  color="success"
                  id="mauticform_input_yumaposscheduleconsultation_submit"
                  name="mauticform[submit]"
                  type="submit"
                >
                  NEXT STEP -->
                </v-btn>
                <input
                  id="mauticform_yumaposscheduleconsultation_id"
                  name="mauticform[formId]"
                  type="hidden"
                  value="4"
                />
                <input
                  id="mauticform_yumaposscheduleconsultation_return"
                  name="mauticform[return]"
                  type="hidden"
                  value=""
                />
                <input
                  id="mauticform_yumaposscheduleconsultation_name"
                  name="mauticform[formName]"
                  type="hidden"
                  value="yumaposscheduleconsultation"
                />
              </v-form>
            </v-card-content>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <!--<v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      id="__vtigerWebForm"
                      name="Yuma POS Contact Form"
                      action="https://jasonnetstudiosinccom.od2.vtiger.com/modules/Webforms/capture.php"
                      method="post"
                      accept-charset="utf-8"
                      enctype="multipart/form-data"
                      >
                        <input type="hidden" name="__vtrftk" value="sid:32bafeb90365eb1f7eb33e4dd498bdf9e1f6c65c,1582491600">
                        <input type="hidden" name="publicid" value="1ca9b5fcb8b0dc30629b65c337448f7f">
                        <input type="hidden" name="urlencodeenable" value="1">
                        <input type="hidden" name="name" value="Yuma POS Contact Form">
                        <input type="hidden" name="__vtCurrency" value="1">
                      <v-text-field
                        v-model="account_id"
                        :counter="40"
                        :rules="nameRules"
                        name="account_id"
                        label="Organization Name"
                        data-label=""
                        value=""
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="firstname"
                        :counter="40"
                        :rules="nameRules"
                        name="firstname"
                        label="First Name"
                        data-label=""
                        value=""
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="lastname"
                        :counter="80"
                        :rules="nameRules"
                        name="lastname"
                        label="Last Name"
                        data-label=""
                        value=""
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        name="email"
                        data-label="Primary Email"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="phone"
                        :rules="nameRules"
                        label="Phone"
                        name="phone"
                        data-label=""
                        required
                      ></v-text-field>
                      <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        value="Submit"
                        @click="validate"
                        id="vtigerFormSubmitBtn"
                      >
                        Validate
                      </v-btn>
                    </v-form>-->
</template>

<script>
export default {
  name: "Quoteco",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Full name is required",
      v => (v && v.length >= 1) || "Name must be more than 1 characters"
    ],
    lname: "",
    lnameRules: [
      v => !!v || "Full name is required",
      v => (v && v.length >= 1) || "Name must be more than 1 characters"
    ],
    company: "",
    companyRules: [
      v => !!v || "Full name is required",
      v => (v && v.length >= 1) || "Name must be more than 1 characters"
    ],
    phone: "",
    phoneRules: [
      v => !!v || "Phone is required",
      v => (v && v.length <= 10) || "Phone must be 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    time: "",
    timeRules: [
      v => !!v || "Time to call is required",
      v => (v && v.length <= 1) || "Time must be completed"
    ]
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

<style scoped></style>
