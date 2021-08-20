<template>
  <div class="tab-bar-item">
      <div v-if="isActive"><slot name="bar-item-icon-active"></slot></div>
      <div v-else><slot name="bar-item-icon"></slot></div>
      <div :class="{active:isActive}"><slot name="bar-item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      isActive: false
    }
  },
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item >>> img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  .active {
    color: #d4237a;
  }
</style>
