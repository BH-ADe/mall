<template>
  <div class="nav-bar">
      <div class="navbar-left">
          <slot name="left"></slot>
      </div>
      <div class="navbar-center">
          <slot name="center"></slot>
      </div>
      <div class="navbar-right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  .nav-bar {
      display: flex;
      width: 100%;
      height: 44px;
      text-align: center;
      line-height: 44px;
      background: pink;

      position: fixed;
      top: 0;
      z-index: 9;
  }
  .navbar-left,.navbar-right {
      width: 60px;
  }
  .navbar-center {
      flex: 1;
      color: white;
  }
</style>
