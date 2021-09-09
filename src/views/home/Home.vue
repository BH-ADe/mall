<template>
  <div class="" id="home">
    <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <main-swiper :banners="this.banners"></main-swiper>
    <recommend :recommend="this.recommends"></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { getHomeMultidata } from '@/network/home.js'
import MainSwiper from './children/MainSwiper.vue'
import Recommend from './children/Recommend.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    MainSwiper,
    Recommend
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    // console.log('creat')
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // console.log(this.banners)
    })
  }
}
</script>

<style>
  
</style>
