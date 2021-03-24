import Vue from 'vue'
import Router from 'vue-router'
import Baner from '../components/Baner';
import RecommendedProducts from '../components/RecommendedProducts'
import Product from '../components/Product'
import AboutUs from '@/components/AboutUs'

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
      components:{
        inner: Product,
      },
      props:true,
      name:'product'
    },
    {
      path:'/about',
      components:{
        default: AboutUs,
      }
    }


  ]
})
