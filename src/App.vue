/* eslint-disable no-debugger, no-console */
<template>
  <div id="app">
      <Menu></Menu>
      <Baner></Baner>
      <RecommendedProducts></RecommendedProducts>
  </div>
</template>

<script>

import Menu from "./components/Menu";
import Baner from './components/Baner';
import RecommendedProducts from './components/RecommendedProducts'

export default {
  name: 'App',
  components:{ Menu,Baner,RecommendedProducts },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
