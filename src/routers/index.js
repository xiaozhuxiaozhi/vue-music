import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from "../pages/Recommend"
import Rank from "../pages/Rank"
import Search from "../pages/Search"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'Recommend',
      component: Recommend,
      redirect: "/recommend",
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]

})
