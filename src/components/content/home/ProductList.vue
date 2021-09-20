<template>
  <div class="product-list">
    <product-item v-for="(item,index) in productions" :product="item" :key="index"></product-item>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
  name: 'ProductList',
  props: {
    productions: {
      type: Array,
      default () {
        return []
      }
    }
  }

}
</script>

<style>
  .product-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
