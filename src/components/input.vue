<template>
  <div>
    <input :value="test" @input="change" />
  </div>
</template>

<script>
  export default {
    props: {
      value: [String, Number]
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    data() {
      return {
        test: '',
      }
    },
    methods: {
      change(val) {
        this.$emit('input', val);
      },

      setCookie(name, value, days) {
        console.log('set cookie')
        let exp = new Date();
        exp.setTime(exp.getTime() + days * 24 * 3600 * 1000);
        document.cookie = `${ name }=${ escape(value) };expire=${ exp.toGMTString() }`
      },

      getCookie(name) {
        let arr = [];
        const reg = new RegExp(`(^| )${ name }=([^;]*)(;|$)`);
        if (arr = document.cookie.match(reg)) {
          console.log(arr)
          console.log(unescape(arr[2]))
        }
      }
    }
  }
</script>
