<template>
  <section class="white pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <div class="flex display-1 font-weight-light">
              Remote IT Services For Small Business
            </div>
            <div class="flex subheading  font-weight-light">
              Net Studios services provides USA based project managers, consultants, sourcing, management, and marketing professionals using "Time and Materials" pricing structure.
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <v-row justify="center">
            <v-flex md8 xs12>
              <v-row justify="center">
                <v-card class="elevation-0 transparent ma-5">
                  <v-img
                    alt="Restaurant Online Ordering Pricing"
                    src="@/assets/net-studios-inc.jpg"
                  >
                  </v-img>
                </v-card>
              </v-row>
            </v-flex>
            <v-container grid-list-md light>
              <v-layout align-center row wrap>
                <v-row justify="center">
                  <v-col class="text-center pt-5 pb-5" cols="12">
                    <h2>
                      Net Studios Inc. |  Subscription
                    </h2>
                  </v-col>
                </v-row>
              </v-layout>
            </v-container>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="25"
              :rowsPerPage="30"
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.advanced }}</td>
                <td class="text-xs-right">{{ props.item.custom2 }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
              </template>
            </v-data-table>
          </v-row>
          <v-layout align-center row wrap>
            <v-row justify="center">
              <v-col class="text-center" cols="8">
                <!--<v-btn class="ma-2" color="primary" exact router to="/get-started"
                                >FREE TRIAL
                                </v-btn
                                >-->
                <p class="caption font-italic">

                </p>
              </v-col>
            </v-row>
          </v-layout>
          <v-layout align-center column justify-center>
            <div class="text-xs-center pb-5 pt-5">
              <router-link to="/get-started">
                <v-btn
                  @click.stop="dialog = !dialog"
                  aria-label="Website Pricing"
                  color="primary"
                  dark
                  round
                >
                  POST YOUR PROJECT
                </v-btn>
              </router-link>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<v-container grid-list-md light>
      <v-layout align-center row wrap>
        <v-row justify="center">
          <v-col class="text-center pt-5 pb-5" cols="12">
            <h2>
              Restaurant Marketing (*Optional)
            </h2>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <v-row justify="center">
            <v-data-table
              :headers="headers2"
              :items="desserts2"
              :items-per-page="25"
              :rowsPerPage="30"
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:items="props2">
                <td>{{ props2.item.name }}</td>
                <td class="text-xs-right">{{ props2.item.advanced }}</td>
                <td class="text-xs-right">{{ props2.item.custom2 }}</td>
                <td class="text-xs-right">{{ props2.item.carbs }}</td>
              </template>
            </v-data-table>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>-->
  </section>
</template>

<script>
export default {
  name: "RestaurantPricingbk",
  data() {
    return {
      length: 30,
      totalVisible: 20,
      headers: [
        {
          text: "SERVICES",
          align: "left",
          length: 10,
          totalVisible: 20,
          sortable: false,
          value: "name"
        },
        {
          text: "NSI SUBSCRIPTION",
          align: "left",
          length: 10,
          totalVisible: 20,
          sortable: false,
          value: "zee"
        },
        {
          text: "NO SUBSCRIPTION",
          align: "left",
          length: 10,
          totalVisible: 20,
          sortable: false,
          value: "adv"
        }
      ],
      desserts: [
        {
          name: "Lifetime NSI Access\n",
          pro: "Included",
          adv: "Per Task / Project",
          zee: "$195.00 per month "
        },
        {
          name: "IT Services\n",
          pro: "Included",
          adv: "Time + Materials ($120.00 per hour)",
          zee: "Time + Materials ($80.00 per hour)"
        },
        {
          name: "IT Consulting\n",
          pro: "Included",
          adv: "$199.00 per hour as needed",
          zee: "Monthly (4 Hours at no cost)"
        },
        {
          name: "IT On-Demand\n",
          pro: "Included",
          adv: "Not Included",
          zee: "Included"
        },
        {
          name: "Discounted Rates:\n",
          pro: "Included",
          adv: "Not Included",
          zee: "Included"
        },
        {
          name: "USA Project Manager\n",
          pro: "N/A",
          adv: "Not Included",
          zee: "Included"
        },
        {
          name: "Marketing Consultant:\n",
          pro: "N/A",
          adv: "Not Included",
          zee: "Included"
        },
        {
          name: "IT Management:\n",
          pro: "N/A",
          adv: "Not Included",
          zee: "Included"
        },
        {
          name: "Lifetime Support:\n",
          pro: "N/A",
          adv: "Not Included",
          zee: "Included"
        },

        {
          name: "24/7 Customer Support:\n",
          pro: "Skype / Email",
          adv: "Limited",
          zee: "Included"
        },
        {
          name: "One-Time Startup Fee:\n",
          pro: "$195.00",
          adv: "$195.00",
          zee: "$100.00"
        },
        {
          name: "Cost Per Month",
          pro: "N/A",
          adv: "N/A\n",
          zee: "$195.00 per month\n"
        }
      ],
      desserts2: [
        {
          name: "Local Connect™:\n",
          pro: "N/A",
          adv: "$99 per month*",
          zee: "Call"
        },
        {
          name: "Social Connect™:\n",
          pro: "N/A",
          adv: "$495 per month*",
          zee: "Call"
        },
        {
          name: "Mail Connect™:\n",
          pro: "N/A",
          adv: "$299.00 setup + $1.85 per postcard*",
          zee: "N/A"
        },
        {
          name: "Media Connect™:\n ",
          pro: "N/A",
          adv: "$99 per month*",
          zee: "Call"
        },
        {
          name: "Citation Connect™:\n ",
          pro: "N/A",
          adv: "$99 per month*",
          zee: "Call"
        },
        {
          name: "How To Guides\n",
          pro: "Yes",
          adv: "Yes",
          zee: "$149 per month"
        },
        {
          name: "Customized Proposal\n",
          pro: "No",
          adv: "Yes",
          zee: "$149 per month"
        },
        {
          name: "Control of Your Campaign\n",
          pro: "Yes",
          adv: "Yes",
          zee: "$149 per month"
        },
        {
          name: "Expert Assistance with Marketing\n",
          pro: "No",
          adv: "Yes",
          zee: "$149 per month"
        },
        {
          name: "MONTHLY",
          pro: "$0 (upgrade anytime)",
          adv: "A la carte: Varies + Ad Spend**",
          zee: "CALL FOR QUOTE"
        }
      ]
    };
  }
};
</script>
