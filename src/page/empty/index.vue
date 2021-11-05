<template>
<div>
  {{ name }}
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '404'
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('home before route enter');
    next(vm => {
      // 通过 vm 访问组件实例
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('home before route update');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('home before route leave');
    next();
  },
  mounted() {
    console.log('home mounted');
  },
}
</script>
