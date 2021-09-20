<template>
  <div class="product-item">
    <a :href="product.link">
      <img :src="product.show.img" alt="">
      <div class="title">{{product.title}}</div>
      <div class="information">
        <span class="prize">¥{{product.price}} </span>
        <span class="like"> ☆{{product.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
  }
}
</script>

<style>
  .product-item {
    text-align: center;
    margin-top: 5px;
    width: 50%;
    justify-self: center;
  }
  .product-item a {
    color: #000;
    text-decoration: none;


  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 15px;
    padding-inline: 5px;
    color: rgb(94, 85, 85);
  }
  .information {
    font-size: 15px;
    padding: 3px;
  }
  .prize {
    color: deeppink;
  }
  .like {
    color: dimgrey;
  }
  .product-item img {
    width: 90%;
    height: auto;
    border-radius: 4px;
  }
</style>
