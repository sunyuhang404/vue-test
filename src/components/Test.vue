<template>
  <div>
    <slot name="header"></slot>
    <div v-for="(item, index) in list" :key="index">
      <slot :index="index" :name="item"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    mounted() {
      console.log(this.list)
    }
  }
</script>
