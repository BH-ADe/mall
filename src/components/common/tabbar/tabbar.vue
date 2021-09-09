<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
// import TabBarItem from './TabBarItem.vue'
export default {
  // components: { TabBarItem },
  name: 'tabbar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tabbar{
      display: flex;
      background: #f6f6f6;

      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;

      box-shadow: 0px -1px 1px rgba(100,100,100, 0.1);
  }
</style>
