<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :class="{active: index === currentIndex}" @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
    }
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
    this.currentIndex = index
    this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 44px;
  z-index: 9;
  background: white;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.tab-control-item span {
    padding: 5px;
}
.active span {
    color: pink;
    border-bottom:3px solid pink;
}
</style>
