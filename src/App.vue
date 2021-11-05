<template>
<div class="root">
  <section class="right-box">
    <router-view></router-view>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'vue',
    }
  },
}
</script>

<style lang="less">
.root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .right-box {
    flex: 1;
    padding: 0;
    margin: 0;
    background-color: red;
  }
}
</style>
