<template>
  <v-app>
    <v-app id="App" dark>
      <v-navigation-drawer
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        app
        enable-resize-watcher
        overflow
        temporary
        v-model="primaryDrawer.model"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Net Studios Inc.
            </v-list-item-title>
            <v-list-item-subtitle>
              Remote IT-On-Demand Services
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            :key="item.title"
            :to="item.to"
            link
            v-for="item in items"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            :key="contact.title"
            :to="contact.to"
            link
            v-for="contact in contacts"
          >
            <v-list-item-icon>
              <v-icon>{{ contact.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ contact.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app light>
        <v-app-bar-nav-icon
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
          v-if="primaryDrawer.type !== 'permanent'"
          ><i class="material-icons">
            menu
          </i></v-app-bar-nav-icon
        >
        <v-toolbar-title>
          <router-link to="/">
            <!--suppress HtmlUnknownTarget -->
            <v-img
              alt="Net Studios Inc."
              contain
              cover
              src="@/assets/final-logo-nsi.png"
              width="260"
            />
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn exact router to="/">HOME</v-btn>
          <!--<v-btn exact router to="/restaurant-mobile-web-apps"
            >Restaurant Suite&trade;
          </v-btn>-->
          <v-btn exact router to="/small-business-consultants">IT ON-DEMAND</v-btn>
          <v-btn exact router to="/ItMarketplace">IT SERVICES</v-btn>
          <v-btn exact router to="/how-it-works">HOW IT WORKS</v-btn>
          <v-btn exact router to="/it-subscription">PRICING</v-btn>
          <v-btn color="primary" exact router to="/get-started">GET A QUOTE</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
      <v-footer :inset="footer.inset" app dense>
        <span class="px-4 flex caption font-weight-light"
          >&copy; {{ new Date().getFullYear() }} Net Studios Inc. | (803) 509-0090

          <router-link to="/privacy"> Privacy</router-link> | |<router-link to="/terms"> Terms</router-link> | <router-link to="/it-experts"> IT Pros Join Our Network</router-link>
        </span>
        <!--<v-col cols="12" sm="12" md="6">
        <v-btn
          absolute
          dark
          fab
          top
          right
          @click="dialog2 = true"
          router
          color="green darken-1"
          class="ma-2"
          to="/meeting"
          ><i class="material-icons">chat</i>
        </v-btn>
      </v-col>-->
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted () {
    window.scrollTo(0, 0);
  },
  components: {},

  data: () => ({
    //
    items: [
      { icon: "store", title: "HOME", to: "/", meta: "Net Studios Inc" },
      {
        icon: "shopping_cart",
        title: "IT ON DEMAND™",
        to: "/small-business-consultants",
        meta: "IT-On-Demand Small Business"
      },
      {
        icon: "important_devices",
        title: "IT SERVICES",
        to: "/ItMarketplace",
        meta: "IT Services For Small Business"
      },
      {
        icon: "list_alt",
        title: "HOW IT WORKS",
        to: "/how-it-works",
        meta: "NSI How Does It Work"
      },
      {
        icon: "list_alt",
        title: "PRICING",
        to: "/it-subscription",
        meta: "In a hurry? Grab our brochure"
      },
      {
        icon: "login",
        title: "GET QUOTE",
        to: "/get-started",
        meta: "Remote IT Services In The Cloud"

      }
    ],
    contacts: [
      {
        icon: "group_add",
        title: "CONTACT",
        to: "/contact",
        meta: "24/7 Support"

      },
      {
        icon: "login",
        title: "JOIN IT PRO NETWORK",
        meta: "IT PRO NETWORK",
        to: "/it-experts"
      },
      {
        icon: "login",
        title: "BECOME A PARTNER",
        meta: "Business Advisors Partners",
        to: "/get-started"
      }
    ],
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    return: {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  })
};
</script>
