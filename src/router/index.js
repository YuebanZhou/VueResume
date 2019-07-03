import Vue from "vue";
import Router from "vue-router";
// import Header from "@/components/Header";
import Home from "@/components/Home";

import About from "@/components/view/About";
import Contact from "@/components/view/Contact";
import Expression from "@/components/view/Expression";
import Technology from "@/components/view/Technology";
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    { path: "/", name: "homeLink", component: Home },
    { path: "/about", name: "aboutLink", component: About },
    { path: "/contact", name: "contactLink", component: Contact },
    { path: "/expression", name: "expressionLink", component: Expression },
    { path: "/technology", name: "technologyLink", component: Technology },
    { path: "*", redirect: "/" }
  ]
});
