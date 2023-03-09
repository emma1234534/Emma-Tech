
import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import about from "../views/about.vue"
import contact from "../views/contact.vue"
import postDetail from "../views/postDetail.vue"

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
  },
  {
    name: "about",
    path: "/about",
    component: about,
  },
  {
    name: "contact",
    path: "/contact",
    component: contact,
  },
  {
    name: "post",
    path: "/post/:id",
    component: postDetail,
  },
];

const router = createRouter({
    history:createWebHistory(),routes
})

export default router