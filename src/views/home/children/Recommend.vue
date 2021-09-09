<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommend" :key="index" @click="goto(item.link)">
        <div class="recommend-image"><img :src="item.image"></div>
        <div class="recommend-title">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
      recommend: {
          type: Array,
          defaut () {
              return []
          }
      }
  },
  methods: {
      goto (url) {
          window.open(url);
      }
  }
}
</script>

<style>
.recommend {
    display: flex;
    justify-content: center;
    width: 100%;
    padding:10px 0 15px;
    border-bottom: 5px solid #eee;
}
.recommend-item {
    width: 25%;
    height: auto;
    text-align: center;
}

.recommend-item img {
    width: 90%;
    height: auto;
    margin: auto;
}
</style>