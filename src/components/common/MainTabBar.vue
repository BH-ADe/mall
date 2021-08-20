<template>
    <tabbar>
    <template #default>
      <tab-bar-item path='/home'>
      <template v-slot:bar-item-icon>
        <img src="~assets/img/TabBar/bar-icon-home.svg">
      </template>
      <template v-slot:bar-item-icon-active>
        <img src="~assets/img/TabBar/bar-icon-home-a.svg">
      </template>
      <template #bar-item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <template v-slot:bar-item-icon>
        <img src="~assets/img/TabBar/bar-icon-category.svg">
      </template>
      <template v-slot:bar-item-icon-active>
        <img src="~assets/img/TabBar/bar-icon-category-a.svg">
      </template>
      <template #bar-item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/shopcart'>
      <template v-slot:bar-item-icon>
        <img src="~assets/img/TabBar/bar-icon-shopcart.svg">
      </template>
      <template v-slot:bar-item-icon-active>
        <img src="~assets/img/TabBar/bar-icon-shopcart-a.svg">
      </template>
      <template #bar-item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <template v-slot:bar-item-icon>
        <img src="~assets/img/TabBar/bar-icon-profile.svg">
      </template>
      <template v-slot:bar-item-icon-active>
        <img src="~assets/img/TabBar/bar-icon-profile-a.svg">
      </template>
      <template #bar-item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
    </template>
  </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar.vue'
import TabBarItem from 'components/common/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    tabbar,
    TabBarItem
  }
}
</script>

<style>

</style>
