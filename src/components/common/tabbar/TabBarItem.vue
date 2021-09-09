<template>
  <div class="tab-bar-item" @click="Itemclick">
      <div v-if="isActive"><slot name="bar-item-icon-active"></slot></div>
      <div v-else><slot name="bar-item-icon"></slot></div>
      <div :style="activeStyle"><slot name="bar-item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive: false
    }
  },
  methods: {
    Itemclick () {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  props: {
    // msg: String
    path: String,
    activeColor: {
      type: String,
      default: '#d4237a'
    }
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
</style>
