import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/small-business-consultants",
    name: "BusinessConsultant",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SmallBusiness.vue")
  },
  {
    path: "/ItMarketplace",
    name: "ItMarketplace",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/ItMarketplace.vue")
  },
  {
    path: "/restaurant-mobile-web-apps",
    name: "Restaurant-Mobile-Web-Apps",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Restaurant-Mobile-Web-Apps.vue"
      )
  },
  {
    path: "/small-business-IT-OnDemand-Faq",
    name: "Faq",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Faq.vue")
  },
  {
    path: "/restaurant-support",
    name: "Support",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Support.vue")
  },
  {
    path: "/it-subscription",
    name: "RestaurantPricing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurant-Pricing.vue")
  },
  {
    path: "/how-it-works",
    name: "How It Works",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurant-How.vue")
  },
  {
    path: "/project",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Project.vue")
  },
  {
    path: "/get-started",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://share.hsforms.com/12vflAdSPTRytkXpPVe2WtQ42zg1";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://share.hsforms.com/14WIo9mp9QcCNCCU-8eXZag42zg1";
    }
  },
  {
    path: "/greenville-sc-italian-restaurant",
    target: "_blank",
    beforeEnter() {
      location.href = "https://www.briosopasta.com";
    }
  },
  {
    path: "/self",
    target: "_blank",
    beforeEnter() {
      location.href = "https://share.hsforms.com/1DiyahRxJQ66WoWSxhPuVAw42zg1";
    }
  },
  {
    path: "/full",
    target: "_blank",
    beforeEnter() {
      location.href = "https://share.hsforms.com/1vTyseTVYQby63GDmriL_fQ42zg1";
    }
  },
  {
    path: "/videos",
    target: "_blank",
    beforeEnter() {
      location.href = "https://nearme.restaurantimage.com/tag/restaurant-pos";
    }
  },
  {
    path: "/insiders",
    target: "_blank",
    name: "insiders",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://nearme.restaurantimage.com";
    }
  },
  {
    path: "/get-started",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://share.hsforms.com/1JCrzZ9qrSJC_Sjaayt5_rw42zg1";
    }
  },
  {
    path: "/license",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://www.yumapos.com/restaurant-pos/software-licensing/";
    }
  },
  {
    path: "/terms",
    target: "_blank",
    beforeEnter() {
      location.href = "https://www.yumapos.com/restaurant-pos/terms-2/";
    }
  },
  {
    path: "/privacy",
    target: "_blank",
    beforeEnter() {
      location.href = "https://www.yumapos.com/restaurant-pos/privacy/";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://share.hsforms.com/14WIo9mp9QcCNCCU-8eXZag42zg1";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://share.hsforms.com/14WIo9mp9QcCNCCU-8eXZag42zg1";
    }
  },
  {
    path: "/consult",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://meetings.hubspot.com/jason97?_ga=2.202697877.580962950.1593951101-228482065.1591022274";
    }
  },
  {
    path: "/brochure",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://indd.adobe.com/view/ed30c5bd-e43b-4b90-906e-67ce39610d38";
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
