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
    path: "/contact",
    name: "Contact NSI",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Contact-ri.vue")
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
    path: "/license",
    name: "License",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/License.vue")
  },
  {
    path: "/get-started",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://forms.monday.com/forms/820a86755030573b68ca284478a2e283?r=use1";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://forms.monday.com/forms/036802c2ebde4d954c67777d53ea3859?r=use1";
    }
  },
  {
    path: "/it-marketplace",
    target: "_blank",
    beforeEnter() {
      location.href = "http://market.netstudiosinc.com/";
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
    path: "/license",
    target: "_blank",
    beforeEnter() {
      location.href =
        "http://market.netstudiosinc.com/vendor/apply";
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
      location.href = "https://forms.monday.com/forms/036802c2ebde4d954c67777d53ea3859?r=use1";
    }
  },
  {
    path: "/consult",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://forms.monday.com/forms/e8845f5b52af25bd6e86f41198c64507?r=use1";
    }
  },
  {
    path: "/it-experts",
    target: "_blank",
    beforeEnter() {
      location.href =
          "https://forms.monday.com/forms/efdeb56beee9dc8fae6fa5961fa29297?r=use1";
    }
  },
  {
    path: "/brochure",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://indd.adobe.com/view/33f1cb50-cde2-46c3-82f9-81abf8011e6f";
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
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
