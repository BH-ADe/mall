<template>
  <main-tab-bar></main-tab-bar>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from './components/common/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
