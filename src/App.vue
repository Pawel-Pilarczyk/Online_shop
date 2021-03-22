/* eslint-disable no-debugger, no-console */
<template>
  <div id="app">
      <Menu></Menu>
      <Baner></Baner>
      <RecommendedProducts></RecommendedProducts>
      <Footer></Footer>
      <Product></Product>
  </div>
</template>

<script>

import Menu from "./components/Menu";
import Baner from './components/Baner';
import RecommendedProducts from './components/RecommendedProducts'
import Footer from './components/Footer'
import Product from './components/Product'

export default {
  name: 'App',
  components:{ Menu,Baner,RecommendedProducts,Footer,Product },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
