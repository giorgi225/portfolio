import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
