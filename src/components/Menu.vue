/* eslint-disable no-debugger, no-console */
<template>
    <nav id='main-navigation'>

        <ul :class="menuActive ? 'menu-active' : 'menu-unactive'">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>

        <div id='burger' @click="menuToggle">
          <div></div>
          <div></div>
          <div></div>
        </div>

    </nav>
</template>


<script>

export default {
  name: 'Menu',
  data () {
    return {
      menuActive:false,
    }
  },

  methods:{
    menuToggle(){
      this.menuActive = !this.menuActive;
    }
  }
}

</script>


<style >

</style>
