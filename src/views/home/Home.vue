<template>
  <div class="" id="home">
    <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
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


export default {
  name: 'Home',
  components: {
    NavBar,
    MainSwiper,
    Recommend,
    Feature,
    TabControl,
    ProductList
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
      currentType: 'pop'
    }
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
    }
  }
}
</script>

<style>
  #home {
    padding-bottom: 50px;
  }
</style>
