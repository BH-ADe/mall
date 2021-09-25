<template>
  <div class="home" id="home" ref="home">
    <nav-bar>
      <template #center>
        <div id="top">购物街</div>
      </template>
    </nav-bar>
    <back-top @click="backTop" v-if="this.btnFlag"></back-top>

    <main-swiper :banners="this.banners"></main-swiper>
    <recommend :recommend="this.recommends"></recommend>
    <feature></feature>
    <tab-control :titles="['流行','热款','精选']" @tabClick="tabClick"></tab-control>
    <product-list :productions="this.productions[this.currentType].list"></product-list>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { getHomeMultidata,getHomeData } from '@/network/home.js'

import MainSwiper from './children/MainSwiper.vue'
import Recommend from './children/Recommend.vue'
import Feature from './children/Feature.vue'
import TabControl from 'components/content/home/tabControl.vue'
import ProductList from 'components/content/home/ProductList.vue'
import BackTop from 'components/common/BackTop/BackTop.vue'


export default {
  name: 'Home',
  components: {
  NavBar,
  MainSwiper,
  Recommend,
  Feature,
  TabControl,
  ProductList,
  BackTop
},
data () {
  return {
    banners: [],
    recommends: [],
    productions: {
      'pop': {page: 0,list: []},
      'new': {page: 0,list: []},
      'sell': {page: 0,list: []},
    },
    states: ['pop','new','sell'],
    currentType: 'pop',
    btnFlag: false
  }
},
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
unmounted () {
  window.removeEventListener('scroll', this.scrollToTop)
},
created () {
// 请求数据
  this.getMultidata()
  this.getData('pop')
  this.getData('new')
  this.getData('sell')
},
methods: {
/*
*网络请求
*/

// 请求多项数据
getMultidata () {
  getHomeMultidata().then(res => {
  // console.log(res)
  // console.log(this.banners)
  this.banners = res.data.banner.list
  this.recommends = res.data.recommend.list
})
},
// 请求商品数据
getData (type) {
  this.productions[type].page += 1
  let page = this.productions[type].page
  // console.log(page)
  getHomeData(type,page).then(res => {
    // console.log(res.data.list)
    this.productions[type].list.push(...res.data.list)
    // console.log(this.productions[type].list)
  })
},

/**
 * 事件监听
 */

tabClick (index) {
  this.currentType = this.states[index]
  console.log(this.currentType)
},
backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },

  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 60) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
}
}
</script>

<style>
  #home {
    padding-bottom: 50px;
    padding-top: 44px;
  }
</style>
