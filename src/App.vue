/* eslint-disable no-debugger, no-console */
<template>
  <div id="app">
      <Menu></Menu>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
          <router-view name="inner"></router-view>
      <Footer></Footer>
  </div>
</template>

<script>

import Menu from "./components/Menu";
import Footer from './components/Footer'


export default {
  name: 'App',
  components:{ Menu,Footer },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
