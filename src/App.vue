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
              IT-On-Demand Marketplace
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
          <v-btn exact router to="/small-business-consultants">IT ON-DEMAND SERVICES</v-btn>
          <v-btn exact router to="/ItMarketplace">IT MARKETPLACE</v-btn>
          <v-btn exact router to="/how-it-works">HOW IT WORKS</v-btn>
          <v-btn exact router to="/small-business-IT-OnDemand-Faq">FAQ</v-btn>
          <v-btn color="primary" exact router to="/get-started">START NOW</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
      <v-footer :inset="footer.inset" app dense>
        <span class="px-4 flex caption font-weight-light"
          >&copy; {{ new Date().getFullYear() }} Net Studios Inc. | (803) 509-0090 | Net Studios Inc. is a marketplace that provides small businesses with a USA-based dedicated project manager to outsource projects —including web development, graphic design, software, writing, and more —from our global pool of talent.

          <router-link to="/privacy"> Privacy</router-link>|<router-link
            to="/license"
          >
            License</router-link
          >|<router-link to="/terms"> Terms</router-link></span
        >
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
  components: {},

  data: () => ({
    //
    items: [
      { icon: "store", title: "HOME", to: "/", meta: "Net Studios Inc" },
      {
        icon: "shopping_cart",
        title: "IT ON DEMAND™",
        to: "/small-business-consultants"
      },
      {
        icon: "important_devices",
        title: "IT MARKETPLACE",
        to: "/ItMarketplace"
      },
      {
        icon: "list_alt",
        title: "How It Works",
        to: "/how-it-works"
      },
      {
        icon: "loyalty",
        title: "Pricing",
        to: "/it-subscription"
      },
      {
        icon: "login",
        title: "Get Started",
        to: "/get-started"
      }
    ],
    contacts: [
      {
        icon: "group_add",
        title: "24/7 Support",
        to: "/ticket"
      },
      { icon: "phone", title: "(003) 509-0090", to: "/get-started" },
      { icon: "email", title: "hello@netstudiosinc.com", to: "/it-subscription" }
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
