import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Baner from '../components/Baner';
import RecommendedProducts from '../components/RecommendedProducts'
import Product from '../components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      components:{
        default: Baner,
        inner: RecommendedProducts,
      },
    },
    {
      path:'/product/:id',
      component:Product,
      props:true,
    }


  ]
})
