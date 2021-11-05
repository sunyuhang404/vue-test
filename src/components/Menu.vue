<template>
<div>menu</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleOpen() {

    },

    handleClose() {

    }
  },
  beforeCreate() {
    console.log('child beforeCreate');
  },
  created() {
    console.log('child created');
  },
  beforeMount() {
    console.log('child beforeMount');
  },
  mounted() {
    console.log('child mounted');
  },
}
</script>

<style lang="less">
.menu-box {
  background-color: #000;
}
</style>
