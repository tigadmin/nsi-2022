<template>
    <section class="pb-5">
        <v-container grid-list-xl>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <v-card class="elevation-0">
                        <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                        <v-card-content class="justify-center">
                            <iframe
                                    allowfullscreen
                                    height="300"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2796658865987!2d-82.37073328476309!3d34.87432298039027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582e12e602c2bb%3A0xc9f329f85692945d!2s1541+Wade+Hampton+Blvd%2C+Greenville%2C+SC+29609!5e0!3m2!1sen!2sus!4v1543000918688"
                                    style="border:0"
                                    width="100%"
                            ></iframe>
                        </v-card-content>
                    </v-card>
                    <v-card class="pa-lg-5 pt-5 pb-5">
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            <v-list>
                                <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                <v-list-tile-content class="ma-2"
                                ><b>YUMAPOS USA Corporate</b></v-list-tile-content

                                <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                                <v-list-tile-content class="ma-2"
                                >1541-D Wade Hampton Blvd. Greenville, SC
                                    29609
                                </v-list-tile-content

                                <!--suppress HtmlUnknownTag, HtmlUnknownTag -->
                                                <v-list-tile-content class="ma-2"
                                ><b>(803) 354-2363</b></v-list-tile-content
                                >
                            </v-list>
                        </v-card-text>
                        v-card>
                        <v-card-content class="justify-center">
                            <v-form
                                    action="https://jasonnetstudiosinccom.od2.vtiger.com/modules/Webforms/capture.php"
                                    data-mautic-form="Yuma POS Contact Form"
                                    enctype="multipart/form-data"
                                    id="__vtigerWebForm"
                                    lazy-validation
                                    method="post"
                                    ref="form"
                                    role="form"
                                    v-model="valid"
                            >
                                <input
                                        name="publicid"
                                        type="hidden"
                                        value="1ca9b5fcb8b0dc30629b65c337448f7f"
                                />
                                <input name="urlencodeenable" type="hidden" value="1"/>
                                <input
                                        name="name"
                                        type="hidden"
                                        value="Yuma POS Contact Form"
                                />
                                <input name="__vtCurrency" type="hidden" value="1"/>
                                <v-text-field
                                        :counter="10"
                                        :rules="nameRules"
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        required
                                        type="text"
                                        v-model="name"
                                        value=""
                                ></v-text-field>
                                <v-text-field
                                        :counter="10"
                                        :rules="lnameRules"
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        required
                                        type="text"
                                        v-model="lname"
                                        value=""
                                ></v-text-field>
                                <v-text-field
                                        :counter="10"
                                        :rules="companyRules"
                                        id="account_id"
                                        label="Company"
                                        name="account_id"
                                        required
                                        type="text"
                                        v-model="company"
                                        value=""
                                ></v-text-field>
                                <v-text-field
                                        :counter="10"
                                        :rules="phoneRules"
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        required
                                        type="text"
                                        v-model="phone"
                                        value=""
                                ></v-text-field>

                                <v-text-field
                                        :rules="emailRules"
                                        id="email"
                                        label="Email"
                                        name="email"
                                        required
                                        type="text"
                                        v-model="email"
                                        value=""
                                ></v-text-field>

                                <v-btn
                                        :disabled="!valid"
                                        @click="validate"
                                        color="success"
                                        id="mauticform_input_yumapos_submit"
                                        name="mauticform[submit]"
                                        type="submit"
                                        value=""
                                >
                                    Submit
                                </v-btn>
                                <input
                                        id="mauticform_yumapos_id"
                                        name="mauticform[formId]"
                                        type="hidden"
                                        value="7"
                                />
                                <input
                                        id="mauticform_yumapos_return"
                                        name="mauticform[return]"
                                        type="hidden"
                                        value=""
                                />
                                <input
                                        id="mauticform_yumapos_name"
                                        name="mauticform[formName]"
                                        type="hidden"
                                        value="yumapos"
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
    name: "SupportForm",
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
        v => (v && v.length <= 12) || "Name must be less than 12 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      time: "",
      timeRules: [
        v => !!v || "Time to call is required",
        v => (v && v.length <= 10) || "Time must be completed"
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
