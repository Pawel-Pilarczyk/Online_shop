import Vue from 'vue'
import Router from 'vue-router'
import Baner from '../components/Baner';
import RecommendedProducts from '../components/RecommendedProducts'
import Product from '../components/Product'
import AboutUs from '@/components/AboutUs'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import Contact from '@/components/Contact'
import ControlPanel from '@/components/ControlPanel'

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
    },
    {
      path:'/products',
      components:{
        default: Products,
      }
    },
    {
      path:'/cart',
      components:{
        default: Cart,
      }
    },
    {
      path:'/contact',
      components:{
        default: Contact,
      }
    },
    {
      path:'/controlpanel',
      components:{
        default: ControlPanel,
      }
    }


  ]
})
