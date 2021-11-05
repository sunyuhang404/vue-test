<template>
<div>
  {{ name }}
  asdfasdfa
  asdfasdfaasdfasdf
  asdfasdf
</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'mine'
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('mine before route enter');
    next(vm => {

    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('mine before route update');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('mine before route leave');
    next();
  },
  mounted() {
    console.log('mine mounted');
  },
}
</script>
