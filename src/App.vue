/* eslint-disable no-debugger, no-console */
<template>
  <div id="app">
      <Menu></Menu>
      <Baner></Baner>
  </div>
</template>

<script>

import Menu from "./components/Menu";
import Baner from './components/Baner';

export default {
  name: 'App',
  components:{ Menu,Baner },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
