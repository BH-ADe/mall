<template>
  <swiper ref="swiper" v-if="banners.length" :slideCount="banners.length">
    <template #default>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <template #default>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
  name: 'MainSwiper',
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    stopTimer () {
      this.$refs.swiper.stopTimer()
    },
    startTimer () {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer()
      }
    }
  }
}
</script>

<style scoped>
</style>
