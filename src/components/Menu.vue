/* eslint-disable no-debugger, no-console */
<template>
  <div>
    <nav id='main-navigation' :class="menuActive ? 'menu-active-index' : 'menu-unactive-index'">

        <ul :class="menuActive ? 'menu-active' : 'menu-unactive'">
            <li><router-link to="/">SOFOFO</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/cart">Cart [{{ itemsInCart }}]</router-link></li>
        </ul>
    </nav>


      <div id='burger' @click="menuToggle" :class="burgerActive ? 'burger-active' : 'burger-unactive'">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {
      menuActive:false,
      burgerActive: false,

    }
  },

  methods:{
    menuToggle(){
      this.menuActive = !this.menuActive;
      this.burgerActive =!this.burgerActive;
    }
  },
  computed:{
    itemsInCart(){return this.$store.getters.cartLength},
  }

}

</script>


<style >

</style>
